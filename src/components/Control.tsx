import { formatTime } from "@/lib/formatTime";
import React from "react";
import { Button } from "./ui/button";
import { ResetIcon, StopIcon } from "@radix-ui/react-icons";
import { PauseIcon, PlayIcon } from "lucide-react";

interface ControlProps {
  remainingTime: number;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
}

const Control: React.FC<ControlProps> = ({
  remainingTime,
  handleReset,
  handleStart,
  handlePause,
}) => {
  return (
    <>
      <span className="text-6xl font-bold select-none">
        {remainingTime ? formatTime(remainingTime) : null}
      </span>
      <div className="flex items-center gap-4 place-content-center">
        <Button onClick={handleReset} className="">
          <ResetIcon className="text-foreground w-5 h-5" />
        </Button>
        <Button onClick={handleStart} className="">
          <PlayIcon className="text-foreground w-5 h-5" />
        </Button>
        <Button onClick={handlePause} className="">
          <PauseIcon className="text-foreground w-5 h-5" />
        </Button>
      </div>
    </>
  );
};

export default Control;
