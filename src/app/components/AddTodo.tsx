import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { title } from "process";

const addTodoFormSchema = z.object({
  title: z.string().min(2).max(80),
  hour: z.number().int().lte(24),
  minute: z.number().int().lte(59),
  secound: z.number().int().lte(59),
});

export const AddTodoForm = () => {
  const form = useForm<z.infer<typeof addTodoFormSchema>>({
    resolver: zodResolver(addTodoFormSchema),
    defaultValues: {
      title: "",
      hour: 0,
      minute: 0,
      secound: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof addTodoFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Todo Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormDescription>Todoのタイトルを入力</FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

// export const;

function AddTodo() {
  const [todoTitle, setTodoTitle] = useState("");

  const todoTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
        <CardDescription>Let's go.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex">
        <AddTodoForm />
        {/* <Button>Do it</Button> */}
      </CardFooter>
    </Card>
  );
}
export default AddTodo;
