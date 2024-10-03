import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  totalReviews?: number;
  color?: string;
  isHidden?: boolean;
  size?: string;
}

const Rating = ({
  value,
  color = "currentColor",
  size = "w-5 h-5",
  isHidden,
}: RatingProps) => {
  const roundedValue = Math.round(value * 2) / 2; // Round to nearest 0.5

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="relative">
            <Star className={cn(size, "text-gray-300")} fill="currentColor" />
            <span
              style={{
                width: `${Math.min(
                  100,
                  Math.max(0, (roundedValue - star + 1) * 100)
                )}%`,
              }}
              className="absolute top-0 left-0 overflow-hidden"
            >
              <Star className={cn(size, `text-[${color}]`)} fill="currentColor" />
            </span>
          </span>
        ))}
      </div>
      {!isHidden && (
        <span className={cn("text-sm font-semibold", `text-[${color}]`)}>
          {value.toFixed(1)} / 5
        </span>
      )}
    </div>
  );
};

export default Rating;
