import Slider, { Settings } from "react-slick";
import { Food, FoodProps } from "./Food";
import { NextArrowSlider } from "./NextArrowSlider";
import { PrevArrowSlider } from "./PrevArrowSlider";

type BoxProps = {
  title: string;
  foods: FoodProps[];
};

export function Box({ title, foods }: BoxProps) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: foods.length > 0 && foods.length >= 3 ? 3 : 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowSlider />,
    prevArrow: <PrevArrowSlider />,
  };

  return (
    <section className="w-full flex flex-col gap-6">
      <h1 className="text-food-light-300 text-3xl font-poppins font-normal">
        {title}
      </h1>

      <div className="w-full relative">
        <Slider {...settings}>
          {foods.map((food) => (
            <Food key={food.id} {...food} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
