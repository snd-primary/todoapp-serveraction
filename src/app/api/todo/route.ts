import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const main = async () => {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("DBせつぞくにしっぱいしました");
  } finally {
  }
};

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const todos = await prisma.todo.findMany();

    return NextResponse.json({ msg: "sucssess", todos }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, hour, minutes, seconds } = await req.json();

    await main();
    const postTodo = await prisma.todo.create({
      data: { title, hour, minutes, seconds },
    });

    return NextResponse.json({ msg: "Sucssess", postTodo }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ msg: "error", err }, { status: 500 });
  } finally {
  }
};
