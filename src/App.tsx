import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { User } from 'firebase/auth';
import {
  HelpCircle,
  LayoutGrid,
  Send,
  RotateCcw,
  Sparkles,
  BookOpen,
  AlertTriangle,
  Star,
  CheckCircle2,
  ChevronRight,
  Filter,
  CheckCheck,
  Shuffle
} from 'lucide-react';
import { Difficulty, Question, QuizMode, QuizSessionResult } from './types';
import {
  loadQuestions,
  saveQuestions,
  loadMistakeIds,
  recordMistake,
  removeMistake,
  clearAllMistakes,
  loadFavoriteIds,
  toggleFavoriteId,
  loadProgress,
  recordQuizSession,
  loadCompletedMap,
  recordQuestionCompleted,
  getPartCompletedCount,
  getGlobalCompletedCount
} from './utils/storage';
import { initAuth } from './services/firebaseAuth';
import {
  prepareRandom100Questions,
  getUniqueQuestions,
  shuffleArray,
  shuffleQuestionChoices,
} from './utils/quizShuffle';
import { Header } from './components/Header';
import { QuizCard } from './components/QuizCard';
import { QuestionNavGrid } from './components/QuestionNavGrid';
import { Timer } from './components/Timer';
import { ExamResultsModal } from './components/ExamResultsModal';
import { DriveSyncModal } from './components/DriveSyncModal';
import { ProgressDashboardModal } from './components/ProgressDashboardModal';

