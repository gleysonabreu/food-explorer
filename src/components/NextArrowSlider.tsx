import { CustomArrowProps } from "react-slick";
import { CaretRight } from "./Icons/CaretRight";

export function NextArrowSlider({ onClick }: CustomArrowProps) {
  return (
    <div className="w-56 z-50 h-full top-0 right-0 absolute flex items-center justify-end bg-gradient-food-caret-right">
      <button onClick={onClick}>
        <CaretRight />
      </button>
    </div>
  );
}
