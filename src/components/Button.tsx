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
      className={`${cn("flex h-[65px] w-[65px] cursor-pointer flex-col items-center justify-center rounded-md bg-[#0c0c0e] p-2 text-neutral-200 transition-all duration-300 active:scale-90 max-lg:h-[50px] max-lg:w-[50px] max-lg:text-[10px]", className)} ${isActive || active ? "scale-90 shadow-md shadow-black/20 transition-all" : "shadow-md shadow-white/50"}`}
    >
      <span>{buttonSymbol}</span>
      {children}
    </button>
  );
};

export default Button;
