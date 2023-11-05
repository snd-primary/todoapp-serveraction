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

  const [initialTimeStanp, setInitialTimeStanp] = useState<
    TimeStanpType<"begin" | "finish">
  >({
    begin: 0,
    finish: 0,
  });
  const [diff, setDiff] = useState<TimeStanpType<"pause" | "resume">>({
    pause: 0,
    resume: 0,
  });

  //現在時刻をミリ秒で取得（タイムスタンプ用）
  const now = Date.now();
  //countの値をタイムスタンプと足し合わせる時に使用
  const countMilliSeconds = count * 1000;

  //タイマーを初期状態に戻す
  const resetHandler = () => {
    setCount((prevCount) => initialCount);
    setIsRunning((state) => false);
  };

  //タイマーの停止・再開ボタン
  const runningToggleHandler = () => {
    if (count > 0) {
      setIsRunning((state) => !state);
    }
    if (count !== initialCount) {
      if (isRunning) {
        setDiff({
          ...diff,
          pause: now,
        });
      } else {
        setDiff({
          ...diff,
          resume: now,
        });

        console.log(differenceInSeconds(diff.resume, diff.pause));
      }
    }
  };

  //カウントダウン関数
  const tick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    //カウントダウン
    if (isRunning && count > 0) {
      timer = setInterval(() => tick(), 1000);
    }

    //開始時間と終了時間のタイムスタンプを設定
    if (isRunning && count === initialCount) {
      setInitialTimeStanp({
        begin: now,
        finish: now + countMilliSeconds,
      });
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
          <span>s:{initialTimeStanp.begin}</span>
        </div>
        <div>
          <span>e:{initialTimeStanp.finish}</span>
        </div>
        <div>
          <span>タイマー停止時{diff.pause}</span>
        </div>
        <div>
          <span>タイマー再開時{diff.resume}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
