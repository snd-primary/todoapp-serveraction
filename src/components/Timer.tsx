"use client";
import { formatTime } from "@/lib/formatTime";
import React from "react";
import CirclarProgress from "./CirclarProgress";
import { Badge } from "./ui/badge";
import Control from "./Control";
import { useCountDown } from "@/hooks/useCountDown";

interface Props {
  initialCount: number;
  title: string;
}

const Timer: React.FC<Props> = ({ initialCount, title }) => {
  const { count, isRunning, handlePause, handleReset, handleStart } =
    useCountDown({ initialCount });

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
        {/* <span>デバッグ用</span> */}
        {/* <div>
          <span>開始時間:{timeStanp.begin}</span>
        </div>
        <div>
          <span>終了時間:{timeStanp.end}</span>
        </div>
        <div>
          <span>再開:{resume}</span>
        </div>
        <div>
          <span>停止:{pause}</span>
        </div>
        <div>
          <span>差分:{blank()}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Timer;
