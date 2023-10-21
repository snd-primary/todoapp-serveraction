"use client";
import { useState } from "react";
import AddTodo from "./components/AddTodo";

export default function Home() {
  const [inputTodo, setInputTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };
  return (
    <main>
      <AddTodo onChange={handleChange} inputTodo={inputTodo} />

      <span>{inputTodo}</span>
    </main>
  );
}
