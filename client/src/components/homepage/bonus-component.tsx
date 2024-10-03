import { Trophy } from "lucide-react";

import ProgressCircle from "@/components/custom/progress-circle";
import { SliderCustom } from "@/components/custom/slider-custom";
import { Button } from "@/components/ui/button";

function BonusComponent() {
  return (
    <div className="lg:my-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-start border-t-2 border-background-darker pt-20">
        <div className="flex items-center gap-4">
          <Trophy size={32} />
          <h1 className="text-3xl font-semibold">Bonus program</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          <div className="bg-white px-10 py-8 rounded-xl flex flex-col items-center justify-between shrink-0 grow-0 shadow-lg">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:mb-10">
              <ProgressCircle progress={5} size={200} />
              <div className="flex w-full lg:w-auto lg:flex-1 lg:flex-col items-center gap-3 mt-5 lg:mt-0 lg:pl-10 font-medium">
                <div className="w-full flex items-center justify-between">
                  <span>Level:</span>
                  <span>1</span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <span>Not enough to 10%:</span>
                  <span>$74</span>
                </div>
              </div>
            </div>
            <SliderCustom initialColor="foreground-red" />
          </div>
          <div className="bg-transparent lg:px-20 lg:py-14 rounded-xl flex flex-col items-start justify-between gap-5 lg:gap-0 shrink-0 grow-0">
            <h1 className="text-xl lg:text-2xl font-semibold">
              Accumulative system of discounts for regular customers!
            </h1>
            <span>
              Our online store has an accumulation system of discounts for
              regular customers. Sign up and earn discount levels as your total
              purchases increase.
            </span>
            <Button className="w-full lg:w-auto" size={"lg"}>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BonusComponent;
