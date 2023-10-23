import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SubmitTodo from "./form/SubmitTodo";

function AddTodo() {
  return (
    <Card className="w-[330px] sm:w-[600px] ">
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
        <CardDescription>Let's go.</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <SubmitTodo />
      </CardContent>
    </Card>
  );
}
export default AddTodo;
