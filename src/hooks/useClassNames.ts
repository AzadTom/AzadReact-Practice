import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const useClassNames = (...classes: string[]): string => {
  return twMerge(clsx(...classes));
};

export default useClassNames;
