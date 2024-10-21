"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Checkbox } from "@/components/ui/checkbox";
import CommandCustom from "@/components/custom/command-custom";
import { SliderCustom } from "@/components/custom/slider-custom";
import AccordionCustom from "@/components/custom/accordion-custom";

const brands = [
  { label: "Artisana", value: 1 },
  { label: "Barney", value: 2 },
  { label: "Betty Lou's", value: 3 },
  { label: "Dastony", value: 4 },
  { label: "Gopal's", value: 5 },
  { label: "Mighty Sesame", value: 6 },
  { label: "Artisana", value: 7 },
  { label: "Barney", value: 8 },
  { label: "Betty Lou's", value: 9 },
  { label: "Dastony", value: 10 },
  { label: "Gopal's", value: 11 },
  { label: "Mighty Sesame", value: 12 },
];

const forms = [
  { label: "Prepackaged", value: 111 },
  { label: "On weight", value: 21 },
];

const weights = [
  { label: "< 10g", value: 22, amount: 2 },
  { label: "10g - 60g", value: 23, amount: 6 },
  { label: "60g - 200g", value: 24, amount: 22 },
  { label: "> 200g", value: 25, amount: 54 },
];

const FilterMobile = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div className="inline-block" onClick={onOpen}>
        Filter
      </div>
      <Dialog
        open={open}
        as="div"
        className={"relative z-40 lg:hidden"}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            className={
              "relative flex h-full w-full max-w-xs flex-col overflow-y-auto bg-card py-4 pb-6 shadow-xl"
            }
          >
            {/* Close Button */}
            <div className="flex items-center justify-end px-4">
              <button
                className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
                onClick={onClose}
              >
                <X className="dark:text-[#333]" size={15} />
              </button>
            </div>

            {/* Render the filters */}
            <div className="p-4">
              <div className="mt-2">
                <AccordionCustom title="Price">
                  <SliderCustom
                    initialColor="foreground-green"
                    isPrice={true}
                    from={0}
                    to={20}
                    min={0}
                    max={120}
                  />
                  {/* <PriceFilter /> */}
                </AccordionCustom>
              </div>
              <div className="mt-2">
                <AccordionCustom title="Brand">
                  <CommandCustom title="Name of brand" data={brands} />
                </AccordionCustom>
              </div>
              <div className="mt-2">
                <AccordionCustom title="Form">
                  <div className="flex flex-col gap-4">
                    {forms.map((item) => (
                      <div className="flex items-center space-x-6">
                        <Checkbox
                          id={item.value.toString()}
                          value={item.value}
                        />
                        <label
                          htmlFor={item.value.toString()}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionCustom>
              </div>
              <div className="mt-2">
                <AccordionCustom title="Volume">
                  <div className="flex flex-col gap-4">
                    {weights.map((item) => (
                      <div className="flex items-center space-x-6">
                        <Checkbox
                          id={item.value.toString()}
                          value={item.value}
                        />
                        <label
                          htmlFor={item.value.toString()}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item.label}
                        </label>
                        <span className="text-foreground-green">
                          ({item.amount})
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionCustom>
              </div>
              <div className="mt-2">
                <AccordionCustom title="Special features">
                  <div></div>
                </AccordionCustom>
              </div>
              <div className="mt-2">
                <AccordionCustom title="Other items">
                  <div></div>
                </AccordionCustom>
              </div>
              <div className="mt-2">
                <AccordionCustom title="Country">
                  <div></div>
                </AccordionCustom>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default FilterMobile;
