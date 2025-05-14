
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const Button = ({ 
  children, 
  variant = "primary", 
  size = "default", 
  className,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "font-redhat font-bold transition-colors rounded-md",
        {
          "bg-hive-yellow hover:bg-hive-yellow-light text-hive-blue-dark": variant === "primary",
          "bg-white hover:bg-hive-gray text-hive-blue-dark": variant === "secondary",
          "bg-transparent border-2 border-white hover:bg-white/10 text-white": variant === "outline",
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "default",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
