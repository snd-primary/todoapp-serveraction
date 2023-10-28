import { formatTime } from "@/lib/formatTime";
import React from "react";
import { Button } from "./ui/button";
import { ResetIcon, StopIcon } from "@radix-ui/react-icons";
import { PlayIcon } from "lucide-react";

interface CirclarProgressProps {
  size: number;
  strokeWidth: number;
  count: number;
  initialCount: number;
  remainingTime: number;
  className?: string;
  resetHandler: () => void;
  runningToggleHandler: () => void;
  isRunning: boolean;
}

const CirclarProgress: React.FC<CirclarProgressProps> = ({
  size,
  strokeWidth,
  count,
  initialCount,
  remainingTime,
  className,
  resetHandler,
  runningToggleHandler,
  isRunning,
}) => {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;

  //円周
  const circrmference = radius * Math.PI * 2;
  //タイマーの残時間を、dashStrokearrayで表現
  const dash = ((initialCount - count) * circrmference) / initialCount;

  return (
    <div className="grid place-items-center w-full h-full place-content-center relative">
      <div className="absolute grid gap-6 text-center transition-[tranform(50%, -50%)] z-10">
        <span className="text-6xl font-bold select-none">
          {remainingTime ? formatTime(remainingTime) : null}
        </span>
        <div className="flex items-center gap-4 place-content-center">
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

      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(-1, 1)" }}
        className="relative"
      >
        <circle
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}`}
          strokeDasharray={`1 180`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="transition-all stroke-primary"
        />
        <circle
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          transform={`rotate(-90 ${size / 2} ${size / 2}) `}
          strokeWidth={`${strokeWidth}`}
          strokeDasharray={`${circrmference - dash} ${dash}`}
          className={`transition-all z-10 opacity-60 backdrop-blur-lg  ${className}`}
        />
      </svg>
    </div>
  );
};

export default CirclarProgress;
