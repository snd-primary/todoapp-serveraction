import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AddTodoProps = {
  inputTodo: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ inputTodo, onChange }) => {
  return (
    <div>
      <Input type="text" value={inputTodo} onChange={onChange} />
      <Button>Do it</Button>
    </div>
  );
};

export default AddTodo;
