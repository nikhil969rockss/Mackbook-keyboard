"use client";

import { cn } from "@/lib/utility";

type CapsCircleProps = {
  active?: boolean;
  isActive?: boolean;
};
const CapsCircle: React.FC<CapsCircleProps> = ({ active, isActive }) => {
  return (
    <div
      className={`${cn("h-[6px] w-[6px] rounded-full", active || isActive ? "bg-green-500" : "bg-neutral-200/60")}`}
    ></div>
  );
};

export default CapsCircle;
