import { CaretRight } from "phosphor-react";
import { CustomArrowProps } from "react-slick";

export function PrevArrowSlider({ onClick }: CustomArrowProps) {
  return (
    <div className="text-food-light-300 matrix-caret-left w-56 transform-[matrix(-1, 0, 0, 1, 0, 0)] z-20 h-full top-0 left-0 absolute flex items-center justify-end bg-gradient-food-caret-right">
      <button onClick={onClick}>
        <CaretRight size={32} />
      </button>
    </div>
  );
}
