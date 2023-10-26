import type { TodoProps } from "types/type";

export const totalSeconds = (val: TodoProps) => {
  const convertHourToSec = val.hour * 60 * 60;
  const convertMinToSec = val.minutes * 60;

  return convertHourToSec + convertMinToSec + val.seconds;
};
