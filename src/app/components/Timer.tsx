"use client";
import { formatTime } from "@/lib/formatTime";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CirclarProgress from "../../components/CirclarProgress";
import { Badge } from "../../components/ui/badge";
import Control from "../../components/Control";

interface Props {
  initialCount: number;
  title: string;
}

// type TimeStanpType<T extends string | number | symbol> = {
//   [K in T]: number;
// };

const Timer: React.FC<Props> = ({ initialCount, title }) => {
  const [count, setCount] = useState<number>(initialCount);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [pause, setPause] = useState<number>(0);
  const [resume, setResume] = useState<number>(0);
  const [finishTime, setFinishTime] = useState<number>(0);
  const [beginTime, setBeginTime] = useState<number>(0);

  const countMilliSec = initialCount * 1000;
  const blank = () => {
    if (resume > pause) {
      return resume - pause;
    } else {
      return 0;
    }
  };

  const handleStart = () => {
    setIsRunning((state) => true);
    if (isRunning) return;
    setResume((state) => Date.now());

    if (count === initialCount) {
      setBeginTime((state) => Date.now());
      setFinishTime((state) => Date.now() + countMilliSec);
    }
  };

  const handlePause = () => {
    setIsRunning((state) => false);
    if (!isRunning) return;
    setPause((state) => Date.now());
  };

  const handleReset = () => {
    if (count === initialCount) return;
    setCount((state) => initialCount);
    setIsRunning((state) => false);
  };

  const tick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useLayoutEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (isRunning && count > 0) {
      timerId = setInterval(() => tick(), 1000);
    }

    if (count === 0) {
      setIsRunning((prev) => false);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [count, isRunning]);

  useEffect(() => {
    setFinishTime((prevState) => prevState + blank());
  }, [resume]);

  return (
    <div>
      <div className="flex items-center gap-3">
        <h2 className="text-4xl font-bold">
          {title === "" ? "NoTitle" : title}
        </h2>
        <Badge
          className={`${
            isRunning
              ? "mt-1 text-xs animate-blinkng"
              : "bg-muted border border-current text-foreground "
          } mt-1 text-xs select-none pointer-events-none`}
        >
          {isRunning ? "running" : "stop"}
        </Badge>
      </div>
      <p className="text-gray-500">残り時間: {formatTime(count)}</p>
      <div className="progress-circle">
        <CirclarProgress
          initialCount={initialCount}
          size={500}
          strokeWidth={40}
          count={count}
          className="stroke-ring"
        >
          <Control
            handleReset={handleReset}
            handlePause={handlePause}
            handleStart={handleStart}
            remainingTime={count}
          />
        </CirclarProgress>
      </div>
      <div>
        <span>デバッグ用</span>
        <div></div>
        <div>
          <span>終了時間:{finishTime}</span>
        </div>
        <div>
          <span>再開:{resume}</span>
        </div>
        <div>
          <span>停止:{pause}</span>
        </div>
        <div>
          <span>差分:{blank()}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
