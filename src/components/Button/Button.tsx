import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../hooks/useClassNames";



const buttonVarients = cva("hover:bg-white hover:border-white", {
  variants: {
    varient: {
      default: "bg-black",
      outline: "border border-black",
    },
    size: {
      default: "px-4 py-2 rounded",
      sm: "px-2 py-2 rounded",
    },
  },
  defaultVariants: {
    varient: "default",
    size: "default",
  },
});

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVarients> {}

const Button:FC<IButtonProps> = ({ className,size,varient,...props}) => {
  return <button className={cn(buttonVarients({varient,size,className}))} {...props}/>;
};

export { Button, buttonVarients};
