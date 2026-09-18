import React from 'react';
import { Star, Flag, CheckCircle2, XCircle, HelpCircle, ChevronRight, ChevronLeft, Bookmark } from 'lucide-react';
import { Question } from '../types';
import { FormattedQuestionText } from './FormattedQuestionText';
import { DetailedExplanation } from './DetailedExplanation';

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedOption: number | undefined;
  isExamMode: boolean;
  isFavorite: boolean;
  isFlagged: boolean;
  onSelectOption: (optionIndex: number) => void;
  onToggleFavorite: () => void;
  onToggleFlag: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  isExamMode,
  isFavorite,
  isFlagged,
  onSelectOption,
  onToggleFavorite,
  onToggleFlag,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
}) => {
  const isAnswered = selectedOption !== undefined;
  const isCorrect = isAnswered && selectedOption === question.correctAnswer;

  const difficultyColors: Record<string, string> = {
    Facile: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800',
    Easy: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800',
    Moyen: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800',
    Medium: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800',
    Difficile: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-800',
    Hard: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-800',
  };

  const difficultyLabels: Record<string, string> = {
    Facile: 'Facile',
    Easy: 'Facile',
    Moyen: 'Moyen',
    Medium: 'Moyen',
    Difficile: 'Difficile',
    Hard: 'Difficile',
  };

  const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 md:p-7 shadow-sm transition-all">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-stone-100 dark:border-stone-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800">
            Partie {question.part}
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700">
            {question.topic}
          </span>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
              difficultyColors[question.difficulty] || difficultyColors.Moyen
            }`}
          >
            {difficultyLabels[question.difficulty] || question.difficulty}
          </span>
          {question.source && (
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${
                question.source === 'Ancien concours'
                  ? 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700'
                  : 'bg-stone-100 text-stone-700 border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700'
              }`}
            >
              {question.source}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Flag Button */}
          <button
            id="quiz-flag-btn"
            onClick={onToggleFlag}
            title={isFlagged ? 'Retirer le marqueur' : 'Marquer pour révision'}
            className={`p-2 rounded-lg border text-xs transition-colors flex items-center gap-1.5 ${
              isFlagged
                ? 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700 font-semibold'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700'
            }`}
          >
            <Flag className={`w-4 h-4 ${isFlagged ? 'fill-amber-400 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">{isFlagged ? 'Marquée' : 'Marquer'}</span>
          </button>

          {/* Favorite Button */}
          <button
            id="quiz-favorite-btn"
            onClick={onToggleFavorite}
            title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            className={`p-2 rounded-lg border text-xs transition-colors flex items-center gap-1.5 ${
              isFavorite
                ? 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700 font-semibold'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700'
            }`}
          >
            <Star
              className={`w-4 h-4 ${
                isFavorite ? 'fill-amber-400 text-amber-500' : 'text-stone-400'
              }`}
            />
            <span className="hidden sm:inline">{isFavorite ? 'Favori' : 'Ajouter favori'}</span>
          </button>
        </div>
      </div>

      {/* Question Counter and Statement */}
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-2">
          Question {questionNumber} sur {totalQuestions}
        </div>
        <div className="text-lg md:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
          <FormattedQuestionText content={question.question} isTitle={true} />
        </div>
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-6">
        {question.options.map((optionText, idx) => {
          const isSelected = selectedOption === idx;
          const letter = optionLetters[idx] || String(idx + 1);

          let optionStyle = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800 dark:bg-stone-800/60 dark:hover:bg-stone-800 dark:border-stone-700 dark:text-stone-200';
          let letterBadgeStyle = 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-300';
          let icon = null;

          if (isExamMode) {
            // Exam Mode: Only show what user has selected, no answer reveal
            if (isSelected) {
              optionStyle = 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-500/20 dark:bg-blue-950/40 dark:border-blue-500 dark:text-blue-100';
              letterBadgeStyle = 'bg-blue-600 text-white';
            }
          } else {
            // Practice Mode: Reveal correct/incorrect on selection
            if (isAnswered) {
              if (idx === question.correctAnswer) {
                // Correct option (always highlighted green once answered)
                optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-500 dark:text-emerald-100 ring-1 ring-emerald-500';
                letterBadgeStyle = 'bg-emerald-600 text-white';
                icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-auto" />;
              } else if (isSelected) {
                // Incorrect option selected by user
                optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 dark:bg-rose-950/40 dark:border-rose-500 dark:text-rose-100 ring-1 ring-rose-500';
                letterBadgeStyle = 'bg-rose-600 text-white';
                icon = <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-auto" />;
              } else {
                optionStyle = 'opacity-60 bg-stone-50 border-stone-200 text-stone-600 dark:bg-stone-800/40 dark:border-stone-800 dark:text-stone-400';
              }
            }
          }

          return (
            <button
              key={idx}
              onClick={() => onSelectOption(idx)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${optionStyle}`}
            >
              <span
                className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors mt-0.5 ${letterBadgeStyle}`}
              >
                {letter}
              </span>
              <div className="text-sm sm:text-base leading-relaxed grow pt-0.5">
                <FormattedQuestionText content={optionText} />
              </div>
              {icon}
            </button>
          );
        })}
      </div>

      {/* Practice Mode: Pedagogical Detailed Explanation */}
      {!isExamMode && isAnswered && (
        <DetailedExplanation
          question={question}
          selectedOptionIndex={selectedOption}
        />
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-stone-800">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`px-4 py-2 rounded-xl text-sm font-medium border flex items-center gap-1.5 transition-colors ${
            hasPrev
              ? 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-200'
              : 'opacity-40 cursor-not-allowed bg-stone-50 border-stone-200 text-stone-400 dark:bg-stone-900 dark:border-stone-800'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Précédente</span>
        </button>

        <span className="text-xs text-stone-400 dark:text-stone-500">
          Astuce : Touches {isExamMode ? '1 à 4' : 'des options'} pour répondre
        </span>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors shadow-sm ${
            hasNext
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'opacity-40 cursor-not-allowed bg-stone-300 text-stone-500 dark:bg-stone-800 dark:text-stone-600'
          }`}
        >
          <span>Suivante</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
