import { CustomArrowProps } from "react-slick";
import { CaretRight } from "./Icons/CaretRight";

export function PrevArrowSlider({ onClick }: CustomArrowProps) {
  return (
    <div className="matrix-caret-left w-56 transform-[matrix(-1, 0, 0, 1, 0, 0)] z-20 h-full top-0 left-0 absolute flex items-center justify-end bg-gradient-food-caret-right">
      <button onClick={onClick}>
        <CaretRight />
      </button>
    </div>
  );
}
