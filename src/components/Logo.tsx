
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo = ({ className, dark = false }: LogoProps) => {
  return (
    <div className={cn("font-redhat font-bold", className)}>
      <img 
        src="/lovable-uploads/7a81db87-bc33-4aec-992e-0b4a36424818.png" 
        alt="Hive Logo" 
        className="h-12" 
      />
    </div>
  );
};

export default Logo;
