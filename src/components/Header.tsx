"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const menuToggleHandler = () => {
    setToggle((state) => !state);
  };
  return (
    <header className="flex fixed top-0 left-0 w-full border-b-2 items-center justify-between p-2 z-20">
      <Link href="/" className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 128 128"
          fill="none"
          className={"rotate-180"}
        >
          <path
            fill="currentColor"
            d="M60.73 27.368c11.34-11.34 29.726-11.34 41.066 0 11.34 11.34 11.34 29.726 0 41.066L86.468 83.762a2 2 0 0 1-2.629.175l-12.024-9.19a2 2 0 0 1-.2-3.003L88.362 55c3.92-3.92 3.92-10.276 0-14.196s-10.276-3.92-14.196 0L38.802 76.165c-3.92 3.92-3.92 10.276 0 14.196s10.276 3.92 14.196 0l10.094-10.094a2 2 0 0 1 3.105.345l8.221 12.992a2 2 0 0 1-.276 2.483l-7.709 7.709c-11.34 11.341-29.726 11.341-41.066 0-11.34-11.34-11.34-29.726 0-41.066L60.73 27.368Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M101 10H27c-9.389 0-17 7.611-17 17v74c0 9.389 7.611 17 17 17h74c9.389 0 17-7.611 17-17V27c0-9.389-7.611-17-17-17ZM27 0C12.088 0 0 12.088 0 27v74c0 14.912 12.088 27 27 27h74c14.912 0 27-12.088 27-27V27c0-14.912-12.088-27-27-27H27Z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-lg font-bold">todo-chain</h1>
      </Link>
      <div className="flex items-center gap-4">
        <nav className="hidden sm:block">
          <ul className={"flex items-center gap-3"}>
            <li>
              <Link href="/">Usage</Link>
            </li>
            <li>
              <Link href="/">Signin</Link>
            </li>
            <li>
              <Link href="/">Signup</Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
        <MenuToggle
          toggle={toggle}
          handler={menuToggleHandler}
          className="block sm:hidden z-10"
        />
      </div>
      <div
        className={`sm:hidden absolute inset-0  ${
          toggle ? "block translate-x-0" : "hidden"
        }`}
      >
        <nav className="bg-slate-400">
          <ul className={"flex flex-col items-start gap-3"}>
            <li>
              <Link href="/">Usage</Link>
            </li>
            <li>
              <Link href="/">Signin</Link>
            </li>
            <li>
              <Link href="/">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
