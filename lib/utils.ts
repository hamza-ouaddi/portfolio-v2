import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//To validate that the input is a string and doesn't exceed the maximum length
export const contactFormInputValidation = (value: any, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};
