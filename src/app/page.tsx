"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

import {
  ClockIcon,
  CheckboxIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { useTodo } from "@/context/TodoProvider";
import { useRouter } from "next/navigation";
import { HelpPopover } from "@/components/HelpPopover";

const TodoForm: React.FC = () => {
  const router = useRouter();
  const [, setTodo] = useTodo();

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
    setTodo(values);
    localStorage.setItem("todo", JSON.stringify(values));
    router.push("/doing");
  };

  return (
    <div>
      <Card className="w-[330px] sm:w-[600px] overflow-hidden ">
        <CardHeader className="pb-12">
          <CardTitle className="-ml-2 pb-1 text-3xl flex items-center gap-2 border-b-2 mb-2">
            <CheckboxIcon width={40} height={40} />
            <span className="pt-1 tracking-wider">Create Todo</span>
          </CardTitle>
          <CardDescription className="pl-0.5">
            取り組むタスクのタイトルと所要時間を入力してください
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col justify-between items-end gap-12"
            >
              <div className="flex flex-col gap-16 w-full">
                <div className="relative">
                  <h2 className=" text-2xl flex items-center gap-2 pb-4 ">
                    <span className="pt-1">Task Title</span>
                    <HelpPopover content="タイトルの入力は必須です。" />
                  </h2>
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="max-w-lg relative">
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Your Todo"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-8 left-1 text-sm text-primary  py-1 px-2 rounded-md" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2 relative">
                  <h2 className="text-2xl flex items-center gap-2 pb-4 ">
                    <span className="pt-1">Do Time</span>
                    <HelpPopover content="10秒～24時間59分59秒までの間でタスクの所要時間を入力してください" />
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
                          </Select>
                          <FormLabel>時間</FormLabel>
                          <FormMessage className="absolute -bottom-12 left-0 z-10 text-sm text-primary w-1/2" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="minutes"
                      render={({ field }) => (
                        <FormItem className="relative grid grid-cols-2 w-full sm:grid-cols-[100px_40px] items-center gap-2">
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="0~59"
                              {...field}
                            />
                          </FormControl>
                          <FormLabel className="">分</FormLabel>
                          <FormMessage className=" absolute -bottom-12 left-0" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="seconds"
                      render={({ field }) => (
                        <FormItem className="relative grid grid-cols-2 w-full sm:grid-cols-[100px_40px] items-center gap-2">
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="0~59"
                              {...field}
                            />
                          </FormControl>
                          <FormLabel>秒</FormLabel>

                          <FormMessage className="absolute -bottom-12 left-0" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full sm:w-48" type="submit">
                Do it
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoForm;
