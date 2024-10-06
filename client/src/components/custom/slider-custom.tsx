import { Slider } from "@/components/ui/slider";
import { Input } from "../ui/input";
import { DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type SliderProps = React.ComponentProps<typeof Slider>;

interface SliderCustomProps extends SliderProps {
  isPrice?: boolean;
  initialColor?: string;
  min?: number;
  max?: number;
  from?: number;
  to?: number;
}

export function SliderCustom({
  isPrice,
  initialColor,
  min = 0,
  max,
  from,
  to,
  className,
  ...props
}: SliderCustomProps) {
  const [priceRange, setPriceRange] = useState({ from: 0, to: 20 });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if(!isPrice) return;
    searchParams.set("from", priceRange.from.toString());
    searchParams.set("to", priceRange.to.toString());
    setSearchParams(searchParams);
  }, [priceRange, searchParams, setSearchParams]);

  const handleSliderChange = (values: any) => {
    if (!isPrice) return;
    setPriceRange({ from: values[0], to: values[1] });
  };

  const handleInputChange = (e: any) => {
    if (!isPrice) return;
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value ? Number(value) : 0,
    }));
  };

  return (
    <div className="w-full flex-col items-center">
      {isPrice && (
        <div className="flex items-center justify-between mb-2 text-sm text-foreground/70 font-medium">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
      <Slider
        step={1}
        max={max}
        className={className}
        initialColor={initialColor}
        isPrice={isPrice}
        value={isPrice ? [priceRange.from, priceRange.to] : [30]}
        onValueChange={handleSliderChange}
        {...props}
      />
      {isPrice ? (
        <div className="flex items-center justify-stretch gap-4 mt-6">
          <div className="flex items-center gap-4">
            <span className="text-foreground/70 font-medium">From:</span>
            <div className="relative">
              <DollarSign
                className="absolute left-2 top-1/2 -translate-y-1/2"
                size={14}
              />
              <Input
                className="w-20 pl-6 font-medium"
                type="number"
                name="from"
                min={0}
                max={priceRange.to}
                value={priceRange.from}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-foreground/70 font-medium">To:</span>
            <div className="relative">
              <DollarSign
                className="absolute left-2 top-1/2 -translate-y-1/2"
                size={14}
              />
              <Input
                className="w-20 pl-6 font-medium"
                type="number"
                max={max}
                name="to"
                value={priceRange.to}
                onChange={handleInputChange}
                min={priceRange.from}
              />
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
