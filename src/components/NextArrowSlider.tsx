import { CaretRight } from "phosphor-react";
import { CustomArrowProps } from "react-slick";

export function NextArrowSlider({ onClick }: CustomArrowProps) {
  return (
    <div className="text-food-light-300 w-56 z-20 h-full top-0 right-0 absolute flex items-center justify-end bg-gradient-food-caret-right">
      <button onClick={onClick}>
        <CaretRight size={32} />
      </button>
    </div>
  );
}
