import React from 'react';
import {
  BarChart3,
  Trophy,
  Target,
  CheckCircle2,
  X,
  History,
  Calendar,
  Layers,
  AlertTriangle,
  Star,
  Check
} from 'lucide-react';
import { QuizProgress, Question, PART_DEFINITIONS } from '../types';
import { CompletedRecord, getPartCompletedCount, getGlobalCompletedCount } from '../utils/storage';

interface ProgressDashboardModalProps {
  progress: QuizProgress;
  mistakesCount: number;
  favoritesCount: number;
  allQuestions: Question[];
  completedMap: Record<string, CompletedRecord>;
  onClose: () => void;
}

export const ProgressDashboardModal: React.FC<ProgressDashboardModalProps> = ({
  progress,
  mistakesCount,
  favoritesCount,
  allQuestions,
  completedMap,
  onClose,
}) => {
  const overallAccuracy =
    progress.totalAttempted > 0
      ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100)
      : 0;

  const globalInfo = getGlobalCompletedCount(allQuestions, completedMap);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 my-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 bg-stone-100 dark:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-2xl">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
              Progression de l'Étude & Performances
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Suivez votre maîtrise sur les 10 parties (1 000 questions au total) et consultez vos résultats.
            </p>
          </div>
        </div>

        {/* Global Progress Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-2xl border border-blue-200 dark:border-blue-900/50 mb-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-bold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
                Progression Globale
              </span>
            </div>
            <span className="text-xs font-extrabold text-blue-700 dark:text-blue-300">
              {globalInfo.completed} / {globalInfo.total.toLocaleString()} terminées ({globalInfo.percentage}%)
            </span>
          </div>
          <div className="w-full bg-blue-200 dark:bg-blue-900/60 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-full transition-all duration-500 rounded-full"
              style={{ width: `${Math.min(100, globalInfo.percentage)}%` }}
            />
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700 text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 block">
              {overallAccuracy}%
            </span>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Précision Globale
            </span>
          </div>

          <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700 text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-stone-800 dark:text-stone-200 block">
              {progress.totalAttempted}
            </span>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Questions Tentées
            </span>
          </div>

          <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700 text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block">
              {progress.bestExamScore}%
            </span>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Meilleur Examen
            </span>
          </div>

          <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700 text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400 block">
              {progress.examsCompleted}
            </span>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Examens Terminés
            </span>
          </div>
        </div>

        {/* Part-Specific Progress (Parts 1 to 10) */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-500" />
            <span>Progression par Spécialité (10 Parties de 100 Questions)</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((partNum) => {
              const partInfo = getPartCompletedCount(allQuestions, completedMap, partNum);
              return (
                <div
                  key={partNum}
                  className="bg-stone-50 dark:bg-stone-800/50 p-3 rounded-xl border border-stone-200 dark:border-stone-700 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-stone-800 dark:text-stone-200 truncate pr-2">
                      {PART_DEFINITIONS[partNum]?.fullName || `Partie ${partNum}`}
                    </span>
                    <span className="text-xs font-semibold text-stone-600 dark:text-stone-300 shrink-0">
                      {partInfo.completed} / {partInfo.total} ({partInfo.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 dark:bg-stone-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 rounded-full ${
                        partInfo.percentage === 100
                          ? 'bg-emerald-500'
                          : partInfo.percentage > 0
                          ? 'bg-blue-600 dark:bg-blue-500'
                          : 'bg-transparent'
                      }`}
                      style={{ width: `${partInfo.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Saved Banks Summary */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-600">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-rose-900 dark:text-rose-200">
                {mistakesCount} Erreurs Enregistrées
              </div>
              <div className="text-xs text-rose-600 dark:text-rose-400">
                Enregistrées localement pour révision ciblée
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-600">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="text-base font-bold text-amber-900 dark:text-amber-200">
                {favoritesCount} Favoris Enregistrés
              </div>
              <div className="text-xs text-amber-600 dark:text-amber-400">
                Questions marquées pour mémorisation rapide
              </div>
            </div>
          </div>
        </div>

        {/* History Log */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-3 flex items-center gap-2">
            <History className="w-4 h-4 text-stone-500" />
            <span>Historique des Sessions d'Examen & d'Entraînement</span>
          </h3>

          {progress.history && progress.history.length > 0 ? (
            <div className="divide-y divide-stone-100 dark:divide-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl overflow-hidden max-h-48 overflow-y-auto">
              {progress.history.map((h) => {
                const modeLabels: Record<string, string> = {
                  practice: 'Entraînement',
                  exam: 'Examen',
                  random100: '100 Aléatoires',
                  mistakes: 'Erreurs',
                  favorites: 'Favoris',
                };
                return (
                  <div
                    key={h.id}
                    className="p-3 flex items-center justify-between gap-3 text-xs hover:bg-stone-50 dark:hover:bg-stone-800/40"
                  >
                    <div>
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        Mode {modeLabels[h.mode] || h.mode}
                      </span>
                      <span className="text-stone-400 ml-2">
                        {h.partFilter === 'all' ? 'Toutes les parties' : `Partie ${h.partFilter}`}
                      </span>
                      <div className="text-stone-400 text-[11px]">
                        {new Date(h.date).toLocaleDateString('fr-FR')} à{' '}
                        {new Date(h.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`font-extrabold text-sm ${
                          h.scorePercentage >= 70
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-amber-600 dark:text-amber-400'
                        }`}
                      >
                        {h.scorePercentage}%
                      </span>
                      <span className="text-stone-400 text-[11px] block">
                        {h.correctCount}/{h.totalQuestions} correctes
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-6 text-xs text-stone-400 border border-dashed border-stone-200 dark:border-stone-700 rounded-2xl">
              Aucune session terminée pour l'instant. Passez un examen ou un entraînement pour alimenter votre historique !
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
