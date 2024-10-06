import Image1 from "@/assets/rating/1.png";
import Image2 from "@/assets/rating/2.png";
import Image3 from "@/assets/rating/3.png";
import Image4 from "@/assets/rating/4.png";
import Image5 from "@/assets/rating/5.png";

import { BadgeCheck, ChevronLeft, Plus } from "lucide-react";
// import { useLoaderData } from "react-router-dom";

import AccordionCustom from "@/components/custom/accordion-custom";
import BreadcrumbCustom from "@/components/custom/breadcrumb-custom";
import NumberInput from "@/components/custom/number-input";
import CustomersReview from "@/components/review/customers-review";
import { Button } from "@/components/ui/button";
import { beans } from "@/utils/data";
import CarouselProduct from "@/components/product/carousel-product";
import { formatNumber } from "@/utils/format";

const links = [
  { label: "Homepage", link: "/" },
  { label: "Dried fruits", link: "/" },
  { label: "Seedless red dried plums", link: "/" },
];

function ProductDetailPage() {
  // const { data }: any = useLoaderData();

  return (
    <div className="max-w-sm lg:max-w-7xl w-full h-full mx-auto my-6 lg:my-12">
      <div className="flex flex-col lg:flex-row gap-10 pl-4 lg:pl-0">
        <div className="basis-1/2">
          <BreadcrumbCustom data={links} />
          <Button className="p-0" variant={"link"}>
            <ChevronLeft className="mr-3" size={18} />
            <span>To Dried fruits</span>
          </Button>
        </div>
        <div className="basis-1/2">
          <h1 className="w-full lg:w-96 text-2xl lg:text-4xl font-semibold">
            Gold apricots Jumbo Limited edition
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 border-b-2 border-background-darker pl-4 lg:pl-0 pb-0 lg:pb-20">
        <div className="order-last lg:order-first basis-1/2 flex flex-col items-center">
          <div className="hidden lg:block w-96">
            <img src="../public/products/fruits/2.svg" alt="" />
          </div>
          <CustomersReview />
        </div>
        <div className="order-1 basis-1/2 flex flex-col items-center lg:items-start gap-4 mt-4">
          <div className="block lg:hidden w-72">
            <img src="../public/products/fruits/2.svg" alt="" />
          </div>
          <div className=" mx-4 lg:mx-0 w-full flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-4 lg:gap-8 text-foreground-green px-3 py-2 border border-background-draker rounded-lg">
              <span>In stock</span>
              <BadgeCheck size={16} />
            </div>
            <div className="text-muted-foreground tracking-wide">
              Delivery:
              <span className="ml-2">1-3 business days</span>
            </div>
          </div>
          <div className=" mx-4 lg:mx-0 w-full flex flex-col items-start gap-3 font-medium mt-2">
            <div className="space-x-12 flex items-center">
              <div className="w-24 text-muted-foreground text-sm">
                Composition:
              </div>
              <div>Natural apricot</div>
            </div>
            <div className="space-x-12 flex items-center">
              <div className="w-24 text-muted-foreground text-sm ml-auto">
                Country:
              </div>
              <div>Turkey</div>
            </div>
            <div className="space-x-12 flex items-center">
              <div className="w-24 text-muted-foreground text-sm">Brand:</div>
              <div>Jumbo</div>
            </div>
          </div>
          <div className="fixed left-0 z-20 bottom-0 lg:static w-full flex mt-6 p-4 lg:p-8 items-center gap-8 bg-white lg:rounded-xl shadow-md">
            <div className="space-y-1 flex-1">
              <div className="font-semibold text-lg">Total: {formatNumber(5.4, true)}</div>
              <div className="text-muted-foreground/70 font-medium text-sm">
                $ 5.40 &nbsp; / 500g
              </div>
            </div>
            <div className="hidden lg:block">
              <NumberInput min={500} max={10000} step={500} value={500} />
            </div>
            <Button className="p-6" variant={"green"}>
              <span>Add to cart</span>
              <Plus size={16} />
            </Button>
          </div>
          <div className="mt-4 space-y-4 text-foreground/80 font-normal">
            <h1 className="text-xl font-semibold text-foreground">
              Description:
            </h1>
            <div>
              Dried apricots are an important source of carotenoids (vitamin A)
              and potassium. Because of their high fiber-to-volume ratio, they
              are sometimes used to relieve constipation.
            </div>
            <div>
              Fibre in apricots normalizes the gastrointestinal tract, saves
              from constipation, promotes the removal of toxins and impurities,
              cleaning the liver.
            </div>
            <div>
              Dried apricots normally do not have any sugar added and have a low
              glycemic index. The maximum moisture rate allowed in Turkey is
              25%.
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-14">
              <img className="object-contain" src={Image1} alt="" />
            </div>
            <div className="w-12">
              <img className="object-contain" src={Image2} alt="" />
            </div>
            <div className="w-12">
              <img className="object-contain" src={Image3} alt="" />
            </div>
            <div className="w-14">
              <img className="object-contain" src={Image4} alt="" />
            </div>
            <div className="w-14">
              <img className="object-contain" src={Image5} alt="" />
            </div>
          </div>
          <div className="mt-4 w-full">
            <AccordionCustom title="Nutritional value:">
              <div></div>
            </AccordionCustom>
            <AccordionCustom title="Vitamins">
              <div></div>
            </AccordionCustom>
            <AccordionCustom title="Minerals">
              <div></div>
            </AccordionCustom>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pl-4 lg:ml-0 mt-14 lg:my-14">
        <h2 className="text-xl font-semibold">People also like</h2>
        <CarouselProduct
          products={beans}
        />
      </div>
    </div>
  );
}

export default ProductDetailPage;
