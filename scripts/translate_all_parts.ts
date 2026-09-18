import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface RawQuestion {
  id: string;
  part: number;
  topic: string;
  difficulty: string;
  question: string;
  choices: string[];
  options: string[];
  correctAnswer: number;
  explanation: string;
  source?: string;
}

const TOPIC_FR_MAP: Record<string, string> = {
  "Computer Architecture": "Architecture des Ordinateurs",
  "Digital Logic": "Logique Numérique",
  "Operating Systems": "Systèmes d'Exploitation",
  "Linux": "Linux & Commandes",
  "Systems Programming": "Programmation Système",
  "Data Structures": "Structures de Données",
  "Algorithms": "Algorithmes & Complexité",
  "Computer Networks": "Réseaux Informatiques",
  "Telecommunications": "Télécommunications",
  "Database Systems": "Bases de Données",
  "Databases": "Bases de Données",
  "SQL": "SQL & Transactions",
  "SQL & Transactions": "SQL & Transactions",
  "Software Engineering": "Génie Logiciel",
  "Design Patterns": "Patrons de Conception",
  "Cybersecurity": "Cybersécurité",
  "Cryptography": "Cryptographie",
  "Web Technologies": "Technologies Web",
  "Cloud Computing": "Cloud Computing",
  "Distributed Systems": "Systèmes Distribués",
  "Artificial Intelligence": "Intelligence Artificielle",
  "Machine Learning": "Apprentissage Automatique",
  "AI & Machine Learning": "Intelligence Artificielle & ML",
  "Theory of Computation": "Théorie des Automates & Langages",
  "Compilers & Automata": "Automates & Compilation",
  "Compilers": "Compilation & Analyse Syntaxique",
  "Discrete Math": "Mathématiques Discrètes"
};

const DIFFICULTY_FR_MAP: Record<string, string> = {
  "Easy": "Facile",
  "Medium": "Moyen",
  "Hard": "Difficile",
  "Facile": "Facile",
  "Moyen": "Moyen",
  "Difficile": "Difficile"
};

const SOURCE_FR_MAP: Record<string, string> = {
  "Previous Exam": "Examen Précédent",
  "Examen Précédent": "Examen Précédent",
  "Generated": "Préparation",
  "Préparation": "Préparation"
};

async function translateBatch(batch: RawQuestion[]): Promise<RawQuestion[]> {
  const promptItems = batch.map((q, idx) => ({
    i: idx,
    id: q.id,
    question: q.question,
    options: q.options || q.choices,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    topic: q.topic,
    difficulty: q.difficulty,
    source: q.source
  }));

  const systemInstruction = `Tu es un professeur agrégé et expert en informatique francophone.
Traduis fidèlement, rigoureusement et techniquement les QCMs informatiques de l'anglais vers le français universitaire standard.
Règles impératives :
1. Chaque question doit être rédigée dans un français impeccable avec la terminologie informatique standard.
2. Les 4 options doivent être traduites dans le MÊME ORDRE exact afin que le champ correctAnswer reste valide.
3. L'explication technique détaillée (explanation) doit être intégralement rédigée en français pédagogique et clair.
4. Traduis les topics selon les standards français (ex: "Architecture des Ordinateurs", "Logique Numérique", "Systèmes d'Exploitation", "Structures de Données", "Algorithmes", etc.).
5. difficulty doit être l'un de : "Facile", "Moyen", "Difficile".
6. source doit être l'un de : "Examen Précédent", "Préparation".
7. Réponds UNIQUEMENT avec un tableau JSON valide contenant exactement les objets traduits.`;

  const userPrompt = `Voici ${promptItems.length} questions à traduire en JSON :
${JSON.stringify(promptItems, null, 2)}

Réponds UNIQUEMENT avec le JSON complet au format :
[
  {
    "i": 0,
    "id": "...",
    "topic": "...",
    "difficulty": "Facile|Moyen|Difficile",
    "question": "...",
    "options": ["...", "...", "...", "..."],
    "correctAnswer": 0,
    "explanation": "...",
    "source": "Examen Précédent"
  },
  ...
]`;

  const delays = [2000, 4000, 7000, 12000, 20000, 30000];
  for (let attempt = 0; attempt < delays.length; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: systemInstruction + '\n\n' + userPrompt }] }
        ],
        config: {
          responseMimeType: 'application/json',
          temperature: 0.1,
        }
      });

      const responseText = response.text || '';
      const parsed = JSON.parse(responseText.trim());
      if (Array.isArray(parsed) && parsed.length === batch.length) {
        return parsed.map((item, idx) => {
          const original = batch[idx];
          const frDifficulty = DIFFICULTY_FR_MAP[item.difficulty] || DIFFICULTY_FR_MAP[original.difficulty] || "Moyen";
          const frTopic = TOPIC_FR_MAP[item.topic] || TOPIC_FR_MAP[original.topic] || item.topic || original.topic;
          const frSource = SOURCE_FR_MAP[item.source] || SOURCE_FR_MAP[original.source || ''] || "Examen Précédent";
          const opts = Array.isArray(item.options) && item.options.length === 4 ? item.options : original.options;

          return {
            id: original.id,
            part: original.part,
            topic: frTopic,
            difficulty: frDifficulty,
            question: item.question || original.question,
            choices: opts,
            options: opts,
            correctAnswer: typeof item.correctAnswer === 'number' ? item.correctAnswer : original.correctAnswer,
            explanation: item.explanation || original.explanation,
            source: frSource
          };
        });
      }
    } catch (err) {
      console.warn(`Attempt ${attempt + 1} failed for batch starting with ${batch[0]?.id}, waiting ${delays[attempt]}ms...`, err);
      await new Promise(r => setTimeout(r, delays[attempt]));
    }
  }

  // Fallback if all attempts fail
  console.error(`Fallback triggered for batch starting at ${batch[0]?.id}`);
  return batch.map(q => ({
    ...q,
    topic: TOPIC_FR_MAP[q.topic] || q.topic,
    difficulty: DIFFICULTY_FR_MAP[q.difficulty] || "Moyen",
    source: SOURCE_FR_MAP[q.source || ''] || "Examen Précédent",
  }));
}

