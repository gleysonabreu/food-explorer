"use client";
import { Food } from "@/components/Food";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CaretRight } from "@/components/Icons/CaretRight";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import foodPNG from "../../public/food-banner.png";
import food1 from "../../public/food1.png";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="w-56 z-50 h-full top-0 right-0 absolute flex items-center justify-end bg-gradient-food-caret-right">
      <button onClick={onClick}>
        <CaretRight />
      </button>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="matrix-caret-left w-56 transform-[matrix(-1, 0, 0, 1, 0, 0)] z-50 h-full top-0 left-0 absolute flex items-center justify-end bg-gradient-food-caret-right">
      <button onClick={onClick}>
        <CaretRight />
      </button>
    </div>
  );
}

export default function Home() {
  const foods = [
    {
      id: "cuid",
      foodImage: food1.src,
      foodName: "Salad Ravanello",
      foodDescription:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 50.0,
      amount: 10,
    },
    {
      id: "cuid1",
      foodImage: food1.src,
      foodName: "Salad Ravanello",
      foodDescription:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 50.0,
      amount: 10,
    },
    {
      id: "cuid2",
      foodImage: food1.src,
      foodName: "Salad Ravanello",
      foodDescription:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 50.0,
      amount: 10,
    },
    {
      id: "cuid4",
      foodImage: food1.src,
      foodName: "Salad Ravanello",
      foodDescription:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 50.0,
      amount: 10,
    },
  ];

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: foods.length > 0 && foods.length >= 3 ? 3 : 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <main className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="px-32 mt-44 flex flex-col gap-16">
        <div className="w-full relative bg-gradient-food-200 h-64 rounded-lg text-food-light-300 flex items-center justify-center gap-3">
          <Image
            src={foodPNG.src}
            alt="Foods"
            width={656}
            height={412}
            className="-mt-32 -ml-44"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl leading-[140%] font-normal font-poppins">
              Unparalleled flavors
            </h1>
            <span className="text-base leading-[100%]">
              Feel the care of the preparation with selected ingredients
            </span>
          </div>
        </div>

        <section className="w-full flex flex-col gap-6">
          <h1 className="text-food-light-300 text-3xl font-poppins font-normal">
            Meals
          </h1>

          <div className="w-full relative">
            <Slider {...settings}>
              {foods.map((food) => (
                <Food key={food.id} {...food} />
              ))}
            </Slider>
          </div>
        </section>

        <section className="w-full flex flex-col gap-6">
          <h1 className="text-food-light-300 text-3xl font-poppins font-normal">
            Desserts
          </h1>

          <div className="w-full relative">
            <Slider {...settings}>
              {foods.map((food) => (
                <Food key={food.id} {...food} />
              ))}
            </Slider>
          </div>
        </section>

        <section className="w-full flex flex-col gap-6">
          <h1 className="text-food-light-300 text-3xl font-poppins font-normal">
            Drinks
          </h1>

          <div className="w-full relative">
            <Slider {...settings}>
              {foods.map((food) => (
                <Food key={food.id} {...food} />
              ))}
            </Slider>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
