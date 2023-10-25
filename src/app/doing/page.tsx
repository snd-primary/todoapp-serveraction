"use client";
import CountDown from "@/components/CountDown";
import { useTodo } from "@/context/TodoProvider";
import { useEffect } from "react";

const TodoItem: React.FC = () => {
  const [todo] = useTodo();
  const convertHourToSec = todo.hour * 60 * 60;
  const convertMinToSec = todo.minutes * 60;

  const TOTAL_SECONDS = convertHourToSec + convertMinToSec + todo.seconds;

  return (
    <>
      <div>
        <li>{todo?.title}</li>
        <CountDown initialCount={TOTAL_SECONDS} />
      </div>
    </>
  );
};

export default TodoItem;
