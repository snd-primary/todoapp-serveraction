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
        className="transition-all "
      />
    </svg>
  );
};

export default CirclarProgress;
