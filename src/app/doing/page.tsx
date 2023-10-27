"use client";
import CountDown from "@/components/CountDown";
import { useTodo } from "@/context/TodoProvider";
import { totalSeconds } from "@/lib/totalSeconds";

const TodoItem: React.FC = () => {
  const [todo] = useTodo();
  const TOTAL_SECONDS = totalSeconds(todo);

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold">{todo?.title}</h2>
        <CountDown initialCount={TOTAL_SECONDS} />
      </div>
    </>
  );
};

export default TodoItem;
