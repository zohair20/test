import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle,
  XCircle,
  Clock,
  RotateCcw,
  BookOpen,
  ArrowRight,
  AlertTriangle,
  Award
} from 'lucide-react';
import { Question, UserAnswerRecord } from '../types';

interface ExamResultsModalProps {
  questions: Question[];
  answers: Record<string, number>;
  timeSpentSeconds: number;
  onRetake: () => void;
  onReviewMistakes: () => void;
  onClose: () => void;
}

export const ExamResultsModal: React.FC<ExamResultsModalProps> = ({
  questions,
  answers,
  timeSpentSeconds,
  onRetake,
  onReviewMistakes,
  onClose,
}) => {
  const total = questions.length;
  let correctCount = 0;
  const incorrectQuestions: Question[] = [];

  questions.forEach((q) => {
    const selected = answers[q.id];
    if (selected === q.correctAnswer) {
      correctCount++;
    } else {
      incorrectQuestions.push(q);
    }
  });

  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const isPassing = percentage >= 70;

  useEffect(() => {
    if (isPassing) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback if confetti isn't supported in iFrame
      }
    }
  }, [isPassing]);

  // Breakdown by Part
  const partStats: Record<number, { total: number; correct: number }> = {};
  for (let i = 1; i <= 10; i++) {
    partStats[i] = { total: 0, correct: 0 };
  }
  questions.forEach((q) => {
    if (partStats[q.part]) {
      partStats[q.part].total++;
      if (answers[q.id] === q.correctAnswer) {
        partStats[q.part].correct++;
      }
    }
  });

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 my-8 shadow-2xl relative">
        {/* Score Header */}
        <div className="text-center pb-6 border-b border-stone-100 dark:border-stone-800">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-inner bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-600 dark:from-stone-800 dark:to-stone-800 dark:text-blue-400">
            {isPassing ? <Trophy className="w-8 h-8 text-amber-500" /> : <Award className="w-8 h-8 text-blue-500" />}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100 mb-1">
            {isPassing ? 'Félicitations ! Examen Réussi' : 'Examen Terminé'}
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-sm">
            {isPassing
              ? 'Excellent travail de maîtrise ! Vous avez atteint le seuil d\'admissibilité de 70%.'
              : 'Continuez à vous entraîner ! Révisez vos erreurs ci-dessous pour consolider vos acquis.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="bg-stone-50 dark:bg-stone-800/80 px-5 py-3 rounded-2xl border border-stone-200 dark:border-stone-700 text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                {percentage}%
              </span>
              <span className="block text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mt-0.5">
                Note obtenue
              </span>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800/80 px-5 py-3 rounded-2xl border border-stone-200 dark:border-stone-700 text-center">
              <span className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-200">
                {correctCount} / {total}
              </span>
              <span className="block text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mt-0.5">
                Bonnes Réponses
              </span>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800/80 px-5 py-3 rounded-2xl border border-stone-200 dark:border-stone-700 text-center">
              <div className="inline-flex items-center gap-1.5 text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-200">
                <Clock className="w-5 h-5 text-stone-400" />
                <span>{formatTime(timeSpentSeconds)}</span>
              </div>
              <span className="block text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mt-0.5">
                Temps Passé
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown by Part (1 to 10) */}
        <div className="py-6 border-b border-stone-100 dark:border-stone-800">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-3">
            Répartition des Résultats par Partie
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((partNum) => {
              const stat = partStats[partNum] || { total: 0, correct: 0 };
              if (stat.total === 0) return null;
              const partPct = Math.round((stat.correct / stat.total) * 100);
              return (
                <div
                  key={partNum}
                  className="bg-stone-50 dark:bg-stone-800/50 p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-center"
                >
                  <span className="text-xs font-bold text-stone-500 dark:text-stone-400 block">
                    Partie {partNum}
                  </span>
                  <span className="text-base font-extrabold text-stone-900 dark:text-stone-100">
                    {partPct}%
                  </span>
                  <span className="text-[11px] text-stone-400 block">
                    {stat.correct}/{stat.total}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onRetake}
            className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-stone-100 hover:bg-stone-200 text-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200 flex items-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repasser l'examen</span>
          </button>

          <div className="flex items-center gap-2">
            {incorrectQuestions.length > 0 && (
              <button
                onClick={onReviewMistakes}
                className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300 flex items-center gap-2 transition-colors"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Réviser les {incorrectQuestions.length} erreurs</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-colors flex items-center gap-2"
            >
              <span>Retour à l'entraînement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