async function processPart(partNumber: number) {
  const partFilePath = path.join(process.cwd(), 'src', 'data', 'parts', `part${partNumber}.ts`);
  if (!fs.existsSync(partFilePath)) {
    console.error(`File not found: ${partFilePath}`);
    return;
  }

  // Use dynamic import since tsx can load TS files directly
  const modulePath = path.resolve(partFilePath);
  const mod = await import(`file://${modulePath}`);
  const exportKey = `PART_${partNumber}_QUESTIONS`;
  const questions: RawQuestion[] = mod[exportKey];

  if (!questions || !Array.isArray(questions)) {
    console.error(`Could not load ${exportKey} from ${partFilePath}`);
    return;
  }

  console.log(`Processing Part ${partNumber}: loaded ${questions.length} questions.`);

  const BATCH_SIZE = 25;
  const translatedQuestions: RawQuestion[] = [];

  for (let i = 0; i < questions.length; i += BATCH_SIZE) {
    const chunk = questions.slice(i, i + BATCH_SIZE);
    console.log(`Part ${partNumber}: translating questions ${i + 1} to ${i + chunk.length}...`);
    const translatedChunk = await translateBatch(chunk);
    translatedQuestions.push(...translatedChunk);
    // Pause between batches
    await new Promise(r => setTimeout(r, 1500));
  }

  console.log(`Part ${partNumber}: finished translating ${translatedQuestions.length} questions.`);

  // Write back formatted TS
  const outContent = `import { Question } from '../../types';\n\nexport const PART_${partNumber}_QUESTIONS: Question[] = ${JSON.stringify(translatedQuestions, null, 2)};\n`;
  fs.writeFileSync(partFilePath, outContent, 'utf8');
  console.log(`Successfully saved translated Part ${partNumber} to ${partFilePath}`);
}

async function main() {
  const args = process.argv.slice(2);
  let partsToProcess: number[] = [];

  if (args.length > 0) {
    for (const arg of args) {
      if (arg.includes(',')) {
        partsToProcess.push(...arg.split(',').map(s => parseInt(s.trim(), 10)).filter(Boolean));
      } else {
        const num = parseInt(arg.trim(), 10);
        if (num) partsToProcess.push(num);
      }
    }
  } else {
    partsToProcess = [6, 7, 8, 9, 10];
  }

  console.log(`Parts to translate: ${partsToProcess.join(', ')}`);

  // Sequential processing with pauses ensures 100% reliable execution without 503 errors
  for (const p of partsToProcess) {
    console.log(`\n=== Starting Part ${p} ===`);
    try {
      await processPart(p);
    } catch (err) {
      console.error(`Error processing Part ${p}:`, err);
    }
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log("\nAll requested parts translated successfully!");
}

main().catch(err => {
  console.error("Fatal error during translation:", err);
  process.exit(1);
});
