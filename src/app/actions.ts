"use server";

import { cookies } from "next/headers";
import { Task } from "types/type";

export async function setFormData(data: Task) {
  // data.

  const newData = JSON.stringify(data);
  cookies().set({
    name: "form_data",
    value: newData,
    httpOnly: false,
    path: "/",
  });
}
