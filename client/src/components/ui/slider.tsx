import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  initialColor?: string; // Màu khởi tạo
  isPrice?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, initialColor = "primary", isPrice = false, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className={cn("absolute h-full", `bg-${initialColor}`)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn("block h-5 w-4 rounded-sm border bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50", `border-${initialColor}/50 focus-visible:ring-${initialColor}`)} />
    {isPrice && (<SliderPrimitive.Thumb className={cn("block h-5 w-4 rounded-sm border bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50", `border-${initialColor}/50 focus-visible:ring-${initialColor}`)} />)}
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
