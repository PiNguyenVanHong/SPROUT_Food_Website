import { BriefcaseBusiness } from "lucide-react";

function WorkComponent() {
  return (
    <div className="my-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-start my-6">
        <div className="flex items-center gap-4">
          <BriefcaseBusiness size={32} />
          <h1 className="text-3xl font-semibold">How we work</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-between mt-10 py-10 gap-12 lg:gap-0">
          <div className="flex items-center lg:gap-2 lg:relative -bottom-10 lg:pr-8">
            <div className="w-20 lg:w-1/2">
              <img src="./work/1.svg" alt="" />
            </div>
            <div className="ml-3 lg:ml-0 flex flex-col items-start justify-between text-sm gap-3 lg:gap-0">
              <p className="text-lg font-medium">Gathering</p>
              <span className="w-3/4">
                Picking fresh plants from all over the world
              </span>
            </div>
            <div className="w-1/4 lg:w-1/3 relative -left-10 -bottom-5 lg:absolute lg:left-64 lg:bottom-0 scale-y-[-1] rotate-[30deg] lg:rotate-0  lg:scale-y-100">
              <img src="./work/arrow.svg" alt="" />
            </div>
          </div>
          <div className="flex items-center lg:gap-2 lg:relative -top-10 lg:pr-8">
            <div className="w-28 lg:w-1/2">
              <img src="./work/2.svg" alt="" />
            </div>
            <div className="ml-5 lg:ml-0 flex flex-col items-start justify-between text-sm gap-3 lg:gap-0">
              <p className="text-lg font-medium">Transportation</p>
              <span className="w-3/4">
                Select the best and transport it to our bases
              </span>
            </div>
            <div className="-order-last lg:order-last w-1/4 lg:w-1/3 relative -bottom-10 lg:absolute lg:-right-10 lg:bottom-6 lg:scale-y-[-1] rotate-[155deg] lg:rotate-0">
              <img src="./work/arrow.svg" alt="" />
            </div>
          </div>
          <div className="flex items-center lg:gap-2 lg:relative -bottom-10 lg:pr-8">
            <div className="w-28 lg:w-1/2">
              <img src="./work/3.svg" alt="" />
            </div>
            <div className="ml-3 lg:ml-0 flex flex-col items-start justify-between text-sm gap-3 lg:gap-0">
              <p className="text-lg font-medium">Packaging</p>
              <span className="w-3/4">
                Carefully pack your products in ecological packaging
              </span>
            </div>
            <div className="w-1/4 lg:w-1/3 relative -left-10 -bottom-5 lg:absolute lg:left-64 lg:bottom-0 scale-y-[-1] rotate-[30deg] lg:rotate-0  lg:scale-y-100">
              <img src="./work/arrow.svg" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-6 lg:gap-2 lg:relative -top-10 lg:pr-8">
            <div className="w-24 lg:w-1/2">
              <img src="./work/4.svg" alt="" />
            </div>
            <div className="w-1/3 lg:w-full flex flex-col items-start justify-between text-sm gap-4 lg:gap-0">
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
