"use client";
import { useTodo } from "@/context/TodoProvider";

const TodoItem = () => {
  const [todo] = useTodo();

  return (
    <>
      <div>
        <span>{todo?.title}</span>
        <span>{todo?.hour}</span>
        <span>{todo?.minutes}</span>
        <span>{todo?.seconds}</span>
      </div>
    </>
  );
};

export default TodoItem;
