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

  //円周
  const circrmference = radius * Math.PI * 2;

  //タイマーの残時間をsvgのdashStrokearrayで表現するための計算。
  const dash = ((initialCount - count) * circrmference) / initialCount;
  return (
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
        stroke="orange"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}`}
        strokeDasharray={`1 180`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className="transition-all"
      />
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        transform={`rotate(-90 ${size / 2} ${size / 2}) `}
        strokeWidth={`${strokeWidth}`}
        strokeDasharray={`${circrmference - dash} ${dash}`}
        className="transition-all z-10 opacity-80"
      />
    </svg>
  );
};

export default CirclarProgress;
