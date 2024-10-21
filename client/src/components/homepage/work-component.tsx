import Image1 from "@/assets/work/1.svg";
import Image2 from "@/assets/work/2.svg";
import Image3 from "@/assets/work/3.svg";
import Image4 from "@/assets/work/4.svg";
import Arrow from "@/assets/work/arrow.svg";

import { BriefcaseBusiness } from "lucide-react";

function WorkComponent() {
  return (
    <div className="lg:my-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-start lg:my-6">
        <div className="flex items-center gap-4">
          <BriefcaseBusiness size={32} />
          <h1 className="text-xl lg:text-3xl font-semibold">How we work</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-between lg:mt-10 py-10 gap-6 lg:gap-0">
          <div className="flex items-center lg:gap-4 lg:relative -bottom-10 lg:pr-8">
            <div className="w-20 lg:w-36">
              <img src={Image1} alt="" />
            </div>
            <div className="ml-3 lg:ml-0 flex flex-col items-start justify-between text-sm gap-3 lg:gap-0">
              <p className="text-lg font-medium">Gathering</p>
              <span className="w-3/4">
                Picking fresh plants from all over the world
              </span>
            </div>
            <div className="w-24 lg:w-1/3 relative -left-10 -bottom-5 lg:absolute lg:left-60 lg:bottom-0 scale-y-[-1] rotate-[30deg] lg:rotate-0  lg:scale-y-100">
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div className="flex items-center lg:gap-4 relative lg:-top-10   left-8 lg:-left-10">
            <div className="w-32 lg:w-40">
              <img src={Image2} alt="" />
            </div>
            <div className="ml-5 lg:ml-0 flex flex-col items-start justify-between text-sm gap-3 lg:gap-0">
              <p className="text-lg font-medium">Transportation</p>
              <span className="w-3/4">
                Select the best and transport it to our bases
              </span>
            </div>
            <div className="-order-last lg:order-last w-32 lg:w-1/3 relative -bottom-6 lg:absolute right-6 lg:-right-16 lg:bottom-6 lg:scale-y-[-1] rotate-[155deg] lg:rotate-0">
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div className="flex items-center lg:gap-4 lg:relative -bottom-10 lg:pr-4">
            <div className="w-28 lg:w-56">
              <img src={Image3} alt="" />
            </div>
            <div className="ml-3 lg:ml-0 flex flex-col items-start justify-between text-sm gap-3 lg:gap-0">
              <p className="text-lg font-medium">Packaging</p>
              <span className="w-3/4">
                Carefully pack your products in ecological packaging
              </span>
            </div>
            <div className="w-32 lg:w-1/3 relative -left-10 -bottom-5 lg:absolute lg:left-64 lg:bottom-0 scale-y-[-1] rotate-[30deg] lg:rotate-0  lg:scale-y-100">
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-6 lg:gap-4 lg:relative -top-10">
            <div className="w-16 lg:w-36">
              <img src={Image4} alt="" />
            </div>
            <div className="w-1/2 lg:w-full flex flex-col items-start justify-between text-sm gap-4 lg:gap-0">
              <p className="text-lg font-medium">Delivery</p>
              <span className="lg:w-3/4">
                We can deliver any products within five business days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkComponent;
