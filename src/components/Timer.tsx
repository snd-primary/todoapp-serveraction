import { formatTime } from "@/lib/formatTime";
import React, { useEffect, useState } from "react";
import CirclarProgress from "./CirclarProgress";
import { Button } from "./ui/button";
import { ResetIcon, StopIcon } from "@radix-ui/react-icons";
import { PlayIcon } from "lucide-react";
import { TodoProps } from "types/type";
import { Badge } from "./ui/badge";

interface Props {
  initialCount: number;
  title: string;
}

const Timer: React.FC<Props> = ({ initialCount, title }) => {
  const [count, setCount] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);

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

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning && count > 0) {
      timer = setInterval(() => tick(), 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [count, isRunning]);

  return (
    <div>
      <span className="flex items-center gap-3">
        <h2 className="text-4xl font-bold">
          {title === "" ? "NoTitle..." : title}
        </h2>
        <Badge
          className={`${
            isRunning
              ? "mt-1 text-xs animate-blinkng"
              : "bg-muted border border-current text-foreground "
          } mt-1 text-xs select-none pointer-events-none`}
        >
          {isRunning ? "running" : "stand-by"}
        </Badge>
      </span>
      <p>残り時間：{formatTime(count)}</p>
      <div className="progress-circle">
        <CirclarProgress
          initialCount={initialCount}
          size={500}
          strokeWidth={40}
          count={count}
          color="#aaa"
        />
      </div>
      <div>
        <Button onClick={resetHandler} className="">
          <ResetIcon className="text-foreground w-5 h-5" />
        </Button>
        <Button onClick={runningToggleHandler} className="">
          {isRunning ? (
            <StopIcon className="text-foreground w-5 h-5" />
          ) : (
            <PlayIcon className="text-foreground w-5 h-5" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Timer;
