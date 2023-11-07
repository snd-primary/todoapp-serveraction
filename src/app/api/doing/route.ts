import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookieStore = cookies();
  const timer_data = cookieStore.get("timer_data");

  if (timer_data === undefined) {
    return;
  }

  const new_timer_data = JSON.parse(timer_data.value);
  return new NextResponse("success", new_timer_data);
};
