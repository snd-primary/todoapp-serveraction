"use client";
import React, { Dispatch, useEffect, useLayoutEffect, useState } from "react";

// type Props = {
//   count: number;
//   setCount: Dispatch<React.SetStateAction<number>>;
//   isRunning: boolean;
//   setIsRunning: Dispatch<React.SetStateAction<boolean>>;
// };

type Props = {
  initialCount: number;
};
type TimeStanpType<T extends string | number | symbol> = {
  [K in T]: number;
};

export const useCountDown = ({ initialCount }: Props) => {
  const countMilliSec = initialCount * 1000;
  const [count, setCount] = useState<number>(initialCount);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [pause, setPause] = useState<number>(0);
  const [resume, setResume] = useState<number>(0);
  const [timeStanp, setTimeStanp] = useState<TimeStanpType<"begin" | "end">>({
    begin: 0,
    end: 0,
  });

  const blank = () => {
    if (resume > pause && count !== initialCount) {
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
      setTimeStanp({ begin: Date.now(), end: Date.now() + countMilliSec });
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

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (isRunning && count > 0) {
      timerId = setInterval(() => tick(), 1000);
      console.log("running...");
    }

    if (count === 0) {
      setIsRunning((prev) => false);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [count, isRunning]);

  useEffect(() => {
    setTimeStanp((prevStates) => ({
      ...timeStanp,
      end: prevStates.end + blank(),
    }));
  }, [resume]);

  return {
    handleStart,
    handlePause,
    handleReset,
    count,
    isRunning,
    tick,
  };
};
