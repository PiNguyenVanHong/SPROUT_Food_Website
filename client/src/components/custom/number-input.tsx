import { useState } from "react";
import { Input } from "../ui/input";
import { Minus, Plus } from "lucide-react";

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
    <div className="flex items-center relative">
      <button
        onClick={handleDecrease}
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        disabled={count <= min}
      >
        <Minus size={16} />
      </button>

        <Input
            type="number"
            value={count}
            onChange={handleInputChange}
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm block w-full py-2.5 rounded-none"
            style={{
                MozAppearance: "textfield",
              }}
              min={min}
              max={max}
        />

      <button
        onClick={handleIncrease}
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        disabled={count >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default NumberInput;
