import Timer from "@/components/Timer";
import { totalSeconds } from "@/lib/totalSeconds";
import { cookies } from "next/headers";

const TodoTimer: React.FC = async () => {
  const cookieStore = cookies();
  const todo = cookieStore.get("form_data");

  if (!todo) return;
  const newTodo = JSON.parse(todo.value);
  const TOTAL_SECONDS = totalSeconds(newTodo);

  return (
    <div>
      <Timer title={newTodo.title} initialCount={TOTAL_SECONDS} />
    </div>
  );
};

export default TodoTimer;
