import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("DB接続に失敗しました");
  } finally {
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const todos = await prisma.todo.findMany();
    return NextResponse.json({ msg: "Sucsess", todos }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, doTime } = await req.json();

    await main();
    const createTodo = await prisma.todo.create({
      data: {
        title,
        doTime,
      },
    });
    return NextResponse.json({ msg: "Sucsess", createTodo }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ msg: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
