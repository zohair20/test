import { DriveFileItem, Question, Difficulty } from '../types';

export const DEFAULT_DRIVE_FOLDER_ID = '17sWrXDIET4ta0zTKeSDMbe0pNYdyGWM-';

export async function fetchDriveFolderFiles(
  accessToken: string,
  folderId: string = DEFAULT_DRIVE_FOLDER_ID
): Promise<DriveFileItem[]> {
  const query = `'${folderId}' in parents and trashed = false`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
    query
  )}&fields=files(id,name,mimeType,size,modifiedTime)&pageSize=100`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData?.error?.message || `Failed to fetch files (HTTP ${response.status})`;
    throw new Error(message);
  }

  const data = await response.json();
  return data.files || [];
}

export async function fetchDriveFileContent(
  accessToken: string,
  fileId: string
): Promise<string> {
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData?.error?.message || `Failed to download file content (HTTP ${response.status})`;
    throw new Error(message);
  }

  return await response.text();
}

/**
 * Universal Question Parser that converts varied JSON / text schemas into our standard Question[] structure.
 */
export function parseQuestionsFromRawData(rawContent: string, defaultPart: number = 1): Question[] {
  let parsed: any;
  try {
    parsed = JSON.parse(rawContent);
  } catch (e) {
    // If not valid JSON, try to parse line-by-line or simple block format
    return parseTextBasedQuestions(rawContent, defaultPart);
  }

  const questions: Question[] = [];

  const normalizeItem = (item: any, fallbackPart: number, index: number): Question | null => {
    if (!item || typeof item !== 'object') return null;

    const questionText = item.question || item.question_text || item.title || item.prompt || item.q || '';
    if (!questionText || typeof questionText !== 'string') return null;

    let rawOptions = item.options || item.choices || item.answers || item.options_list || [];
    let options: string[] = [];

    if (Array.isArray(rawOptions)) {
      options = rawOptions.map(opt => (typeof opt === 'string' ? opt : opt?.text || opt?.label || String(opt)));
    } else if (typeof rawOptions === 'object') {
      options = Object.values(rawOptions).map(v => String(v));
    }

    if (options.length < 2) return null;

    // Determine correct answer index (0 to N-1)
    let correctAnswer = 0;
    const rawAnswer = item.correctAnswer ?? item.correct_answer ?? item.answer ?? item.correct ?? item.answer_index;

    if (typeof rawAnswer === 'number') {
      correctAnswer = rawAnswer >= 0 && rawAnswer < options.length ? rawAnswer : 0;
    } else if (typeof rawAnswer === 'string') {
      const trimmed = rawAnswer.trim();
      const letterIndex = ['A', 'B', 'C', 'D', 'E', 'F'].indexOf(trimmed.toUpperCase());
      if (letterIndex !== -1 && letterIndex < options.length) {
        correctAnswer = letterIndex;
      } else {
        const matchingIdx = options.findIndex(opt => opt.trim().toLowerCase() === trimmed.toLowerCase());
        correctAnswer = matchingIdx !== -1 ? matchingIdx : 0;
      }
    }

    let part = item.part || fallbackPart;
    if (typeof part === 'string') {
      const match = part.match(/\d+/);
      part = match ? parseInt(match[0], 10) : fallbackPart;
    }
    part = Math.max(1, Math.min(10, Number(part) || fallbackPart));

    const topic = item.topic || item.category || item.subject || `Part ${part} Topic`;
    const diffRaw = String(item.difficulty || item.level || 'Moyen').toLowerCase();
    const difficulty: Difficulty =
      diffRaw.includes('easy') || diffRaw.includes('facile') ? 'Facile' :
      diffRaw.includes('hard') || diffRaw.includes('difficile') ? 'Difficile' : 'Moyen';

    const explanation = item.explanation || item.explanation_text || item.rational || item.reason || 'No explanation provided.';

    return {
      id: item.id || `custom-p${part}-q${index}-${Date.now()}`,
      part,
      question: questionText.trim(),
      options: options.map(o => o.trim()),
      correctAnswer,
      explanation: explanation.trim(),
      topic: topic.trim(),
      difficulty,
    };
  };

  // Case 1: Array of questions
  if (Array.isArray(parsed)) {
    parsed.forEach((item, idx) => {
      const q = normalizeItem(item, defaultPart, idx);
      if (q) questions.push(q);
    });
  }
  // Case 2: Object with questions property
  else if (parsed.questions && Array.isArray(parsed.questions)) {
    parsed.questions.forEach((item: any, idx: number) => {
      const q = normalizeItem(item, parsed.part || defaultPart, idx);
      if (q) questions.push(q);
    });
  }
  // Case 3: Object keyed by parts (e.g. {"Part 1": [...], "Part 2": [...]})
  else if (typeof parsed === 'object') {
    Object.keys(parsed).forEach((key) => {
      const val = parsed[key];
      const match = key.match(/\d+/);
      const partNum = match ? parseInt(match[0], 10) : defaultPart;
      if (Array.isArray(val)) {
        val.forEach((item, idx) => {
          const q = normalizeItem(item, partNum, idx);
          if (q) questions.push(q);
        });
      }
    });
  }

  return questions;
}

function parseTextBasedQuestions(text: string, defaultPart: number): Question[] {
  const questions: Question[] = [];
  // Simple regex for format:
  // Q: Question text
  // A) Option 1
  // B) Option 2
  // C) Option 3
  // D) Option 4
  // Answer: A
  // Explanation: ...
  const blocks = text.split(/\n\s*\n+/);
  blocks.forEach((block, idx) => {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length >= 3) {
      const qLine = lines.find(l => l.match(/^(?:Q|\d+[\.\)]|Question:?)/i));
      const optLines = lines.filter(l => l.match(/^[A-Da-d][\.\)]/));
      const ansLine = lines.find(l => l.match(/^(?:Answer|Correct):?/i));
      const expLine = lines.find(l => l.match(/^(?:Explanation|Reason):?/i));

      if (qLine && optLines.length >= 2) {
        const question = qLine.replace(/^(?:Q:?|\d+[\.\)]|Question:?)\s*/i, '');
        const options = optLines.map(l => l.replace(/^[A-Da-d][\.\)]\s*/, ''));
        let correctAnswer = 0;
        if (ansLine) {
          const charMatch = ansLine.match(/[A-Da-d]/);
          if (charMatch) {
            correctAnswer = ['A', 'B', 'C', 'D'].indexOf(charMatch[0].toUpperCase());
            if (correctAnswer === -1) correctAnswer = 0;
          }
        }
        const explanation = expLine ? expLine.replace(/^(?:Explanation|Reason):?\s*/i, '') : 'Explanation available.';

        questions.push({
          id: `txt-p${defaultPart}-${idx}-${Date.now()}`,
          part: defaultPart,
          question,
          options,
          correctAnswer,
          explanation,
          topic: `Part ${defaultPart}`,
          difficulty: 'Moyen'
        });
      }
    }
  });

  return questions;
}
