import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Star,
  Cloud,
  BarChart2,
  Filter,
  Layers,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';
import { Difficulty, QuizMode, PART_DEFINITIONS } from '../types';

interface HeaderProps {
  currentMode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
  selectedPart: number | 'all';
  onSelectPart: (part: number | 'all') => void;
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
  selectedDifficulty: Difficulty | 'all';
  onSelectDifficulty: (difficulty: Difficulty | 'all') => void;
  availableTopics: string[];
  mistakesCount: number;
  favoritesCount: number;
  totalQuestionsCount: number;
  partCompletedInfo?: { completed: number; total: number; percentage: number };
  globalCompletedInfo?: { completed: number; total: number; percentage: number };
  onOpenDriveModal: () => void;
  onOpenProgressModal: () => void;
  onResetFilters: () => void;
  isDriveConnected: boolean;
  userEmail?: string | null;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  selectedPart,
  onSelectPart,
  selectedTopic,
  onSelectTopic,
  selectedDifficulty,
  onSelectDifficulty,
  availableTopics,
  mistakesCount,
  favoritesCount,
  totalQuestionsCount,
  partCompletedInfo,
  globalCompletedInfo,
  onOpenDriveModal,
  onOpenProgressModal,
  onResetFilters,
  isDriveConnected,
  userEmail,
}) => {
  return (
    <header className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-30 shadow-xs">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <span>QCM Informatique & Préparation</span>
              <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800 uppercase">
                10 Parties Spécialisées
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-stone-500 dark:text-stone-400">
              <span className="font-semibold text-stone-700 dark:text-stone-300">
                {totalQuestionsCount.toLocaleString('fr-FR')} Questions Chargées
              </span>
              {selectedPart !== 'all' && partCompletedInfo && (
                <>
                  <span className="text-stone-300 dark:text-stone-600">•</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {PART_DEFINITIONS[selectedPart]?.fullName || `Partie ${selectedPart}`} : {partCompletedInfo.completed} / {partCompletedInfo.total} terminées
                  </span>
                </>
              )}
              {globalCompletedInfo && (
                <>
                  <span className="text-stone-300 dark:text-stone-600">•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Global : {globalCompletedInfo.completed} / {globalCompletedInfo.total.toLocaleString('fr-FR')} terminées
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Google Drive Button */}
          <button
            id="google-drive-sync-btn"
            onClick={onOpenDriveModal}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs ${
              isDriveConnected
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300'
                : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-200'
            }`}
            title="Connecter Google Drive pour synchroniser les questions"
          >
            <Cloud className={`w-4 h-4 ${isDriveConnected ? 'text-emerald-600' : 'text-stone-500'}`} />
            <span className="hidden sm:inline">
              {isDriveConnected ? (userEmail ? userEmail.split('@')[0] : 'Drive Connecté') : 'Sync Drive'}
            </span>
          </button>

          {/* Progress / History Button */}
          <button
            id="progress-analytics-btn"
            onClick={onOpenProgressModal}
            className="px-3 py-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 bg-stone-50 text-stone-700 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-200 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
            title="Consulter la progression, la maîtrise par partie et l'historique"
          >
            <BarChart2 className="w-4 h-4 text-indigo-500" />
            <span className="hidden sm:inline">Progression</span>
          </button>
        </div>
      </div>

      {/* Modes Navigation Bar */}
      <div className="border-t border-stone-100 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/60 px-4 sm:px-6 py-2 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 min-w-max">
          {/* Practice Mode */}
          <button
            id="mode-practice-btn"
            onClick={() => onSelectMode('practice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentMode === 'practice'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Entraînement</span>
          </button>

          {/* Exam Mode */}
          <button
            id="mode-exam-btn"
            onClick={() => onSelectMode('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentMode === 'exam'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Mode Examen</span>
          </button>

          {/* Random 100 Questions */}
          <button
            id="mode-random100-btn"
            onClick={() => onSelectMode('random100')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentMode === 'random100'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>100 Aléatoires</span>
          </button>

          {/* Mistakes Bank */}
          <button
            id="mode-mistakes-btn"
            onClick={() => onSelectMode('mistakes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentMode === 'mistakes'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Erreurs</span>
            {mistakesCount > 0 && (
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  currentMode === 'mistakes'
                    ? 'bg-white text-rose-700'
                    : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                }`}
              >
                {mistakesCount}
              </span>
            )}
          </button>

          {/* Favorites Bank */}
          <button
            id="mode-favorites-btn"
            onClick={() => onSelectMode('favorites')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentMode === 'favorites'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Favoris</span>
            {favoritesCount > 0 && (
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  currentMode === 'favorites'
                    ? 'bg-white text-amber-700'
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                }`}
              >
                {favoritesCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Part, Topic & Difficulty Filter Bar (Only visible in Practice/Exam modes where filtering applies) */}
      {(currentMode === 'practice' || currentMode === 'exam') && (
        <div className="border-t border-stone-200 dark:border-stone-800 px-4 sm:px-6 py-2.5 bg-white dark:bg-stone-900">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2.5 text-xs">
            {/* Part Selection Dropdown or Pill */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-stone-500 dark:text-stone-400 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>Partie :</span>
              </span>
              <select
                id="filter-part-select"
                value={selectedPart}
                onChange={(e) =>
                  onSelectPart(e.target.value === 'all' ? 'all' : Number(e.target.value))
                }
                className="px-2.5 py-1 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">Toutes les spécialités (1 000 questions - 10 parties)</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((p) => (
                  <option key={p} value={p}>
                    {PART_DEFINITIONS[p]?.fullName || `Partie ${p}`} (100 questions)
                  </option>
                ))}
              </select>
            </div>

            {/* Topic Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-stone-500 dark:text-stone-400 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-stone-400" />
                <span>Thème :</span>
              </span>
              <select
                id="filter-topic-select"
                value={selectedTopic}
                onChange={(e) => onSelectTopic(e.target.value)}
                className="max-w-[160px] sm:max-w-[200px] truncate px-2.5 py-1 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">Tous les thèmes</option>
                {availableTopics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-stone-500 dark:text-stone-400">Difficulté :</span>
              <select
                id="filter-difficulty-select"
                value={selectedDifficulty}
                onChange={(e) =>
                  onSelectDifficulty(e.target.value as Difficulty | 'all')
                }
                className="px-2.5 py-1 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">Tous les niveaux</option>
                <option value="Facile">Facile</option>
                <option value="Moyen">Moyen</option>
                <option value="Difficile">Difficile</option>
              </select>
            </div>

            {/* Reset Filters */}
            {(selectedPart !== 'all' || selectedTopic !== 'all' || selectedDifficulty !== 'all') && (
              <button
                onClick={onResetFilters}
                className="ml-auto text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Réinitialiser les filtres</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
