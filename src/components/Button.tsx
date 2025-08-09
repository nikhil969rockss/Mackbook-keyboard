"use client";
import { cn } from "@/lib/utility";
import React, { useEffect } from "react";

type ButtonProps = {
  children: React.ReactNode;
  buttonSymbol?: string | React.JSX.Element;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  buttonSymbol,
  className,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === buttonSymbol) {
        // add css to the button
      }
    });
  }, []);
  return (
    <button
      className={`${cn("flex h-[65px] w-[65px] cursor-pointer flex-col items-center justify-center rounded-md bg-[#0c0c0e] p-2 text-neutral-200 transition-all duration-300 hover:shadow-xs hover:shadow-white/40 active:scale-95 max-lg:h-[50px] max-lg:w-[50px] max-lg:text-[10px]", className)}`}
    >
      <span>{buttonSymbol}</span>
      {children}
    </button>
  );
};

export default Button;
