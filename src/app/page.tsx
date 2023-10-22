"use client";
import React, { useState } from "react";
import TodoCard from "./components/TodoCard";

export default function Home() {
  return (
    <main className="w-full h-full grid place-content-center place-items-center">
      <TodoCard />
    </main>
  );
}
