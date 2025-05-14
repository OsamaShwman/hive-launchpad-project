
import React from "react";
import HexagonDot from "./HexagonDot";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo = ({ className, dark = false }: LogoProps) => {
  return (
    <div className={cn("font-redhat font-bold text-3xl flex items-center", 
      dark ? "text-hive-blue-dark" : "text-white", 
      className
    )}>
      H<HexagonDot />ve
    </div>
  );
};

export default Logo;
