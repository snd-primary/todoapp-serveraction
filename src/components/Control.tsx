import { formatTime } from "@/lib/formatTime";
import React from "react";
import { Button } from "./ui/button";
import { ResetIcon, StopIcon } from "@radix-ui/react-icons";
import { PlayIcon } from "lucide-react";

interface ControlProps {
  remainingTime: number;
  isRunning: boolean;
  runningToggleHandler: () => void;
  resetHandler: () => void;
}

const Control: React.FC<ControlProps> = ({
  remainingTime,
  resetHandler,
  runningToggleHandler,
  isRunning,
}) => {
  return (
    <>
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
    </>
  );
};

export default Control;
