import { Plus, Star } from "lucide-react";
import { formatNumber, formatWeight } from "@/utils/format";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface CardProductProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  originalPrice: number;
  salePrice: number;
  sale: boolean;
  weight: number;
}

function CardProduct({
  name,
  image,
  rating,
  originalPrice,
  salePrice,
  sale,
  weight,
}: CardProductProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full p-1 lg:p-4" onClick={() => navigate("/products/123")}>
      <Card className="group hover:border-foreground-green transition duration-300 cursor-pointer text-foreground h-full">
        <CardHeader className="h-12 px-3 lg:p-6 lg:h-28 relative -top-14 lg:-top-20">
          <div className="flex items-end justify-between">
            <div className="h-20 lg:h-36 drop-shadow-xl shadow-black">
              <img src={image} alt="" />
            </div>
            <div className="flex flex-col items-end justify-end gap-4">
              <div
                className={cn(
                  "inline-flex flex-col lg:flex-row items-center gap-0 lg:gap-2 text-foreground-green",
                  !sale && "lg:mb-10"
                )}
              >
                <Star size={14} strokeWidth={0} fill="#4c7c7d" />
                <span className="text-xs lg:text-sm font-medium ">{rating}/5</span>
              </div>
              {sale && (
                <span className="absolute left-8 lg:static rounded-lg rotate-6 text-background text-[10px] leading-3  lg:text-xs p-1 lg:p-2 bg-foreground-red uppercase lg:tracking-wide">
                  On sale
                </span>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3 pb-0 lg:p-6 lg:pt-0 h-16">
          <span className="text-sm lg:text-lg font-medium line-clamp-2">{name}</span>
        </CardContent>
        <CardFooter className="flex flex-row-reverse lg:flex-row lg:items-end justify-between mt-auto p-3 pt-0 lg:p-6 lg:pt-0">
          <Button
            className="hidden lg:flex items-center gap-2 p-2 lg:px-4 lg:py-5 rounded-lg hover:bg-foreground-green/80 group-hover:bg-foreground-green group-hover:text-background transition duration-300"
            variant={"outline"}
          >
            <span className="hidden lg:block">Add</span> 
            <Plus size={15} />
          </Button>
          {sale ? (
            <div className="w-full flex flex-col font-medium items-start lg:items-end text-xs">
              <div className="flex gap-1 lg:gap-0 lg:flex-col flex-row-reverse items-center justify-end">
                <span className="line-through">
                  {formatNumber(originalPrice, true)}
                </span>
                <span className="text-foreground-red text-base">
                  {formatNumber(salePrice, true)}
                </span>
              </div>
              <span className="text-foreground/60">
                / {formatWeight(weight)}
              </span>
            </div>
          ) : (
            <div className="w-full flex flex-col font-medium items-start lg:items-end text-xs">
              <span className="text-base">
                {formatNumber(originalPrice, true)}
              </span>
              <span className="text-foreground/60">
                / {formatWeight(weight)}
              </span>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardProduct;
