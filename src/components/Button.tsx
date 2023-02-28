import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isFull?: boolean;
};
export function Button({ children, isFull, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "px-8 py-3 flex flex-row items-center justify-center gap-2 bg-food-tints-tomato-100 hover:bg-food-tints-tomato-200 disabled:bg-food-tints-tomato-400 disabled:cursor-not-allowed transition-colors rounded-md text-food-light-100 font-poppins font-medium text-sm focus:outline-none focus:ring-2 focus:ring-food-tints-tomato-100 focus:ring-offset-2 focus:ring-offset-food-dark-400",
        {
          "w-full": isFull,
        }
      )}
    >
      {children}
    </button>
  );
}
