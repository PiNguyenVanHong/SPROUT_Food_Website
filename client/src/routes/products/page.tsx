import { RefreshCcw, X } from "lucide-react";
import { listProduct } from "@/utils/data";

import BreadcrumbCustom from "@/components/custom/breadcrumb-custom";
import CardProduct from "@/components/product/card-product";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AccordionCustom from "@/components/custom/accordion-custom";
import { SliderCustom } from "@/components/custom/slider-custom";
import CommandCustom from "@/components/custom/command-custom";
import FilterMobile from "@/components/filter/filter-mobile";

const links = [
  { id: 1, link: "/", label: "Homepage" },
  { id: 2, link: "/", label: "Dried fruits" },
];

const data = listProduct;

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

function ProductsPage() {
  return (
    <div className="max-w-sm lg:max-w-7xl w-full h-full mx-auto my-6 lg:my-12">
      <div className="flex gap-16">
        <div className="basis-1/4 hidden lg:block">
          <h3 className="text-xl font-semibold">Filter</h3>
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
                    <Checkbox id={item.value.toString()} value={item.value} />
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
                    <Checkbox id={item.value.toString()} value={item.value} />
                    <label
                      htmlFor={item.value.toString()}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                    <span className="text-foreground-green">({item.amount})</span>
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
        <div className="lg:basis-3/4">
          <BreadcrumbCustom key={links[0].id} data={links} />
          <h1 className="ml-6 lg:ml-0 text-2xl lg:text-5xl font-bold lg:tracking-wide">Dried fruits</h1>
          <div className="flex flex-col gap-8 my-10 ml-2 lg:ml-0">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 lg:justify-between text-sm font-medium">
              <p className="hidden lg:block">
                Showed <span>84</span> goods
              </p>
              <div className="lg:hidden w-full flex items-center justify-between px-4 py-2 bg-background-darker rounded-xl">
                <div className="text-lg font-semibold">
                  <FilterMobile/> (<span>2</span>)
                </div>
                <span>Showed 84 goods</span>
              </div>
              <div className="w-full px-4 lg:px-0 lg:w-auto flex items-center gap-8">
                <span className="w-full lg:w-auto text-foreground/60">Sort by</span>
                <div>
                  <Select>
                    <SelectTrigger className="w-40 text-xs font-medium">
                      <SelectValue placeholder="All Products" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Products</SelectItem>
                        <SelectItem value="1">Relevancy</SelectItem>
                        <SelectItem value="2">Blueberry</SelectItem>
                        <SelectItem value="3">Grapes</SelectItem>
                        <SelectItem value="4">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-5 text-sm font-medium">
              <Button className="bg-[#eae7e4] gap-2 hover:bg-[#eae7e4] hover:opacity-80">
                <span className="text-foreground/50">Price:</span>
                <span className="text-foreground">$0 - $20</span>
                <X className="text-foreground" size={16} />
              </Button>
              <Button className="bg-[#eae7e4] gap-2 hover:bg-[#eae7e4] hover:opacity-80">
                <span className="text-foreground/50">Form:</span>
                <span className="text-foreground">On Weight</span>
                <X className="text-foreground" size={16} />
              </Button>
              <Button className="ml-2" variant={"link"}>
                Clear all filters
              </Button>
            </div>
          </div>
          <div className="mt-14 lg:mt-28 grid grid-cols-2 lg:grid-cols-3 items-center justify-between gap-x-0.5 gap-y-8 lg:gap-x-4 lg:gap-y-20">
            {data.map((item, index) => (
              <CardProduct
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                originalPrice={item.originalPrice}
                salePrice={item.salePrice}
                sale={item.sale}
                rating={item.rating}
                weight={item.weight}
              />
            ))}
          </div>
          <div className="text-center my-14 text-sm">
            <Button className="px-24 py-5 bg-transparent text-foreground hover:text-background ring-1 ring-[#eae7e4]">
              <RefreshCcw className="mr-4" size={16} />
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
