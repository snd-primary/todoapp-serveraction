import CreateTodo from "@/components/form/CreateTodo";
import React from "react";

import type { TodoProps } from "types/schema";

async function fetchAllTodos() {
  const res = await fetch(`http://localhost:3000/api/todo`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data.todos;
}

export default async function Home() {
  const todos = await fetchAllTodos();

  return (
    <main className="w-full max-w-full h-full grid place-content-center place-items-center">
      <CreateTodo />
      <ul>
        {todos.map((todo: TodoProps) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
}
