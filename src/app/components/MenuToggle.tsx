"use client";
import React from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

type MenuToggleProps = {
  setToggle: () => void;
  toggle: boolean;
};
const MenuToggle: React.FC<MenuToggleProps> = ({ setToggle, toggle }) => {
  const toggleHandler = () => {
    setToggle;
  };
  return (
    <button onClick={toggleHandler}>
      <Cross2Icon />
    </button>
  );
};

export default MenuToggle;
