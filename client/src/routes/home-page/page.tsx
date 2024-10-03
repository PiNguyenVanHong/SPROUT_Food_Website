import { TicketPercent, Bean } from "lucide-react";
import { beans, fruits } from "@/utils/data";

import HeroComponent from "@/components/homepage/hero-component";
import CookComponent from "@/components/homepage/cook-component";
import BonusComponent from "@/components/homepage/bonus-component";
import WorkComponent from "@/components/homepage/work-component";
import CarouselProduct from "@/components/product/carousel-product";

function Homepage() {
  const item1 = fruits;
  const item2 = beans;

  return (
    <div className="w-full h-full my-6">
      <HeroComponent />
      <div className="px-4 lg:px-0">
        <CarouselProduct
          label="Discounted goods"
          icon={TicketPercent}
          products={item1}
        />
        <CookComponent />
        <BonusComponent />
        <CarouselProduct label="New additions" icon={Bean} products={item2} />
        <WorkComponent />
      </div>
    </div>
  );
}

export default Homepage;
