
import { cn } from "@/lib/utils";
import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
  className?: string;
}

const ValueCard = ({ title, description, className }: ValueCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 bg-white rounded-lg shadow-md border-t-4 border-hive-yellow hover:shadow-lg transition-shadow",
        className
      )}
    >
      <h3 className="text-xl font-bold mb-3 text-hive-blue-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;
