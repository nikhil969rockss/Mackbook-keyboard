"use client";
import { cn } from "@/lib/utility";
import { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  buttonSymbol?: string | React.JSX.Element;
  keyValue?: string;
  isActive?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  buttonSymbol,
  className,
  isActive = false,
}) => {
  const [active, setActive] = useState(false);
  return (
    <button
      onMouseDownCapture={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseUpCapture={() => setActive(false)}
      onTouchStartCapture={() => setActive(true)}
      onTouchEndCapture={() => setActive(false)}
      className={`${cn("flex h-[65px] w-[65px] cursor-pointer flex-col items-center justify-center rounded-md bg-[#0c0c0e] p-2 text-neutral-200 transition-all duration-300 hover:shadow-xs hover:shadow-white/40 active:scale-95 max-lg:h-[50px] max-lg:w-[50px] max-lg:text-[10px]", className)} ${isActive || active ? "scale-95 border bg-neutral-300 !text-neutral-700 shadow-md shadow-white/20 transition-all" : ""}`}
    >
      <span>{buttonSymbol}</span>
      {children}
    </button>
  );
};

export default Button;
