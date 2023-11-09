import { NextResponse } from "next/server";
import { TimerDataType } from "types/type";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const values: TimerDataType = await req.json();
    return NextResponse.json({ msg: "Success", values }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Error" }, { status: 500 });
  } finally {
  }
};
