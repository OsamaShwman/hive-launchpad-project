
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  dark?: boolean;
  size?: "small" | "large" | "default";
}

const Logo = ({ className, dark = false, size = "default" }: LogoProps) => {
  const sizeClasses = {
    small: "h-10",
    default: "h-12",
    large: "h-20"
  };
  
  return (
    <div className={cn("font-redhat font-bold", className)}>
      <img 
        src="/lovable-uploads/175b95fa-c21e-490a-bd75-ca8d2acce403.png" 
        alt="Hive Logo" 
        className={cn(sizeClasses[size])} 
      />
    </div>
  );
};

export default Logo;
