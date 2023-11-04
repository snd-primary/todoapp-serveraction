"use client";
import { todoFormSchema } from "types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { setFormData } from "./actions";
import FormCard from "@/components/FormCard";

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
    setFormData(values)
      .then(() => {
        router.push("/doing");
      })
      .catch(() => alert("error"));
  };

  return (
    <div>
      <FormCard form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default TodoForm;
