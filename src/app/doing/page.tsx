"use client";
import CountDown from "@/components/CountDown";
import { useTodo } from "@/context/TodoProvider";
import { totalSeconds } from "@/lib/totalSeconds";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

const ProgressCircle = ({}) => {
  const size: number = 100;
  const radius = 45;
  const strokeWidth = 6;
  const emptyStrokeOpacity = 0.25;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(Math.ceil((circumference / 100) * (100 - 100)));
  const transition = {
    duration: 3,
    delay: 0.5,
    ease: "easeIn",
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };

  return (
    <>
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="circle"
          strokeWidth={strokeWidth}
          stroke="#f0f0f0"
          strokeOpacity={emptyStrokeOpacity}
          fill="transparent"
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        style={{
          position: "absolute",
          transform: "rotate(-90deg)",
          overflow: "visible",
          marginLeft: -size,
        }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#333"
          fill="transparent"
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          variants={variants}
          initial="hidden"
          animate={"show"}
        />
      </svg>
    </>
  );
};

const TodoItem: React.FC = () => {
  const [todo] = useTodo();
  const TOTAL_SECONDS = totalSeconds(todo);

  const pathRef = useRef();
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold">{todo?.title}</h2>
        <ProgressCircle />
        <CountDown initialCount={TOTAL_SECONDS} />
      </div>
    </>
  );
};

export default TodoItem;
