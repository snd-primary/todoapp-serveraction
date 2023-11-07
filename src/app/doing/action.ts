"use server";

import { cookies } from "next/headers";
import { TimerDataType } from "types/type";

type TimeStanpType = {
  beginTime: number;
  finishTime: number;
};

export async function setTimeStanpCookie(data: TimeStanpType) {
  const newData = JSON.stringify(data);
  cookies().set({
    name: "timestanp",
    value: newData,
    httpOnly: false,
    path: "/",
  });
}

export const getTimerDataCookie = () => {
  const cookieStore = cookies();
  const timer_data = cookieStore.get("timer_data");

  const data: TimerDataType = JSON.parse(timer_data.value);
  return {
    data: data,
  };
};
