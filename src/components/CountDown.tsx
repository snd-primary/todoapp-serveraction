import { formatTime } from "@/lib/formatTime";
import React, { useEffect, useState } from "react";
import CirclarProgress from "./CirclarProgress";

type Props = {
  initialCount: number;
};

const CountDown: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);

  const reset = () => {
    setCount((prevCount) => initialCount);
    setIsRunning((state) => false);
  };

  const tick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (!isRunning && count > 0) {
      setIsRunning((state) => true);
    }
    if (isRunning && count > 0) {
      timer = setInterval(() => tick(), 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [count, isRunning]);

  return (
    <div>
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
    </div>
  );
};

export default CountDown;
