"use client";

import * as z from "zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@/hooks/use-modal-store";
import { formCheckoutModalSchema } from "@/utils/form-schema";
import { formatNumberPhone } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DeliveryAddressModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === "delivery-address-form";

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const form = useForm<z.infer<typeof formCheckoutModalSchema>>({
    resolver: zodResolver(formCheckoutModalSchema),
    defaultValues: {
      firstName: data?.checkoutForm?.firstName || "",
      lastName: data?.checkoutForm?.lastName || "",
      phone: data?.checkoutForm?.phone || "",
      email: data?.checkoutForm?.email || "",
      street: data?.checkoutForm?.street || "",
      postcode: data?.checkoutForm?.postcode || "",
      country: data?.checkoutForm?.country || "uk",
      city: data?.checkoutForm?.city || "london",
      packagingType: data?.checkoutForm?.packagingType || "without-plastic",
      shippingOption: data?.checkoutForm?.shippingOption || "by-courier",
    },
  });

  const handleFormatNumberPhone = useCallback((value: string) => {
    return formatNumberPhone(value);
  }, []);

  const onSubmit = (values: z.infer<typeof formCheckoutModalSchema>) => {
    data.checkoutForm = values;
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-sm rounded-lg bg-white text-black p-0 pb-4 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold px-8 pt-5">
            Delivery Address
          </DialogTitle>
        </DialogHeader>
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="h-full flex flex-col justify-between"
              >
                <Tabs defaultValue="account" className="w-full px-4">
                  <div className="w-full px-10 mb-4">
                    <TabsList className="w-full">
                      <TabsTrigger value="account">Personal Info</TabsTrigger>
                      <TabsTrigger value="password">
                        Delivery Detail
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="account">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                                placeholder="+84 234 567 890"
                                {...field}
                                value={handleFormatNumberPhone(
                                  field.value || ""
                                )}
                                onChange={(e) => {
                                  const formatted = handleFormatNumberPhone(
                                    e.target.value
                                  );
                                  e.target.value = formatted;
                                  field.onChange(
                                    e.target.value.replace(/\D/g, "")
                                  );
                                }}
                                maxLength={12}
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
                  </TabsContent>
                  <TabsContent value="password">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                                <SelectItem value="gift-wrap">
                                  Gift wrap
                                </SelectItem>
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
                  </TabsContent>
                </Tabs>
                <div className="w-full flex justify-end pr-4">
                  <Button className="w-28 mt-4" type="submit" variant="green">
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryAddressModal;
