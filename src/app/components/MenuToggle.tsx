"use client";
import React from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

type MenuToggleProps = {
  handler: () => void;
  toggle: boolean;
  className?: string;
};
const MenuToggle: React.FC<MenuToggleProps> = ({
  handler,
  toggle,
  className,
}) => {
  return (
    <button onClick={handler} className={className}>
      {toggle ? <Cross2Icon /> : <HamburgerMenuIcon />}
    </button>
  );
};

export default MenuToggle;