export default function App() {
  // 1. Core Data State
  const [allQuestions, setAllQuestions] = useState<Question[]>(() => loadQuestions());
  const [mistakeIds, setMistakeIds] = useState<string[]>(() => loadMistakeIds());
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => loadFavoriteIds());
  const [progress, setProgress] = useState(() => loadProgress());
  const [completedMap, setCompletedMap] = useState(() => loadCompletedMap());

  // 2. Auth State (Google Drive)
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // 3. Quiz Configuration & Mode
  const [currentMode, setCurrentMode] = useState<QuizMode>('practice');
  const [selectedPart, setSelectedPart] = useState<number | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  // Helper to build active questions for a given mode and filter
  const buildQuestionsForMode = useCallback(
    (
      mode: QuizMode,
      part: number | 'all',
      topic: string,
      difficulty: Difficulty | 'all',
      pool: Question[],
      mistakes: string[],
      favorites: string[]
    ): Question[] => {
      // In Random 100 mode: strictly unique, shuffled order, choices shuffled when possible
      if (mode === 'random100') {
        return prepareRandom100Questions(pool);
      }

      const uniquePool = getUniqueQuestions(pool);

      if (mode === 'mistakes') {
        const mistakeSet = new Set(mistakes);
        return uniquePool.filter((q) => mistakeSet.has(q.id));
      }

      if (mode === 'favorites') {
        const favSet = new Set(favorites);
        return uniquePool.filter((q) => favSet.has(q.id));
      }

      // Exam Mode: select up to 100 unique questions, shuffled order and synchronized choices
      if (mode === 'exam') {
        const filtered = uniquePool.filter((q) => {
          if (part !== 'all' && q.part !== part) return false;
          if (topic !== 'all' && q.topic !== topic) return false;
          if (difficulty !== 'all' && q.difficulty !== difficulty) return false;
          return true;
        });
        const shuffled = shuffleArray(filtered);
        const examCount = Math.min(100, shuffled.length);
        const examSlice = shuffled.slice(0, examCount);
        return examSlice.map((q) => shuffleQuestionChoices(q));
      }

      // Practice Mode with filters
      return uniquePool.filter((q) => {
        if (part !== 'all' && q.part !== part) return false;
        if (topic !== 'all' && q.topic !== topic) return false;
        if (difficulty !== 'all' && q.difficulty !== difficulty) return false;
        return true;
      });
    },
    []
  );

  // 4. Active Session Questions (Fixed & stable during the session to prevent re-shuffling)
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>(() => {
    const initialPool = loadQuestions();
    const uniquePool = getUniqueQuestions(initialPool);
    return uniquePool;
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set());
  const [sessionStartTime, setSessionStartTime] = useState<number>(Date.now());
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);

  // 5. Modals State
  const [showNavGrid, setShowNavGrid] = useState<boolean>(false);
  const [showExamResults, setShowExamResults] = useState<boolean>(false);
  const [showDriveModal, setShowDriveModal] = useState<boolean>(false);
  const [showProgressModal, setShowProgressModal] = useState<boolean>(false);

  // Init Firebase Auth for Google Drive token
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, accessToken) => {
        setUser(currentUser);
        setToken(accessToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Compute available topics from question database
  const availableTopics = useMemo(() => {
    const set = new Set<string>();
    allQuestions.forEach((q) => {
      if (selectedPart === 'all' || q.part === selectedPart) {
        set.add(q.topic);
      }
    });
    return Array.from(set).sort();
  }, [allQuestions, selectedPart]);

  // Reset index and active session answers
  const resetSession = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds(new Set());
    setSessionStartTime(Date.now());
    setTimeSpentSeconds(0);
    setShowExamResults(false);
  }, []);

  const handleSelectMode = (newMode: QuizMode) => {
    setCurrentMode(newMode);
    const newQuestions = buildQuestionsForMode(
      newMode,
      selectedPart,
      selectedTopic,
      selectedDifficulty,
      allQuestions,
      mistakeIds,
      favoriteIds
    );
    setSessionQuestions(newQuestions);
    resetSession();
  };

  const handleSelectPart = (part: number | 'all') => {
    setSelectedPart(part);
    setSelectedTopic('all');
    const newQuestions = buildQuestionsForMode(
      currentMode,
      part,
      'all',
      selectedDifficulty,
      allQuestions,
      mistakeIds,
      favoriteIds
    );
    setSessionQuestions(newQuestions);
    resetSession();
  };

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    const newQuestions = buildQuestionsForMode(
      currentMode,
      selectedPart,
      topic,
      selectedDifficulty,
      allQuestions,
      mistakeIds,
      favoriteIds
    );
    setSessionQuestions(newQuestions);
    resetSession();
  };

  const handleSelectDifficulty = (difficulty: Difficulty | 'all') => {
    setSelectedDifficulty(difficulty);
    const newQuestions = buildQuestionsForMode(
      currentMode,
      selectedPart,
      selectedTopic,
      difficulty,
      allQuestions,
      mistakeIds,
      favoriteIds
    );
    setSessionQuestions(newQuestions);
    resetSession();
  };

  const handleResetFilters = () => {
    setSelectedPart('all');
    setSelectedTopic('all');
    setSelectedDifficulty('all');
    const newQuestions = buildQuestionsForMode(
      currentMode,
      'all',
      'all',
      'all',
      allQuestions,
      mistakeIds,
      favoriteIds
    );
    setSessionQuestions(newQuestions);
    resetSession();
  };

  // Specific handler to draw a fresh set of 100 Random Questions
  const handleReshuffleRandom100 = () => {
    const fresh100 = prepareRandom100Questions(allQuestions);
    setSessionQuestions(fresh100);
    resetSession();
  };

  // Answer selection handler
  const handleSelectOption = (optionIndex: number) => {
    const currentQuestion = sessionQuestions[currentIndex];
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));

    // Record question completion
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    const updatedCompleted = recordQuestionCompleted(currentQuestion.id, isCorrect);
    setCompletedMap({ ...updatedCompleted });

    // In Practice Mode: record or remove mistake immediately
    if (currentMode !== 'exam') {
      if (!isCorrect) {
        recordMistake(currentQuestion.id);
        setMistakeIds((prev) => Array.from(new Set([...prev, currentQuestion.id])));
      } else {
        // If answered correctly in mistakes mode or practice, remove from mistakes
        if (mistakeIds.includes(currentQuestion.id)) {
          removeMistake(currentQuestion.id);
          setMistakeIds((prev) => prev.filter((id) => id !== currentQuestion.id));
        }
      }
    }
  };

  // Toggle favorite
  const handleToggleFavorite = () => {
    const currentQuestion = sessionQuestions[currentIndex];
    if (!currentQuestion) return;

    const isFav = toggleFavoriteId(currentQuestion.id);
    if (isFav) {
      setFavoriteIds((prev) => Array.from(new Set([...prev, currentQuestion.id])));
    } else {
      setFavoriteIds((prev) => prev.filter((id) => id !== currentQuestion.id));
    }
  };

  // Toggle flag for review
  const handleToggleFlag = () => {
    const currentQuestion = sessionQuestions[currentIndex];
    if (!currentQuestion) return;

    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentQuestion.id)) {
        next.delete(currentQuestion.id);
      } else {
        next.add(currentQuestion.id);
      }
      return next;
    });
  };

  // Submit Exam Mode
  const handleSubmitExam = () => {
    const total = sessionQuestions.length;
    const answeredCount = Object.keys(answers).length;

    if (answeredCount < total) {
      const confirmSubmit = window.confirm(
        `Vous n'avez répondu qu'à ${answeredCount} question(s) sur ${total}. Voulez-vous vraiment terminer et soumettre l'examen ?`
      );
      if (!confirmSubmit) return;
    }

    // Calculate score
    let correctCount = 0;
    const newMistakes: string[] = [];

    sessionQuestions.forEach((q) => {
      const selected = answers[q.id];
      if (selected === q.correctAnswer) {
        correctCount++;
      } else {
        newMistakes.push(q.id);
        recordMistake(q.id);
      }
    });

    setMistakeIds((prev) => Array.from(new Set([...prev, ...newMistakes])));

    // Record completed questions in storage
    sessionQuestions.forEach((q) => {
      const selected = answers[q.id];
      if (selected !== undefined) {
        recordQuestionCompleted(q.id, selected === q.correctAnswer);
      }
    });
    setCompletedMap(loadCompletedMap());

    const scorePercentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const elapsed = Math.max(1, Math.round((Date.now() - sessionStartTime) / 1000));
    setTimeSpentSeconds(elapsed);

    // Save session to progress history
    const sessionResult: QuizSessionResult = {
      id: `session-${Date.now()}`,
      date: new Date().toISOString(),
      mode: currentMode,
      partFilter: selectedPart,
      totalQuestions: total,
      correctCount,
      scorePercentage,
      timeSpentSeconds: elapsed,
      records: sessionQuestions.map((q) => ({
        questionId: q.id,
        selectedOption: answers[q.id] ?? null,
        isCorrect: answers[q.id] === q.correctAnswer,
        timeSpentSeconds: 0,
      })),
    };

    const updatedProgress = recordQuizSession(sessionResult);
    setProgress(updatedProgress);
    setShowExamResults(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        if (currentIndex < sessionQuestions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optIndex = parseInt(e.key, 10) - 1;
        const currentQ = sessionQuestions[currentIndex];
        if (currentQ && optIndex < currentQ.options.length) {
          handleSelectOption(optIndex);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, sessionQuestions, answers]);

  // Import questions handler (from Google Drive or Local JSON)
  const handleQuestionsImported = (imported: Question[]) => {
    // Merge questions by ID or append
    const existingMap = new Map<string, Question>(allQuestions.map((q) => [q.id, q]));
    imported.forEach((q) => {
      existingMap.set(q.id, q);
    });
    const merged: Question[] = Array.from(existingMap.values());
    setAllQuestions(merged);
    saveQuestions(merged);

    const refreshedSession = buildQuestionsForMode(
      currentMode,
      selectedPart,
      selectedTopic,
      selectedDifficulty,
      merged,
      mistakeIds,
      favoriteIds
    );
    setSessionQuestions(refreshedSession);
    resetSession();
  };

  const currentQuestion = sessionQuestions[currentIndex];
  const isExamMode = currentMode === 'exam' || currentMode === 'random100';
  const answeredCount = Object.keys(answers).length;
  const progressPercentage =
    sessionQuestions.length > 0 ? Math.round(((currentIndex + 1) / sessionQuestions.length) * 100) : 0;

  const partCompletedInfo = useMemo(() => {
    const targetPart = selectedPart !== 'all' ? selectedPart : currentQuestion?.part;
    if (!targetPart) return undefined;
    return getPartCompletedCount(allQuestions, completedMap, targetPart);
  }, [allQuestions, completedMap, selectedPart, currentQuestion]);

  const globalCompletedInfo = useMemo(() => {
    return getGlobalCompletedCount(allQuestions, completedMap);
  }, [allQuestions, completedMap]);

  return (
    <div className="min-h-screen bg-stone-100/60 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans">
      {/* Top Application Header */}
      <Header
        currentMode={currentMode}
        onSelectMode={handleSelectMode}
        selectedPart={selectedPart}
        onSelectPart={handleSelectPart}
        selectedTopic={selectedTopic}
        onSelectTopic={handleSelectTopic}
        selectedDifficulty={selectedDifficulty}
        onSelectDifficulty={handleSelectDifficulty}
        availableTopics={availableTopics}
        mistakesCount={mistakeIds.length}
        favoritesCount={favoriteIds.length}
        totalQuestionsCount={allQuestions.length}
        partCompletedInfo={partCompletedInfo}
        globalCompletedInfo={globalCompletedInfo}
        onOpenDriveModal={() => setShowDriveModal(true)}
        onOpenProgressModal={() => setShowProgressModal(true)}
        onResetFilters={handleResetFilters}
        isDriveConnected={Boolean(token)}
        userEmail={user?.email}
      />

      {/* Main Container */}
      <main className="grow max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col">
        {sessionQuestions.length > 0 && currentQuestion ? (
          <div className="space-y-4">
            {/* Session Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-stone-900 px-4 py-3 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {currentMode === 'practice' && 'Session d\'Entraînement'}
                  {currentMode === 'exam' && 'Simulation d\'Examen Chronométré'}
                  {currentMode === 'random100' && 'Tirage Aléatoire de 100 Questions'}
                  {currentMode === 'mistakes' && 'Révision des Erreurs'}
                  {currentMode === 'favorites' && 'Entraînement sur les Favoris'}
                </span>
                <span className="text-stone-300 dark:text-stone-700">|</span>
                <span className="text-xs text-stone-600 dark:text-stone-300 font-medium">
                  {answeredCount} sur {sessionQuestions.length} répondues
                </span>
                {currentQuestion && (
                  <>
                    <span className="text-stone-300 dark:text-stone-700">|</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300 font-medium">
                      <span className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 font-bold text-stone-700 dark:text-stone-300">
                        Partie {currentQuestion.part}
                      </span>
                      {partCompletedInfo && (
                        <span className="hidden sm:inline text-stone-500 dark:text-stone-400 text-[11px]">
                          ({partCompletedInfo.completed}/{partCompletedInfo.total} terminées)
                        </span>
                      )}
                    </span>
                  </>
                )}
                {currentMode === 'random100' && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800">
                    <Sparkles className="w-3 h-3" />
                    <span>100 Qs Uniques Mélangées</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                {/* Reshuffle button in Random 100 mode */}
                {currentMode === 'random100' && (
                  <button
                    id="reshuffle-random100-btn"
                    onClick={handleReshuffleRandom100}
                    className="px-3 py-1.5 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 hover:bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                    title="Tirer un nouveau lot de 100 questions aléatoires uniques"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Nouveau tirage 100</span>
                  </button>
                )}

                {/* Timer (Active countdown in Exam mode, or stopwatch in practice) */}
                <Timer
                  initialSeconds={isExamMode ? sessionQuestions.length * 75 : 0}
                  isCountDown={isExamMode}
                  onTimeUp={() => {
                    if (isExamMode) handleSubmitExam();
                  }}
                />

                {/* Question Navigator Drawer Toggle */}
                <button
                  id="toggle-nav-grid-btn"
                  onClick={() => setShowNavGrid(!showNavGrid)}
                  className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    showNavGrid
                      ? 'bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-300'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-300'
                  }`}
                  title="Afficher/Masquer la grille des questions"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span className="hidden sm:inline">Grille</span>
                </button>

                {/* Submit Exam Button (Exam Mode) */}
                {isExamMode && (
                  <button
                    id="submit-exam-btn"
                    onClick={handleSubmitExam}
                    className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Soumettre l'examen</span>
                  </button>
                )}
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="w-full bg-stone-200 dark:bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Collapsible Navigator Grid */}
            {showNavGrid && (
              <QuestionNavGrid
                questions={sessionQuestions}
                currentIndex={currentIndex}
                answers={answers}
                flaggedQuestionIds={flaggedIds}
                isExamMode={isExamMode}
                onSelectIndex={(idx) => setCurrentIndex(idx)}
                onClose={() => setShowNavGrid(false)}
              />
            )}

            {/* Core Quiz Card */}
            <QuizCard
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              totalQuestions={sessionQuestions.length}
              selectedOption={answers[currentQuestion.id]}
              isExamMode={isExamMode}
              isFavorite={favoriteIds.includes(currentQuestion.id)}
              isFlagged={flaggedIds.has(currentQuestion.id)}
              onSelectOption={handleSelectOption}
              onToggleFavorite={handleToggleFavorite}
              onToggleFlag={handleToggleFlag}
              onNext={() => {
                if (currentIndex < sessionQuestions.length - 1) {
                  setCurrentIndex((prev) => prev + 1);
                }
              }}
              onPrev={() => {
                if (currentIndex > 0) {
                  setCurrentIndex((prev) => prev - 1);
                }
              }}
              hasNext={currentIndex < sessionQuestions.length - 1}
              hasPrev={currentIndex > 0}
            />
          </div>
        ) : (
          /* Empty State for Mistakes, Favorites, or Filter Mismatch */
          <div className="grow flex items-center justify-center py-12">
            <div className="max-w-md w-full text-center bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-500">
                {currentMode === 'mistakes' ? (
                  <CheckCheck className="w-8 h-8 text-emerald-500" />
                ) : currentMode === 'favorites' ? (
                  <Star className="w-8 h-8 text-amber-500" />
                ) : (
                  <Filter className="w-8 h-8 text-blue-500" />
                )}
              </div>

              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                {currentMode === 'mistakes' && 'Aucune erreur enregistrée !'}
                {currentMode === 'favorites' && 'Aucun favori enregistré pour le moment'}
                {currentMode !== 'mistakes' && currentMode !== 'favorites' && 'Aucune question trouvée'}
              </h2>

              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mb-6 leading-relaxed">
                {currentMode === 'mistakes' &&
                  'Vous n\'avez aucune question incorrecte dans votre carnet d\'erreurs. Excellente précision ! Lancez un examen ou un entraînement pour tester vos connaissances.'}
                {currentMode === 'favorites' &&
                  'Ajoutez une étoile à n\'importe quelle question pendant vos révisions pour la retrouver immédiatement ici.'}
                {currentMode !== 'mistakes' &&
                  currentMode !== 'favorites' &&
                  'Aucune question ne correspond à votre sélection actuelle de Partie, Thème et Difficulté.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                {currentMode !== 'practice' ? (
                  <button
                    onClick={() => handleSelectMode('practice')}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    Aller au mode Entraînement
                  </button>
                ) : (
                  <button
                    onClick={handleResetFilters}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200 transition-colors"
                  >
                    Effacer tous les filtres
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer Signature */}
      <footer className="w-full py-4 border-t border-stone-200/80 dark:border-stone-800 text-center text-xs text-stone-500 dark:text-stone-400 bg-white/50 dark:bg-stone-900/50 backdrop-blur-xs mt-auto">
        <p className="font-medium tracking-wide">
          Créé par Zohair
        </p>
      </footer>

      {/* Exam Results Modal */}
      {showExamResults && (
        <ExamResultsModal
          questions={sessionQuestions}
          answers={answers}
          timeSpentSeconds={timeSpentSeconds}
          onRetake={() => {
            if (currentMode === 'random100') {
              handleReshuffleRandom100();
            } else {
              const refreshed = buildQuestionsForMode(
                currentMode,
                selectedPart,
                selectedTopic,
                selectedDifficulty,
                allQuestions,
                mistakeIds,
                favoriteIds
              );
              setSessionQuestions(refreshed);
              resetSession();
            }
          }}
          onReviewMistakes={() => {
            setShowExamResults(false);
            handleSelectMode('mistakes');
          }}
          onClose={() => {
            setShowExamResults(false);
            handleSelectMode('practice');
          }}
        />
      )}

      {/* Google Drive Integration & JSON Import Modal */}
      {showDriveModal && (
        <DriveSyncModal
          user={user}
          token={token}
          onQuestionsImported={handleQuestionsImported}
          currentQuestions={allQuestions}
          onClose={() => setShowDriveModal(false)}
        />
      )}

      {/* Progress & Performance Modal */}
      {showProgressModal && (
        <ProgressDashboardModal
          progress={progress}
          mistakesCount={mistakeIds.length}
          favoritesCount={favoriteIds.length}
          allQuestions={allQuestions}
          completedMap={completedMap}
          onClose={() => setShowProgressModal(false)}
        />
      )}
    </div>
  );
}
