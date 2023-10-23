"use client";
import React, { useState } from "react";
import AddTodo from "../components/AddTodo";

export default function Home() {
  return (
    <main className="w-full max-w-full h-full grid place-content-center place-items-center">
      <AddTodo />
    </main>
  );
}
