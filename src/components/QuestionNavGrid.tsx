import React from 'react';
import { Flag, CheckCircle2, XCircle, Circle } from 'lucide-react';
import { Question } from '../types';

interface QuestionNavGridProps {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, number>;
  flaggedQuestionIds: Set<string>;
  isExamMode: boolean;
  onSelectIndex: (index: number) => void;
  onClose?: () => void;
}

export const QuestionNavGrid: React.FC<QuestionNavGridProps> = ({
  questions,
  currentIndex,
  answers,
  flaggedQuestionIds,
  isExamMode,
  onSelectIndex,
  onClose,
}) => {
  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const flaggedCount = flaggedQuestionIds.size;

  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4 shadow-sm">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100 dark:border-stone-800">
        <div>
          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
            Navigateur de Questions
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            {answeredCount} sur {total} répondues • {flaggedCount} marquées
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-xs px-2.5 py-1 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 rounded border border-stone-200 dark:border-stone-700"
          >
            Fermer
          </button>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 text-xs text-stone-600 dark:text-stone-400 mb-3">
        <span className="inline-flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          {isExamMode ? 'Répondue' : 'Correcte'}
        </span>
        {!isExamMode && (
          <span className="inline-flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            Incorrecte
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          Marquée
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-stone-200 dark:bg-stone-700"></span>
          Non répondue
        </span>
      </div>

      {/* Grid */}
      <div className="max-h-72 overflow-y-auto pr-1 grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = answers[q.id] !== undefined;
          const isFlagged = flaggedQuestionIds.has(q.id);
          const isCorrect = isAnswered && answers[q.id] === q.correctAnswer;

          let btnClass = 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300 hover:bg-stone-200';
          if (isExamMode) {
            if (isAnswered) {
              btnClass = 'bg-emerald-600 text-white font-semibold hover:bg-emerald-700';
            }
          } else {
            if (isAnswered) {
              btnClass = isCorrect
                ? 'bg-emerald-600 text-white font-semibold'
                : 'bg-rose-600 text-white font-semibold';
            }
          }

          if (isCurrent) {
            btnClass += ' ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-stone-900 font-bold';
          }

          return (
            <button
              key={q.id}
              onClick={() => {
                onSelectIndex(idx);
                if (onClose) onClose();
              }}
              className={`relative h-9 rounded text-xs transition-all flex items-center justify-center ${btnClass}`}
              title={`Question ${idx + 1} (Partie ${q.part})`}
            >
              {idx + 1}
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white dark:border-stone-900" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
