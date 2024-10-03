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
  return (
    <div className="p-1">
      <Card className="group hover:border-foreground-green transition duration-300 cursor-pointer text-foreground h-full">
        <CardHeader className="h-28 relative -top-14 lg:-top-24">
          <div className="flex items-end justify-between">
            <div className="basis-2/3">
              <img src={image} alt="" />
            </div>
            <div className="basis-1/3 flex flex-col items-end justify-end gap-4">
              <div
                className={cn(
                  "inline-flex flex-col lg:flex-row items-center gap-2 text-foreground-green",
                  !sale && "lg:mb-10"
                )}
              >
                <Star size={14} strokeWidth={0} fill="#4c7c7d" />
                <span className="text-sm font-medium ">{rating}/5</span>
              </div>
              {sale && (
                <span className="absolute left-11 lg:static rounded-lg rotate-6 text-background text- text-xs p-2 bg-foreground-red uppercase lg:tracking-wide">
                  On sale
                </span>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 h-16">
          <span className="text-lg font-medium line-clamp-2">{name}</span>
        </CardContent>
        <CardFooter className="flex flex-row-reverse lg:flex-row lg:items-end justify-between mt-auto">
          <Button
            className="flex items-center gap-2 px-4 py-5 rounded-lg hover:bg-foreground-green/80 group-hover:bg-foreground-green group-hover:text-background transition duration-300"
            variant={"outline"}
          >
            <span className="hidden lg:block">Add</span> 
            <Plus size={15} />
          </Button>
          {sale ? (
            <div className="flex flex-col font-medium items-start lg:items-end text-xs">
              <div className="flex lg:flex-col flex-row-reverse items-center justify-end">
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
            <div className="flex flex-col font-medium items-end text-xs">
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
