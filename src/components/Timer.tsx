"use client";
import { formatTime } from "@/lib/formatTime";
import React, { useEffect, useState } from "react";
import CirclarProgress from "./CirclarProgress";
import { Badge } from "./ui/badge";
import Control from "./Control";
import { differenceInMilliseconds, differenceInSeconds } from "date-fns";

interface Props {
  initialCount: number;
  title: string;
}

type TimeStanpType<T extends string | number | symbol> = {
  [K in T]: number;
};

const Timer: React.FC<Props> = ({ initialCount, title }) => {
  const [count, setCount] = useState<number>(initialCount);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [pause, setPause] = useState<number>(0);
  const [resume, setResume] = useState<number>(0);

  // const countMilliSeconds = count * 1000;

  const handleStart = () => {
    setIsRunning((state) => true);
    setResume((state) => Date.now());
  };

  const handlePause = () => {
    setIsRunning((state) => false);
    setPause((state) => Date.now());
  };

  const handleReset = () => {
    setCount((state) => initialCount);
    setIsRunning((state) => false);
  };

  const tick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const diffMilliSec = () => {
    if (resume > pause) {
      return resume - pause;
    }
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    //カウントダウン
    if (isRunning && count > 0) {
      timerId = setInterval(() => tick(), 1000);
    }

    //開始時間と終了時間のタイムスタンプを設定
    // if (isRunning && count === initialCount) {
    //   setInitialTimeStanp({
    //     begin: now,
    //     finish: now + countMilliSeconds,
    //   });
    // }

    //タイマー終了
    if (count === 0) {
      setIsRunning((prev) => false);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [count, isRunning]);

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
        {/* <div>
          <span>s:{initialTimeStanp.begin}</span>
        </div>
        <div>
          <span>e:{initialTimeStanp.finish}</span>
        </div> */}
        <div>
          <span>再開:{resume}</span>
        </div>
        <div>
          <span>停止:{pause}</span>
        </div>
        <div>
          <span>差分:{diffMilliSec()}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
