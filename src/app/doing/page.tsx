"use client";
import Timer from "@/components/Timer";
import { totalSeconds } from "@/lib/totalSeconds";

const TodoItem: React.FC = () => {
  const storedValue = JSON.parse(localStorage.getItem("todo") || "");

  const TOTAL_SECONDS = totalSeconds(storedValue);

  return (
    <div>
      <Timer title={storedValue.title} initialCount={TOTAL_SECONDS} />
    </div>
  );
};

export default TodoItem;
