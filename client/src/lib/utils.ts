import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCardNumber = (value: string) => {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  return parts.length ? parts.join(" ") : value;
};

export const formatExpirationDate = (value: string) => {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  return v.length >= 2 ? `${v.slice(0, 2)}/${v.slice(2, 4)}` : v;
};

export const formatCVV = (value: string) => {
  return value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .slice(0, 3);
};
