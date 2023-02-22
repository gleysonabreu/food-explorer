import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="bg-food-dark-900 rounded-lg h-12 px-4 py-3 placeholder:text-food-light-500 outline-none text-food-light-100"
    />
  );
}
