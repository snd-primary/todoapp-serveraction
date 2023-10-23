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

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const addTodoFormSchema = z.object({
  title: z.string().min(1, "タイトルを入力してください").max(80),
  hour: z.coerce.number().int().lte(12),
  minute: z.coerce
    .number({ required_error: "0~59分以内で入力してください" })
    .nonnegative()
    .int()
    .lte(59, "0~59分以内で入力してください"),
  secound: z.coerce
    .number({ required_error: "0~59秒以内で入力してください" })
    .nonnegative()
    .int()
    .lte(59, "0~59秒以内で入力してください"),
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
      <form
        className="w-full flex flex-col justify-between items-end gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-8 w-full">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="max-w-lg">
                <FormLabel>TODOタイトル</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Todo title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:flex-row  w-full items-center gap-4">
            <FormField
              control={form.control}
              name="hour"
              render={({ field }) => (
                <FormItem className="relative grid grid-cols-2 w-full sm:grid-cols-[130px_40px] items-center gap-2">
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="0~24" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                    <FormMessage className="absolute -bottom-12 left-0" />
                  </Select>

                  <FormLabel>時間</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minute"
              render={({ field }) => (
                <FormItem className="relative grid grid-cols-2 w-full sm:grid-cols-[100px_40px] items-center gap-2">
                  <FormControl>
                    <Input type="number" placeholder="0~59" {...field} />
                  </FormControl>
                  <FormMessage className=" absolute -bottom-12 left-0" />

                  <FormLabel className="">Minute</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="secound"
              render={({ field }) => (
                <FormItem className="relative grid grid-cols-2 w-full sm:grid-cols-[100px_40px] items-center gap-2">
                  <FormControl>
                    <Input type="number" placeholder="0~59" {...field} />
                  </FormControl>
                  <FormMessage className="absolute -bottom-12 left-0" />
                  <FormLabel>secound</FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Do it
        </Button>
      </form>
    </Form>
  );
};

function AddTodo() {
  const [todoTitle, setTodoTitle] = useState("");

  const todoTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  return (
    <Card className="w-[330px] sm:w-[600px] lg:w-[800px]">
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
        <CardDescription>Let's go.</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <AddTodoForm />
      </CardContent>
      <CardFooter className="flex"></CardFooter>
    </Card>
  );
}
export default AddTodo;
