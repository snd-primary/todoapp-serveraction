import Timer from "@/app/components/Timer";
import { totalSeconds } from "@/lib/totalSeconds";
import { getTimerDataCookie } from "./action";

const TodoTimer: React.FC = () => {
  const { data } = getTimerDataCookie();
  const TOTALSEC = totalSeconds(data);

  return (
    <div>
      <Timer title={data.title} initialCount={TOTALSEC} />
    </div>
  );
};

export default TodoTimer;
