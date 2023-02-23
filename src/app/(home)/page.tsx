"use client";
import { Box } from "@/components/Box";
import Image from "next/image";
import foodPNG from "../../../public/food-banner.png";
import food1 from "../../../public/food1.png";

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
      urlFood: "salad-ravanello",
    },
    {
      id: "cuid1",
      foodImage: food1.src,
      foodName: "Salad Ravanello",
      foodDescription:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 50.0,
      amount: 10,
      urlFood: "salad-ravanello",
    },
    {
      id: "cuid2",
      foodImage: food1.src,
      foodName: "Salad Ravanello",
      foodDescription:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 50.0,
      amount: 10,
      urlFood: "salad-ravanello",
    },
    {
      id: "cuid4",
      foodImage: food1.src,
      foodName: "Salad Ravanello",
      foodDescription:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 50.0,
      amount: 10,
      urlFood: "salad-ravanello",
    },
  ];

  return (
    <div className="px-32 mt-44 flex flex-col gap-16 justify-center">
      <div className="w-full relative bg-gradient-food-200 h-64 rounded-lg text-food-light-300 flex items-center justify-center">
        <Image
          src={foodPNG.src}
          alt="Foods"
          width={550}
          height={412}
          className="-mt-16"
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

      <Box title="Meals" foods={foods} />
      <Box title="Desserts" foods={foods} />
      <Box title="Drinks" foods={foods} />
    </div>
  );
}