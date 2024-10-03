import { Slider } from "@/components/ui/slider";
import { Input } from "../ui/input";
import { DollarSign } from "lucide-react";

type SliderProps = React.ComponentProps<typeof Slider>;

interface SliderCustomProps extends SliderProps {
  isPrice?: boolean;
  initialColor?: string;
  min?: number;
  max?: number;
  from?: number;
  to?: number;
}

export function SliderCustom({ isPrice, initialColor, min=0, max, from, to, className, ...props }: SliderCustomProps) {
  return (
    <div className="w-full flex-col items-center">
      {isPrice && (
        <div className="flex items-center justify-between mb-2 text-sm text-foreground/70 font-medium">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
      <Slider
        defaultValue={[40]}
        max={max}
        step={1}
        className={className}
        initialColor={initialColor}
        {...props}
      />
      {isPrice ? (
        <div className="flex items-center justify-stretch gap-4 mt-6">
          <div className="flex items-center gap-4">
            <span className="text-foreground/70 font-medium">From:</span>
            <div className="relative">
              <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2" size={14} />
              <Input className="w-20 pl-6 font-medium" type="number" min={min} max={max} value={from} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-foreground/70 font-medium">To:</span>
            <div className="relative">
              <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2" size={14} />
              <Input className="w-20 pl-6 font-medium" type="number" min={min} max={max} value={to} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between mt-2 text-foreground/60 font-medium">
        <span>0%</span>
        <span>10%</span>
        <span>20%</span>
      </div>
      )}
    </div>
  );
}
