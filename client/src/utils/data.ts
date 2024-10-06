import Bean1 from "@/assets/products/beans/1.svg";
import Bean2 from "@/assets/products/beans/2.png";
import Bean3 from "@/assets/products/beans/3.svg";
import Bean4 from "@/assets/products/beans/4.svg";
import Bean5 from "@/assets/products/beans/5.svg";

import Fruit1 from "@/assets/products/fruits/1.svg";
import Fruit2 from "@/assets/products/fruits/2.svg";
import Fruit3 from "@/assets/products/fruits/3.svg";
import Fruit4 from "@/assets/products/fruits/4.svg";
import Fruit5 from "@/assets/products/fruits/5.svg";

import Image1 from "@/assets/products/seeds/1.png";
import Image2 from "@/assets/products/seeds/2.png";
import Image3 from "@/assets/products/seeds/3.png";
import Image4 from "@/assets/products/seeds/4.png";
import Image5 from "@/assets/products/seeds/5.png";
import Image6 from "@/assets/products/seeds/6.png";
import Image7 from "@/assets/products/seeds/7.png";
import Image8 from "@/assets/products/seeds/8.png";
import Image9 from "@/assets/products/seeds/9.png";
import Image10 from "@/assets/products/seeds/10.png";
import Image11 from "@/assets/products/seeds/11.png";
import Image12 from "@/assets/products/seeds/12.png";
// import Image13 from "@/assets/products/seeds/13.png";

import { ProductType } from "@/utils/types";

export const fruits: ProductType[] = [
  {
    id: 1,
    name: "Blackberry bluestem",
    image: Fruit1,
    rating: 5,
    originalPrice: 6.0,
    salePrice: 4.0,
    sale: true,
    weight: 500,
  },
  {
    id: 2,
    name: "Blueberries",
    image: Fruit2,
    rating: 4.9,
    originalPrice: 11.8,
    salePrice: 9.8,
    sale: true,
    weight: 500,
  },
  {
    id: 3,
    name: "White grapes muscat",
    image: Fruit3,
    rating: 4.9,
    originalPrice: 9.8,
    salePrice: 6.8,
    sale: true,
    weight: 500,
  },
  {
    id: 4,
    name: "Yellow buckthorn",
    image: Fruit4,
    rating: 4.5,
    originalPrice: 10.0,
    salePrice: 8.0,
    sale: true,
    weight: 300,
  },
  {
    id: 5,
    name: "Raspberry",
    image: Fruit5,
    rating: 4.8,
    originalPrice: 12.0,
    salePrice: 10.0,
    sale: true,
    weight: 400,
  },
];

export const beans: ProductType[] = [
  {
    id: 1,
    name: "Black beans",
    image: Bean1,
    rating: 4.9,
    originalPrice: 12.5,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 2,
    name: "Assorted: black, red, spotty and string beans",
    image: Bean2,
    rating: 5,
    originalPrice: 8.9,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 3,
    name: "Red beans",
    image: Bean3,
    rating: 5,
    originalPrice: 6.7,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 4,
    name: "Roasted peeled pistachios",
    image: Bean4,
    rating: 4.9,
    originalPrice: 9.3,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 5,
    name: "Sunflower seeds",
    image: Bean5,
    rating: 4.8,
    originalPrice: 12.0,
    salePrice: 0,
    sale: false,
    weight: 400,
  },
];

export const listProduct: ProductType[] = [
  {
    id: 1,
    name: "Seedless prune",
    image: Image1,
    rating: 5,
    originalPrice: 3,
    salePrice: 2,
    sale: true,
    weight: 500,
  },
  {
    id: 2,
    name: "Raisins from red grapes Extra series",
    image: Image2,
    rating: 5,
    originalPrice: 4,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 3,
    name: "Seedless red dried plums",
    image: Image3,
    rating: 4.9,
    originalPrice: 10.80,
    salePrice: 9.80,
    sale: true,
    weight: 500,
  },
  {
    id: 4,
    name: "Chocolate apricots",
    image: Image4,
    rating: 4.8,
    originalPrice: 2.60,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 5,
    name: "red apricots",
    image: Image5,
    rating: 4.8,
    originalPrice: 2.10,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 6,
    name: "Gold apricots Jumbo Limited edition",
    image: Image6,
    rating: 4.9,
    originalPrice: 5.4,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 7,
    name: "Natural mango King size",
    image: Image7,
    rating: 4.5,
    originalPrice: 14.00,
    salePrice: 12,
    sale: true,
    weight: 500,
  },
  {
    id: 8,
    name: "Dried mini-pineapple sliced pieces",
    image: Image8,
    rating: 4.4,
    originalPrice: 9.00,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 9,
    name: "White adriatic figs",
    image: Image9,
    rating: 4.4,
    originalPrice: 4.5,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 10,
    name: "Whole pear",
    image: Image10,
    rating: 4.4,
    originalPrice: 8.90,
    salePrice: 0,
    sale: false,
    weight: 500,
  },
  {
    id: 11,
    name: "Seedless apple halves Granny Smith",
    image: Image11,
    rating: 4.3,
    originalPrice: 5.20,
    salePrice: 3.20,
    sale: true,
    weight: 500,
  },
  {
    id: 5,
    name: "Macadamia in the shell",
    image: Image12,
    rating: 4.3,
    originalPrice: 7,
    salePrice: 0,
    sale: false,
    weight: 500,
  },  
];