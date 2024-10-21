import { ChevronRight, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProductType } from "@/utils/types";
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import CardProduct from "@/components/product/card-product";

interface CarouselProductProps {
  label?: string;
  icon?: LucideIcon;
  products: ProductType[];
}

function CarouselProduct({ label, icon: Icon, products }: CarouselProductProps) {
  const navigate = useNavigate();

  return (
    <div className={cn("w-full max-w-7xl mx-auto", Icon ? "my-10 lg:my-20" : "")}>
      {label && Icon && (
        <div className="flex items-center justify-between lg:my-8">
        <div className="flex items-center gap-4">
          <Icon size={32} />
          <h1 className="text-xl lg:text-3xl font-semibold">{label}</h1>
        </div>
        <Button className="hidden lg:flex items-center gap-2 p-2" variant={"link"} onClick={() => navigate("/products")}>
          <span>View all</span>
          <ChevronRight size={16} />
        </Button>
      </div>
      )}
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 pt-14 lg:pt-20">
          {Array.from(products).map((pro, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 justify-stretch flex"
            >
              <CardProduct key={pro.id} id={pro.id} name={pro.name} image={pro.image} originalPrice={pro.originalPrice} salePrice={pro.salePrice} sale={pro.sale} weight={pro.weight} rating={pro.rating} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselProduct;
