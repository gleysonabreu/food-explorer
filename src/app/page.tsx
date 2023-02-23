"use client";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CaretRight } from "@/components/Icons/CaretRight";
import { Minus } from "@/components/Icons/Minus";
import { Plus } from "@/components/Icons/Plus";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import foodPNG from "../../public/food-banner.png";
import food1 from "../../public/food1.png";

function Food() {
  return (
    <div className="flex flex-col items-center p-6 gap-4 isolate w-[305px] h-[462px] bg-food-dark-300 border border-food-dark-300 rounded-lg">
      <div className="h-44 w-44">
        <Image
          src={food1.src}
          alt="Food 1"
          width={176}
          height={176}
          className="w-44 h-44 rounded-full"
        />
      </div>

      <h1 className="font-poppins font-bold text-2xl text-center text-food-light-300">
        Salada Ravanello
      </h1>
      <p className="text-base text-food-light-400 text-center">
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
      </p>
      <h2 className="font-normal text-3xl text-center text-food-tints-cake-200">
        R$ 49,97
      </h2>

      <div className="flex items-center gap-4">
        <button>
          <Minus />
        </button>
        <input
          className="bg-transparent w-5 outline-none text-center text-food-light-300 font-bold text-xl"
          type="text"
          id="food-amount"
          readOnly
          value={2}
        />
        <button>
          <Plus />
        </button>

        <Button>Add</Button>
      </div>
    </div>
  );
}

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
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
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
              <Food />
            </Slider>
          </div>
        </section>

        <section className="w-full flex flex-col gap-6">
          <h1 className="text-food-light-300 text-3xl font-poppins font-normal">
            Desserts
          </h1>

          <div className="w-full relative">
            <Slider {...settings}>
              <Food />
            </Slider>
          </div>
        </section>

        <section className="w-full flex flex-col gap-6">
          <h1 className="text-food-light-300 text-3xl font-poppins font-normal">
            Drinks
          </h1>

          <div className="w-full relative">
            <Slider {...settings}>
              <Food />
            </Slider>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
