import { cn } from "@/lib/utility";
import React from "react";

type KeyboradLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const KeyboradLayout: React.FC<KeyboradLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${cn("mx-auto flex w-full flex-col gap-4 rounded-md bg-gray-700/50 p-3 max-lg:max-w-4xl", className)}`}
    >
      {children}
    </div>
  );
};

export default KeyboradLayout;
