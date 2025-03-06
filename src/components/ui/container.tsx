import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div 
      className={cn(
        "container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
} 