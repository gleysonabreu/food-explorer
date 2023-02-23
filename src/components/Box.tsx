import { Food, FoodProps } from "./Food";
import { SliderBox } from "./SliderBox";

type BoxProps = {
  title: string;
  foods: FoodProps[];
};

export function Box({ title, foods }: BoxProps) {
  const slidesToShow = foods.length;

  return (
    <section className="w-full flex flex-col gap-6">
      <h1 className="text-food-light-300 text-3xl font-poppins font-normal">
        {title}
      </h1>

      <div className="w-full relative">
        <SliderBox slidesToShow={slidesToShow}>
          {foods.map((food) => (
            <Food key={food.id} {...food} />
          ))}
        </SliderBox>
      </div>
    </section>
  );
}
