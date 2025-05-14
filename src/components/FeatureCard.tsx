
import { cn } from "@/lib/utils";
import React from "react";
import HexagonIcon from "./HexagonIcon";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  // Truncate description if it's too long
  const shortDescription = description.length > 80 
    ? `${description.substring(0, 80).trim()}...` 
    : description;
    
  return (
    <div 
      className={cn(
        "flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow", 
        className
      )}
    >
      <HexagonIcon>{icon}</HexagonIcon>
      <h3 className="text-xl font-bold mb-2 mt-2 text-hive-blue-dark">{title}</h3>
      <p className="text-gray-600 text-sm">{shortDescription}</p>
    </div>
  );
};

export default FeatureCard;
