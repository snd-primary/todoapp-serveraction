import React from "react";

import { todoFormSchema } from "types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

import { ClockIcon, CheckboxIcon } from "@radix-ui/react-icons";

export const SubmitTodo: React.FC = ({ ...props }) => {
  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: "",
      hour: 0,
      minute: 0,
      secound: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof todoFormSchema>) => {
    console.log(values);
    return values;
  };

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col justify-between items-end gap-12"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-8 w-full">
          <div>
            <h2 className="text-lg font-bold">TODOタイトル</h2>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="max-w-lg">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="仕事、勉強・・・"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <h2 className="font-bold text-lg flex items-center gap-1 ">
              <span>所要時間</span>
              <ClockIcon className="w-5 h-5" />
            </h2>
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

                    <FormLabel className="">分</FormLabel>
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
                    <FormLabel>秒</FormLabel>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full sm:w-48">
          Do it
        </Button>
      </form>
    </Form>
  );
};

export default SubmitTodo;
