
import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const SectionHeading = ({ 
  children, 
  className,
  align = "center"
}: SectionHeadingProps) => {
  return (
    <h2 
      className={cn(
        "text-3xl md:text-4xl font-bold mb-8 font-redhat",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
