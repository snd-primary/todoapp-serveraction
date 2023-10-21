"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function Home() {
  const [inputTodo, setInputTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };
  return (
    <main>
      <div>
        <Input type="text" value={inputTodo} onChange={handleChange} />
        <Button>Do it</Button>
      </div>
      <div>
        <ul>
          <li>{inputTodo}</li>
        </ul>
      </div>
    </main>
  );
}
