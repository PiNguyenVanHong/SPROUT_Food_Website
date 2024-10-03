import Image1 from "../../../public/products/beans/1.svg";
import Image2 from "../../../public/products/beans/2.png";
import Image3 from "../../../public/products/beans/3.svg";
import Image4 from "../../../public/products/beans/4.svg";
import Image5 from "../../../public/products/beans/5.svg";

import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BreadcrumbCustom from "@/components/custom/breadcrumb-custom";
import { formatCardNumber, formatCVV, formatExpirationDate } from "@/lib/utils";
import PaymentMethod from "@/components/payment-method";
import { formCheckoutSchema } from "@/utils/form-schema";
import CartItem from "@/components/cart/cart-item";

const links = [
  { label: "Homepage", link: "/" },
  { label: "Checkout", link: "/" },
];

const orderItems = [
  {
    id: "1",
    name: "Jerky persimmon",
    quantity: 1,
    price: 8.6,
    image: Image3,
  },
  {
    id: "2",
    name: "Macadamia in the shell",
    quantity: 2,
    price: 28.0,
    image: Image5,
  },
  {
    id: "3",
    name: "Spiced nuts",
    quantity: 1,
    price: 7.2,
    image: Image4,
  },
  {
    id: "4",
    name: "Banana",
    quantity: 4,
    price: 5.7,
    image: Image1,
  },
  {
    id: "5",
    name: "Premium kiwifruit",
    quantity: 1,
    price: 4.0,
    image: Image2,
  },
  {
    id: "6",
    name: "Orange",
    quantity: 2,
    price: 6.8,
    image: Image4,
  },
];

function CheckoutPage() {
  const [items, setItems] = useState(orderItems);

  const form = useForm<z.infer<typeof formCheckoutSchema>>({
    resolver: zodResolver(formCheckoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      street: "",
      postcode: "",
      country: "uk",
      city: "london",
      packagingType: "without-plastic",
      shippingOption: "by-courier",
      paymentMethod: "credit-card",
    },
  });

  function onSubmit(values: z.infer<typeof formCheckoutSchema>) {
    console.log(values);
  }

  const handleFormatCardNumber = useCallback((value: string) => {
    return formatCardNumber(value);
  }, []);

  const handleFormatExpirationDate = useCallback((value: string) => {
    return formatExpirationDate(value);
  }, []);

  const handleFormatCVV = useCallback((value: string) => {
    return formatCVV(value);
  }, []);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const delivery = 8.2;
  const total = subtotal + delivery;

  return (
    <div className="max-w-7xl w-full h-full mx-auto mt-12 mb-24">
      <div className="w-full">
        <BreadcrumbCustom key={links[0].label} data={links} />
        <h1 className="text-4xl font-semibold">Checkout</h1>
      </div>

      <div className="flex flex-col md:flex-row mt-12">
        <div className="basis-8/12 pr-20">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="h-full flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  Personal information:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          First name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="John"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Last name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Doe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="+1 234 567 890"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="john.doe@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  Delivery details:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Country / Region
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="uk">
                              United Kingdom (UK)
                            </SelectItem>
                            <SelectItem value="us">
                              United States (US)
                            </SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Town / City
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Select a city" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="london">London</SelectItem>
                            <SelectItem value="manchester">
                              Manchester
                            </SelectItem>
                            <SelectItem value="birmingham">
                              Birmingham
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Street
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="123 Main St"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Postcode
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="SW1A 1AA"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="packagingType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Packaging type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Select packaging" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="without-plastic">
                              Without plastic
                            </SelectItem>
                            <SelectItem value="minimal-packaging">
                              Minimal packaging
                            </SelectItem>
                            <SelectItem value="gift-wrap">Gift wrap</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shippingOption"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground/80">
                          Shipping option
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Select shipping" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="by-courier">
                              By courier
                            </SelectItem>
                            <SelectItem value="standard-delivery">
                              Standard delivery
                            </SelectItem>
                            <SelectItem value="express-delivery">
                              Express delivery
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <PaymentMethod
                form={form}
                handleFormatCVV={handleFormatCVV}
                handleFormatCardNumber={handleFormatCardNumber}
                handleFormatExpirationDate={handleFormatExpirationDate}
              />
            </form>
          </Form>
        </div>
        <div className="basis-4/12 space-y-10">
          <div className="bg-gray-100 rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">Your order:</h2>
            <div className="flex flex-col items-center gap-2 text-foreground/70 pb-4 border-b-2">
              <div className="w-full flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="w-full flex justify-between">
                <span>Delivery:</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full py-6"
            onClick={form.handleSubmit(onSubmit)}
            variant={"green"}
          >
            Purchase
          </Button>
          <div className="">
            {items.map((item, index) => (
             <CartItem key={index} name={item.name} quantity={item.quantity} price={item.price} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
