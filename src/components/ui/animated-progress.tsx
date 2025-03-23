"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface AnimatedProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  delay?: number;
  animate?: boolean;
}

function AnimatedProgress({
  className,
  value,
  delay = 0,
  animate = false,
  ...props
}: AnimatedProgressProps) {
  const [animatedValue, setAnimatedValue] = React.useState(0);
  
  React.useEffect(() => {
    if (!animate) {
      setAnimatedValue(0);
      return;
    }
    
    const timer = setTimeout(() => {
      setAnimatedValue(value || 0);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay, animate]);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1"
        style={{ 
          transform: `translateX(-${100 - animatedValue}%)`,
          transition: `transform 1800ms cubic-bezier(0.16, 1, 0.3, 1)`
        }}
      />
    </ProgressPrimitive.Root>
  )
}

export { AnimatedProgress }
