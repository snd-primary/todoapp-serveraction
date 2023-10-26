"use client";
import CountDown from "@/components/CountDown";
import { useTodo } from "@/context/TodoProvider";
import { totalSeconds } from "@/lib/totalSeconds";
import { useEffect, useRef } from "react";

const TodoItem: React.FC = () => {
  const [todo] = useTodo();
  const TOTAL_SECONDS = totalSeconds(todo);

  const pathRef = useRef();
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold">{todo?.title}</h2>
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M64 1 A63 63 0 1 1 64 127 A63 63 0 1 1 64 1"
            stroke="#ccc"
            stroke-width="2"
            fill="none"
          />
        </svg>
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M64 1 A63 63 0 1 1 64 127 A63 63 0 1 1 64 1"
            stroke="#333"
            stroke-width="2"
            fill="none"
          />
        </svg>
        <CountDown initialCount={TOTAL_SECONDS} />
      </div>
    </>
  );
};

export default TodoItem;
