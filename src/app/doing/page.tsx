import Timer from "@/components/Timer";
import { totalSeconds } from "@/lib/totalSeconds";
import { getTimerDataCookie } from "./action";

const TodoTimer: React.FC = () => {
  const { data } = getTimerDataCookie();
  const TOTALSEC = totalSeconds(data);

  return (
    <>
      <Timer title={data.title} initialCount={TOTALSEC} />
    </>
  );
};

export default TodoTimer;
