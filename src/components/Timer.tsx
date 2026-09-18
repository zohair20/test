import React, { useEffect, useState } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

interface TimerProps {
  initialSeconds: number;
  isCountDown?: boolean;
  isRunning?: boolean;
  onTimeUp?: () => void;
  onTick?: (seconds: number) => void;
}

export const Timer: React.FC<TimerProps> = ({
  initialSeconds,
  isCountDown = true,
  isRunning = true,
  onTimeUp,
  onTick,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = isCountDown ? prev - 1 : prev + 1;
        if (onTick) onTick(next);

        if (isCountDown && next <= 0) {
          clearInterval(interval);
          if (onTimeUp) onTimeUp();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isCountDown, onTimeUp, onTick]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(Math.max(0, totalSec) / 60);
    const secs = Math.max(0, totalSec) % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isLowTime = isCountDown && seconds <= 120 && seconds > 0;
  const isCriticalTime = isCountDown && seconds <= 30 && seconds > 0;

  return (
    <div
      id="quiz-timer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-sm font-semibold border transition-all ${
        isCriticalTime
          ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300'
          : isLowTime
          ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300'
          : 'bg-stone-50 border-stone-200 text-stone-700 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-200'
      }`}
    >
      {isCriticalTime ? (
        <AlertCircle className="w-4 h-4 text-rose-600 animate-bounce" />
      ) : (
        <Clock className="w-4 h-4 text-stone-500" />
      )}
      <span>{formatTime(seconds)}</span>
      {isCountDown && (
        <span className="text-xs font-sans font-normal text-stone-400">rest.</span>
      )}
    </div>
  );
};
