
import { cn } from "@/lib/utils";
import React from "react";

interface HexagonIconProps {
  children: React.ReactNode;
  className?: string;
}

const HexagonIcon = ({ children, className }: HexagonIconProps) => {
  return (
    <div className={cn("relative inline-flex items-center justify-center mb-4", className)}>
      <div className="absolute w-16 h-16 bg-hive-yellow rotate-0 rounded-xl"></div>
      <div className="relative z-10 text-hive-blue-dark text-2xl">
        {children}
      </div>
    </div>
  );
};

export default HexagonIcon;
