"use client";
import { formatTime } from "@/lib/formatTime";
import React, { useEffect, useState } from "react";
import CirclarProgress from "./CirclarProgress";
import { Badge } from "./ui/badge";
import Control from "./Control";

interface Props {
  initialCount: number;
  title: string;
}

const Timer: React.FC<Props> = ({ initialCount, title }) => {
  const [count, setCount] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  //セットされた値に戻す
  const resetHandler = () => {
    setCount((prevCount) => initialCount);
    setIsRunning((state) => false);
  };

  //スタート/ストップ
  const runningToggleHandler = () => {
    if (count > 0) {
      setIsRunning((state) => !state);
    }
  };

  //カウントダウン関数
  const tick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const now = Date.now();

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    //カウントダウン
    if (isRunning && count > 0) {
      timer = setInterval(() => tick(), 1000);
    }

    //タイマー初期値時の開始時間と終了時間
    if (isRunning && count === initialCount) {
      setStartTime((state) => now);
      setEndTime((state) => now + initialCount);
    }

    //タイマー終了
    if (count === 0) {
      setIsRunning((prev) => false);
    }

    return () => {
      if (timer) clearInterval(timer);
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
            isRunning={isRunning}
            resetHandler={resetHandler}
            runningToggleHandler={runningToggleHandler}
            remainingTime={count}
          />
        </CirclarProgress>
      </div>
      <div>
        <span>デバッグ用</span>
        <div>
          <span>StartTime:{startTime}</span>
        </div>
        <div>
          <span>Endtime:{endTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
