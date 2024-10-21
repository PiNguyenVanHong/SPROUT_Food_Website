import Image1 from "@/assets/homepage/1.png";
import SaleBadge from "@/assets/homepage/sale-badge.png";
import SaleRibbon from "@/assets/homepage/sale-ribbon-02.png";

import { Button } from "@/components/ui/button";

function HeroComponent() {
  return (
    <>
      <div className="w-full h-full hidden lg:flex gap-2">
        <div className="basis-2/3 bg-background-darker rounded-xl ml-2 flex justify-between overflow-hidden shadow-lg">
          <div className="flex flex-col items-start justify-center gap-10 ml-28 w-1/3 h-full">
            <h1 className="text-5xl font-semibold">Organic bar</h1>
            <span className="font-medium">
              Espcially suitable for athletes, but also ideal for preventing
              fatigue and loss of productivity
            </span>
            <div>
              <Button className="px-8 py-6" variant={"green"}>Shop now</Button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="basis-1/3 bg-foreground rounded-xl mr-2 relative text-background overflow-hidden shadow-lg">
          <div className="absolute -top-5 -right-5 w-40 ">
            <img src={SaleBadge} alt="" />
          </div>
          <div className="absolute bottom-8">
            <img src={SaleRibbon} alt="" />
          </div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 font-medium">
            <h1 className="text-xl mb-10">Spring promo code:</h1>
            <span className="text-5xl">FRUITS2024</span>
          </div>
          <span className="w-3/4 text-center text-sm absolute bottom-10 left-1/2 -translate-x-1/2">
            Gives 10% off all seasonal fruits on your first purchase
          </span>
        </div>
      </div>
      <div className="w-full h-[300px] flex items-center justify-center lg:hidden">
        <div className="w-full h-full mx-2 bg-foreground rounded-3xl relative inset-0 text-background overflow-hidden shadow-lg">
          <div className="absolute -top-5 -right-5 w-40 ">
            <img src={SaleBadge} alt="" />
          </div>
          <div className="absolute bottom-4">
            <img src={SaleRibbon} alt="" />
          </div>
          <div className="absolute top-5 left-5 font-medium">
            <h1 className="text-lg mb-4">Spring promo code:</h1>
            <span className="text-3xl">FRUITS2024</span>
          </div>
          <span className="w-full text-center text-sm absolute bottom-6 left-1/2 -translate-x-1/2">
            Gives 10% off all seasonal fruits on your first purchase
          </span>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
