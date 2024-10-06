import Logo from "@/assets/logo.png";
import Image1 from "@/assets/products/beans/1.svg";
import Image2 from "@/assets/products/beans/2.png";
import Image3 from "@/assets/products/beans/3.svg";
import Image4 from "@/assets/products/beans/4.svg";
import Image5 from "@/assets/products/beans/5.svg";

import {
  AlignJustify,
  BadgeCent,
  ChevronDown,
  Grip,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchBar from "@/components/search-bar";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./cart/cart-item";
import { useState } from "react";
import LoginForm from "./auth/login-form";

const orderItems = [
  {
    id: 1,
    name: "Jerky persimmon",
    quantity: 1,
    price: 8.6,
    image: Image3,
  },
  {
    id: 2,
    name: "Macadamia in the shell",
    quantity: 2,
    price: 28.0,
    image: Image5,
  },
  {
    id: 3,
    name: "Spiced nuts",
    quantity: 1,
    price: 7.2,
    image: Image4,
  },
  {
    id: 1,
    name: "Banana",
    quantity: 4,
    price: 5.7,
    image: Image1,
  },
  {
    id: 1,
    name: "Premium kiwifruit",
    quantity: 1,
    price: 4.0,
    image: Image2,
  },
  {
    id: 1,
    name: "Orange",
    quantity: 2,
    price: 6.8,
    image: Image4,
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(!isOpen);
    navigate("/checkout");
  };

  return (
    <header className="w-full mx-auto py-4 px-2 lg:px-8 flex items-center justify-between text-xs font-medium">
      <div className="flex items-center justify-between lg:justify-normal lg:gap-8 flex-1 mr-5 pr-5 border-r-2 border-background-darker lg:mr-0 lg:pr-0 lg:border-r-0 lg:border-none lg:flex-none">
        <Link to={"/"}>
          <img
            className="lg:w-24 w-20 relative -top-0.5"
            src={Logo}
            alt="Logo Website"
          />
        </Link>
        <div>
          <SearchBar />
        </div>
        <Link to={"/products"} className="hidden lg:flex items-center gap-3">
          <Grip size={20} />
          <span className="font-medium text-sm">Categories</span>
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex items-center gap-2">
          <BadgeCent size={18} />
          <span>Bonus: 15%</span>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex items-center gap-4 hover:bg-white transition-all p-2 rounded-md cursor-pointer">
              <UserRound size={18} />
              <span className="inline-flex items-center gap-2">
                PiKayQi
                <ChevronDown size={10} />
              </span>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-4xl bg-white p-0">
            <LoginForm />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button className="bg-white" variant={"outline"}>
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} />
                <span className="block">Cart: 6</span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 pl-6 pr-1 mr-8 flex flex-col justify-between gap-4 rounded-3xl top-2">
            <h4 className="font-medium leading-none">My shopping cart</h4>
            <ScrollArea className="w-full h-96 pr-4">
              <div className="grid gap-4">
                <div className="flex flex-col">
                  {orderItems.map((item, i) => (
                    <CartItem
                      key={i}
                      name={item.name}
                      quantity={item.quantity}
                      price={item.price}
                      image={item.image}
                      isPopup={true}
                    />
                  ))}
                </div>
              </div>
            </ScrollArea>
            <div className="flex flex-col space-y-4 pr-4">
              <div className="flex items-center justify-between font-medium">
                <span>Subtotal:</span>
                <span>$72.00</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full"
                variant={"green"}
              >
                To checkout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex lg:hidden items-center gap-8">
        <div className="">
          <UserRound size={24} />
        </div>
        <div>
          <ShoppingBag size={24} />
        </div>
        <div>
          <AlignJustify size={24} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
