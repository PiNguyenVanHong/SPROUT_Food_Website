import Image1 from "../../public/payment/1.svg";
import Image2 from "../../public/payment/2.svg";
import Image3 from "../../public/payment/3.svg";

import { Controller } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";

interface PaymentMethodProps {
  form: any;
  handleFormatCardNumber: (value: string) => string;
  handleFormatExpirationDate: (value: string) => string;
  handleFormatCVV: (value: string) => string;
}

function PaymentMethod({
  form,
  handleFormatCardNumber,
  handleFormatExpirationDate,
  handleFormatCVV,
}: PaymentMethodProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payment:</h2>
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center justify-between pb-2 border-b-2 border-background-darker cursor-pointer">
                  <div className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="apple-pay" />
                    </FormControl>
                    <FormLabel className="font-medium h-full">Apple Pay</FormLabel>
                  </div>
                  <div className="h-6">
                    <img className="object-contain" src={Image1} alt="" />
                  </div>
                </FormItem>
                <FormItem className="flex items-center justify-between pb-2 border-b-2 border-background-darker cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="paypal" />
                    </FormControl>
                    <FormLabel className="font-medium h-full">PayPal</FormLabel>
                  </div>
                  <div className="h-10">
                    <img className="object-contain" src={Image2} alt="" />
                  </div>
                </FormItem>
                <FormItem className="flex items-center justify-between pb-2 border-b-2 border-background-darker cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="credit-card" />
                    </FormControl>
                    <FormLabel className="font-medium h-full">
                      Credit or debit card
                    </FormLabel>
                  </div>
                  <div className="h-10">
                    <img className="object-contain" src={Image3} alt="" />
                  </div>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.watch("paymentMethod") === "credit-card" && (
        <div className="mt-4 grid grid-cols-8 gap-10 items-center">
          <Controller
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Card number</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder="1234 5678 9012 3456"
                    {...field}
                    value={handleFormatCardNumber(field.value || "")}
                    onChange={(e) => {
                      const formatted = handleFormatCardNumber(e.target.value);
                      e.target.value = formatted;
                      field.onChange(e.target.value.replace(/\s/g, ""));
                    }}
                    maxLength={19}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name="expirationDate"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Expiration date</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder="MM/YY"
                    {...field}
                    value={handleFormatExpirationDate(field.value || "")}
                    onChange={(e) => {
                      const formatted = handleFormatExpirationDate(
                        e.target.value
                      );
                      e.target.value = formatted;
                      field.onChange(formatted);
                    }}
                    maxLength={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>CVV code</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder="123"
                    {...field}
                    value={handleFormatCVV(field.value || "")}
                    onChange={(e) => {
                      const formatted = handleFormatCVV(e.target.value);
                      e.target.value = formatted;
                      field.onChange(formatted);
                    }}
                    maxLength={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;
