import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="px-8 py-3 flex flex-row items-center justify-center gap-2 bg-food-tints-tomato-100 hover:bg-food-tints-tomato-200 disabled:bg-food-tints-tomato-400 disabled:cursor-not-allowed transition-colors rounded-md text-food-light-100 font-poppins font-medium text-sm"
    >
      {children}
    </button>
  );
}
