import React, { Children, ReactNode } from "react";

interface CirclarProgressProps {
  size: number;
  strokeWidth: number;
  count: number;
  initialCount: number;
  className?: string;
  children: ReactNode;
}

const CirclarProgress: React.FC<CirclarProgressProps> = ({
  size,
  strokeWidth,
  count,
  initialCount,
  className,
  children,
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
        {children}
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
