import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Task, TodoProps } from "types/type";

export async function POST(req: Request, res: NextResponse) {
  // フォームからのデータを取得
  const data: Task = await req.json();
  const newData = JSON.stringify(data);

  let response = NextResponse.next();
  response.cookies.set({
    name: "form_data",
    value: newData,
    httpOnly: false,
    path: "/",
  });
  return response;
}
// export async function POST(req: Request) {
//   // フォームからのデータを取得
//   const data: Task = await req.json();

//   // クッキーに保存
//   return new NextResponse("Form data received.", {
//     status: 200,
//     headers: {
//       "Set-Cookie": `form_data=${JSON.stringify(data)}; Path=/;  Secure`,
//     },
//   });
// }
