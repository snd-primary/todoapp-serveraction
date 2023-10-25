import React, { useEffect, useState } from "react";
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

    if (count > 0 && !isRunning) {
      setIsRunning((state) => true);
    }

    if (isRunning && count > 0) {
      timer = setInterval(() => tick(), 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [count, isRunning]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <p>残り時間：{formatTime(count)}</p>
    </div>
  );
};

export default CountDown;
