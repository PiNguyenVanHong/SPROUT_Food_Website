import { useState } from "react";
import { Input } from "../ui/input";
import { Minus, Plus } from "lucide-react";
import { formatWeight } from "@/utils/format";

interface NumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}

const NumberInput = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
}: NumberInputProps) => {
  const [count, setCount] = useState<number>(value);

  const handleIncrease = () => {
    if (count < max) {
      setCount((prev) => prev + step);
    }
  };

  const handleDecrease = () => {
    if (count > min) {
      setCount((prev) => prev - step);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setCount(newValue);
    }
  };

  return (
    <div className="flex items-center relative border rounded-lg">
      <button
        onClick={handleDecrease}
        className="bg-transparent hover:opacity-80 p-3 h-11"
        disabled={count <= min}
      >
        <Minus size={16} />
      </button>

        <Input
            type="number"
            value={count}
            onChange={handleInputChange}
            className="hidden bg-white border-x-0 h-11 text-center text-gray-900"
            style={{
                MozAppearance: "textfield",
              }}
              min={min}
              max={max}
        />

        <div className="w-12 py-2.5 bg-white block text-center">
              {formatWeight(count)}
        </div>

      <button
        onClick={handleIncrease}
        className="bg-transparent hover:opacity-80 p-3 h-11"
        disabled={count >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default NumberInput;
