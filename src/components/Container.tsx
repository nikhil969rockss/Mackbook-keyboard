"use client";

import { cn } from "@/lib/utility";
import React, { useEffect } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${cn("mx-auto max-w-6xl p-4", className)}`}>
      {children}
    </div>
  );
};

export default Container;
