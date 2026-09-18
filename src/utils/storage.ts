import { Question, QuizProgress, QuizSessionResult } from '../types';
import { DEFAULT_QUESTIONS } from '../data/defaultQuestions';

const STORAGE_KEYS = {
  QUESTIONS: 'quiz_questions_data_1000_fr_v2',
  MISTAKES: 'quiz_mistakes_v1',
  FAVORITES: 'quiz_favorites_v1',
  PROGRESS: 'quiz_progress_v1',
  COMPLETED: 'quiz_completed_questions_v1',
};

// 1. Questions Persistence (Guaranteed 1,000 Questions)
export function loadQuestions(): Question[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(DEFAULT_QUESTIONS));
      return DEFAULT_QUESTIONS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length >= 1000) {
      return parsed;
    }
    // If older cached database had fewer than 1,000 questions, upgrade to full 1,000
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(DEFAULT_QUESTIONS));
    return DEFAULT_QUESTIONS;
  } catch (e) {
    console.error('Error loading questions from localStorage:', e);
  }
  return DEFAULT_QUESTIONS;
}

export function saveQuestions(questions: Question[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  } catch (e) {
    console.error('Error saving questions to localStorage:', e);
  }
}

export function resetQuestionsToDefault(): Question[] {
  try {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(DEFAULT_QUESTIONS));
  } catch (e) {
    console.error('Error resetting questions:', e);
  }
  return DEFAULT_QUESTIONS;
}

// 2. Completed Questions Tracking (Part-Specific and Global Progress)
export interface CompletedRecord {
  isCorrect: boolean;
  timestamp: string;
}

export function loadCompletedMap(): Record<string, CompletedRecord> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Error loading completed questions:', e);
    return {};
  }
}

export function recordQuestionCompleted(questionId: string, isCorrect: boolean): Record<string, CompletedRecord> {
  try {
    const map = loadCompletedMap();
    map[questionId] = {
      isCorrect,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(map));
    return map;
  } catch (e) {
    console.error('Error recording completed question:', e);
    return loadCompletedMap();
  }
}

export function getPartCompletedCount(
  questions: Question[],
  completedMap: Record<string, CompletedRecord>,
  partNum: number
): { completed: number; total: number; percentage: number } {
  const partQuestions = questions.filter((q) => q.part === partNum);
  const total = partQuestions.length || 100;
  const completed = partQuestions.filter((q) => completedMap[q.id] !== undefined).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percentage };
}

export function getGlobalCompletedCount(
  questions: Question[],
  completedMap: Record<string, CompletedRecord>
): { completed: number; total: number; percentage: number } {
  const total = questions.length || 1000;
  const completed = questions.filter((q) => completedMap[q.id] !== undefined).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percentage };
}

// 3. Mistakes Persistence
export function loadMistakeIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MISTAKES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error loading mistakes:', e);
    return [];
  }
}

export function recordMistake(questionId: string): void {
  try {
    const existing = new Set(loadMistakeIds());
    existing.add(questionId);
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(Array.from(existing)));
  } catch (e) {
    console.error('Error saving mistake:', e);
  }
}

export function removeMistake(questionId: string): void {
  try {
    const existing = new Set(loadMistakeIds());
    existing.delete(questionId);
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(Array.from(existing)));
  } catch (e) {
    console.error('Error removing mistake:', e);
  }
}

export function clearAllMistakes(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.MISTAKES);
  } catch (e) {
    console.error('Error clearing mistakes:', e);
  }
}

// 4. Favorites Persistence
export function loadFavoriteIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error loading favorites:', e);
    return [];
  }
}

export function toggleFavoriteId(questionId: string): boolean {
  try {
    const existing = new Set(loadFavoriteIds());
    let isFav = false;
    if (existing.has(questionId)) {
      existing.delete(questionId);
      isFav = false;
    } else {
      existing.add(questionId);
      isFav = true;
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(Array.from(existing)));
    return isFav;
  } catch (e) {
    console.error('Error toggling favorite:', e);
    return false;
  }
}

// 5. Progress & History Tracking
const DEFAULT_PROGRESS: QuizProgress = {
  totalAttempted: 0,
  totalCorrect: 0,
  examsCompleted: 0,
  bestExamScore: 0,
  lastStudiedDate: '',
  history: [],
};

export function loadProgress(): QuizProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (raw) {
      return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.error('Error loading progress:', e);
  }
  return DEFAULT_PROGRESS;
}

export function recordQuizSession(session: QuizSessionResult): QuizProgress {
  try {
    const current = loadProgress();
    const totalAttempted = current.totalAttempted + session.totalQuestions;
    const totalCorrect = current.totalCorrect + session.correctCount;
    const examsCompleted =
      session.mode === 'exam' || session.mode === 'random100'
        ? current.examsCompleted + 1
        : current.examsCompleted;
    const bestExamScore = Math.max(current.bestExamScore, session.scorePercentage);

    // Keep last 30 history sessions
    const history = [session, ...(current.history || [])].slice(0, 30);

    const updated: QuizProgress = {
      totalAttempted,
      totalCorrect,
      examsCompleted,
      bestExamScore,
      lastStudiedDate: new Date().toISOString(),
      history,
    };

    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error recording quiz session:', e);
    return DEFAULT_PROGRESS;
  }
}
