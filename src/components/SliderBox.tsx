import { ReactNode } from "react";
import Slider, { Settings } from "react-slick";
import { NextArrowSlider } from "./NextArrowSlider";
import { PrevArrowSlider } from "./PrevArrowSlider";

type SliderBoxProps = {
  children: ReactNode;
  slidesToShow: number;
};

export function SliderBox({ children, slidesToShow }: SliderBoxProps) {
  const LIMIT_SLIDES = 3;
  const DEFAULT_SLIDES = 1;

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow:
      slidesToShow > 0 && slidesToShow >= LIMIT_SLIDES
        ? LIMIT_SLIDES
        : DEFAULT_SLIDES,
    slidesToScroll: 1,
    nextArrow: <NextArrowSlider />,
    prevArrow: <PrevArrowSlider />,
  };

  return <Slider {...settings}>{children}</Slider>;
}
