"use client";
import React, { useState } from "react";
import { TodoProps } from "types/type";

const TodoContext = React.createContext<
  [TodoProps, React.Dispatch<React.SetStateAction<TodoProps>>] | undefined
>(undefined);

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todo, setTodo] = useState<TodoProps>({
    title: "",
    hour: 0,
    minutes: 0,
    seconds: 0,
  });

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = React.useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a CounterProvider");
  }
  return context;
};
