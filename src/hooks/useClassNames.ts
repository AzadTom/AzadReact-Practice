import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

const useClassNames = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};

export default useClassNames;

export const cn= (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};


