import Image1 from "../../public/products/beans/1.svg";
import Image2 from "../../public/products/beans/2.png";
import Image3 from "../../public/products/beans/3.svg";
import Image4 from "../../public/products/beans/4.svg";
import Image5 from "../../public/products/beans/5.svg";

import { ProductType } from "@/utils/types";

export const fruits: ProductType[] = [
  {
    id: 1,
    name: "Blackberry bluestem",
    image: "./products/fruits/1.svg",
    rating: 5,
    originalPrice: 6.0,
    salePrice: 4.0,
    sale: true,
    weight: 500,
  },
  {
    id: 2,
    name: "Blueberries",
    image: "./products/fruits/2.svg",
    rating: 4.9,
    originalPrice: 11.8,
    salePrice: 9.8,
    sale: true,
    weight: 500,
  },
  {
    id: 3,
    name: "White grapes muscat",
    image: "./products/fruits/3.svg",
    rating: 4.9,
    originalPrice: 9.8,
    salePrice: 6.8,
    sale: true,
    weight: 500,
  },
  {
    id: 4,
    name: "Yellow buckthorn",
    image: "./products/fruits/4.svg",
    rating: 4.5,
    originalPrice: 10.0,
    salePrice: 8.0,
    sale: true,
    weight: 300,
  },
  {
    id: 5,
    name: "Raspberry",
    image: "./products/fruits/5.svg",
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
      image: Image1,
      rating: 4.9,
      originalPrice: 12.50,
      salePrice: 0,
      sale: false,
      weight: 500,
    },
    {
      id: 2,
      name: "Assorted: black, red, spotty and string beans",
      image: Image2,
      rating: 5,
      originalPrice: 8.90,
      salePrice: 0,
      sale: false,
      weight: 500,
    },
    {
      id: 3,
      name: "Red beans",
      image: Image3,
      rating: 5,
      originalPrice: 6.70,
      salePrice: 0,
      sale: false,
      weight: 500,
    },
    {
      id: 4,
      name: "Roasted peeled pistachios",
      image: Image4,
      rating: 4.9,
      originalPrice: 9.3,
      salePrice: 0,
      sale: false,
      weight: 500,
    },
    {
      id: 5,
      name: "Sunflower seeds",
      image: Image5,
      rating: 4.8,
      originalPrice: 12.0,
      salePrice: 0,
      sale: false,
      weight: 400,
    },
  ];