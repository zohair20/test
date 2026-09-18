import { Question } from '../types';

/**
 * Ensures questions are strictly unique by id.
 */
export function getUniqueQuestions(questions: Question[]): Question[] {
  const seenIds = new Set<string>();
  const unique: Question[] = [];
  for (const q of questions) {
    if (q && q.id && !seenIds.has(q.id)) {
      seenIds.add(q.id);
      unique.push(q);
    }
  }
  return unique;
}

/**
 * Modern Fisher-Yates (Knuth) Shuffle algorithm.
 * Guarantees unbiased O(N) random permutation.
 */
export function shuffleArray<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

/**
 * Checks if question choices contain relative positional wording like
 * "all of the above", "both A and B", etc. which would break if shuffled.
 */
export function canShuffleOptions(options: readonly string[]): boolean {
  if (!options || options.length <= 1) return false;

  const positionalPatterns = [
    /\b(all|none|both|neither)\s+of\s+the\s+above\b/i,
    /\b(all|none|both|neither)\s+of\s+the\s+below\b/i,
    /\b(both|either)\s+[a-d]\s+(and|or)\s+[a-d]\b/i,
    /\boptions?\s+[a-d]\s+(and|or)\s+[a-d]\b/i,
    /\bstatements?\s+(1|2|i|ii)\b/i,
  ];

  return !options.some((opt) =>
    positionalPatterns.some((pattern) => pattern.test(opt))
  );
}

/**
 * Shuffles the answer choices of a single question while keeping
 * the correctAnswer index strictly synchronized to the correct choice.
 * Returns a cloned Question object without mutating the original.
 */
export function shuffleQuestionChoices(question: Question): Question {
  const rawOptions = question.options || question.choices || [];
  if (!question || rawOptions.length <= 1) {
    return { ...question, options: rawOptions, choices: rawOptions };
  }

  // If choices have positional dependencies like "All of the above", do not shuffle choices
  if (!canShuffleOptions(rawOptions)) {
    return {
      ...question,
      options: [...rawOptions],
      choices: [...rawOptions],
    };
  }

  const indexedItems = rawOptions.map((text, idx) => ({
    text,
    isCorrect: idx === question.correctAnswer,
  }));

  const shuffledItems = shuffleArray(indexedItems);
  const newCorrectIndex = shuffledItems.findIndex((item) => item.isCorrect);
  const newOptions = shuffledItems.map((item) => item.text);

  return {
    ...question,
    options: newOptions,
    choices: newOptions,
    correctAnswer: newCorrectIndex !== -1 ? newCorrectIndex : 0,
  };
}

/**
 * Generates a Random 100 Questions session according to strict specifications:
 * 1. Randomly selects up to 100 strictly UNIQUE questions from the available pool.
 * 2. If fewer than 100 unique questions exist, uses all available unique questions without duplication.
 * 3. Shuffles the question order completely using Fisher-Yates.
 * 4. Shuffles answer choices when possible and keeps correct answer index synchronized.
 * 5. Does not modify the input question database.
 */
export function prepareRandom100Questions(allQuestions: Question[]): Question[] {
  // Step 1: Deduplicate all available questions by ID
  const uniquePool = getUniqueQuestions(allQuestions);

  // Step 2: Shuffle the entire unique pool
  const shuffledPool = shuffleArray(uniquePool);

  // Step 3: Pick up to 100 unique questions
  const targetCount = Math.min(100, shuffledPool.length);
  const selectedQuestions = shuffledPool.slice(0, targetCount);

  // Step 4: Shuffle answer choices for each question while synchronizing correctAnswer
  const finalized = selectedQuestions.map((q) => shuffleQuestionChoices(q));

  // Step 5: Final sanity check to guarantee uniqueness
  const idSet = new Set<string>();
  const strictlyUnique: Question[] = [];
  for (const q of finalized) {
    if (!idSet.has(q.id)) {
      idSet.add(q.id);
      strictlyUnique.push(q);
    }
  }

  return strictlyUnique;
}
