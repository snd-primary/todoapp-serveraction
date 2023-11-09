"use client";
import { todoFormSchema } from "types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import FormCard from "@/components/FormCard";
import { TimerDataType } from "types/type";

type PostTimerDataProps = {
  values: TimerDataType;
};
const postTimerData = async ({ values }: PostTimerDataProps) => {
  const res = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `testCookie="auauauauauauauauauauaau"; Secure; Path='/'`,
    },
    body: JSON.stringify({ values }),
  });
  console.log(values);
  return res.json();
};

const TodoForm: React.FC = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema, {}, { mode: "async" }),
    defaultValues: {
      title: "",
      hour: 0,
      minutes: 0,
      seconds: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof todoFormSchema>) => {
    postTimerData({ values });
  };

  return (
    <div>
      <FormCard form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default TodoForm;
