import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="w-full bg-food-dark-900 rounded-lg h-12 px-4 py-3 placeholder:text-food-light-500 text-food-light-100 focus:outline-none focus:ring-2 focus:ring-food-tints-cake-200 focus:ring-offset-2 focus:ring-offset-food-dark-400"
    />
  );
}
