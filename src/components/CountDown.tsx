import { formatTime } from "@/lib/formatTime";
import { Scale } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
type Props = {
  initialCount: number;
};

interface CirclarProgressProps {
  size: number;
  strokeWidth: number;
  count: number;
  initialCount: number;
  color: string;
}

const CirclarProgress: React.FC<CirclarProgressProps> = ({
  size,
  strokeWidth,
  count,
  color,
  initialCount,
}) => {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  // 円周
  const circrmference = radius * Math.PI * 2;

  // 破線の長さ
  const dash = ((initialCount - count) * circrmference) / initialCount;
  const offset = ((initialCount - count) / initialCount) * circrmference;
  console.log(dash);
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "scale(-1, 1)" }}
    >
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        transform={`rotate(-90 ${size / 2} ${size / 2}) `}
        strokeWidth={`${strokeWidth}`}
        strokeDasharray={`${circrmference - dash} ${dash}`}
      />
    </svg>
  );
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
          size={250}
          strokeWidth={20}
          count={count}
          color="green"
        />
      </div>
    </div>
  );
};

export default CountDown;
