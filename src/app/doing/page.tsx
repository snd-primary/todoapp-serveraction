"use client";
import Timer from "@/components/Timer";
import { useTodo } from "@/context/TodoProvider";
import { totalSeconds } from "@/lib/totalSeconds";

const TodoItem: React.FC = () => {
  const [todo] = useTodo();
  const TOTAL_SECONDS = totalSeconds(todo);

  return (
    <div>
      <Timer title={todo.title} initialCount={TOTAL_SECONDS} />
    </div>
  );
};

export default TodoItem;
