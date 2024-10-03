import Image1 from "../../../public/rating/1.png";
import Image2 from "../../../public/rating/2.png";
import Image3 from "../../../public/rating/3.png";
import Image4 from "../../../public/rating/4.png";
import Image5 from "../../../public/rating/5.png";

import { BadgeCheck, ChevronLeft, Plus } from "lucide-react";
import { useLoaderData } from "react-router-dom";

import AccordionCustom from "@/components/custom/accordion-custom";
import BreadcrumbCustom from "@/components/custom/breadcrumb-custom";
import NumberInput from "@/components/custom/number-input";
import CustomersReview from "@/components/review/customers-review";
import { Button } from "@/components/ui/button";
import CardProduct from "@/components/product/card-product";
import { beans } from "@/utils/data";

const links = [
  { label: "Homepage", link: "/" },
  { label: "Dried fruits", link: "/" },
  { label: "Seedless red dried plums", link: "/" },
];

function ProductDetailPage() {
  const { data }: any = useLoaderData();

  return (
    <div className="max-w-7xl w-full h-full mx-auto my-12">
      <div className="flex gap-10">
        <div className="basis-1/2">
          <BreadcrumbCustom data={links} />
          <Button variant={"link"}>
            <ChevronLeft className="mr-3" size={18} />
            <span>To Dried fruits</span>
          </Button>
        </div>
        <div className="basis-1/2">
          <h1 className="w-96 text-4xl font-semibold">
            Gold apricots Jumbo Limited edition
          </h1>
        </div>
      </div>
      <div className="flex gap-10 border-b-2 border-background-darker pb-20">
        <div className="basis-1/2 flex flex-col items-center">
          <div className="w-96">
            <img src="../public/products/fruits/2.svg" alt="" />
          </div>
          <CustomersReview />
        </div>
        <div className="basis-1/2 flex flex-col items-start gap-4 mt-4">
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-8 text-foreground-green px-3 py-2 border border-background-draker rounded-lg">
              <span>In stock</span>
              <BadgeCheck size={16} />
            </div>
            <div className="text-muted-foreground tracking-wide">
              Delivery:
              <span className="ml-2">1-3 business days</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 font-medium mt-2">
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
          <div className="w-full flex mt-6 p-8 items-center gap-8 bg-white rounded-xl shadow-md">
            <div className="space-y-3 flex-1">
              <div className="font-semibold text-lg">Total: $ 17.09</div>
              <div className="text-muted-foreground/70 font-medium text-sm">
                $ 5.40 &nbsp; / 500g
              </div>
            </div>
            <div>
              <NumberInput min={0} max={100} step={1} value={10} />
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
      <div className="flex flex-col gap-24 my-14">
        <h2 className="text-xl font-semibold">People also like</h2>
        <div className="grid grid-cols-4 items-stretch gap-6">
          {beans.map(
            (item, index) =>
              index < beans.length - 1 && (
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
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
