import * as z from "zod";

export const formCheckoutSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
    country: z.string().min(1, "Please select a country"),
    city: z.string().min(1, "Please select a city"),
    street: z.string().min(5, "Street address must be at least 5 characters"),
    postcode: z.string().min(5, "Postcode must be at least 5 characters"),
    packagingType: z.string().min(1, "Please select a packaging type"),
    shippingOption: z.string().min(1, "Please select a shipping option"),
    paymentMethod: z.string().min(1, "Please select a payment method"),
    cardNumber: z
      .string()
      .optional()
      .refine((val) => {
        if (val && val.replace(/\s/g, "").length !== 16) return false;
        return true;
      }, "Card number must be 16 digits"),
    expirationDate: z
      .string()
      .optional()
      .refine((val) => {
        if (val && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(val)) return false;
        return true;
      }, "Expiration date must be in MM/YY format"),
    cvv: z
      .string()
      .optional()
      .refine((val) => {
        if (val && val.length !== 3) return false;
        return true;
      }, "CVV must be 3 digits"),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "credit-card") {
        return data.cardNumber && data.expirationDate;
      }
      return true;
    },
    {
      message:
        "Card number and expiration date are required for credit card payments",
      path: ["paymentMethod"],
    }
  );

export const formLoginSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  birthDate: z.string().min(1, "Birth date is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});
