"use server";

import { cookies } from "next/headers";
import { TimerDataType } from "types/type";

export async function setCookie(data: TimerDataType) {
  const newData = JSON.stringify(data);
  cookies().set({
    name: "timer_data",
    value: newData,
    httpOnly: false,
    path: "/",
  });
}
