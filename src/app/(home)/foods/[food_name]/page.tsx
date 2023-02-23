"use client";
import { Button } from "@/components/Button";
import { FoodImage } from "@/components/FoodImage";
import { CaretLeft } from "@/components/Icons/CaretLeft";
import { Stepper } from "@/components/Stepper";
import { Tag } from "@/components/Tag";
import { useRouter } from "next/navigation";
import { useState } from "react";
import food1 from "../../../../../public/food1.png";

export default function Home() {
  const { back } = useRouter();

  const amount = 10;

  const [quantity, setQuantity] = useState(0);

  function handleAddQuantity() {
    if (quantity >= amount) return;
    setQuantity((oldState) => oldState + 1);
  }

  function handleRemoveQuantity() {
    if (quantity <= 0) return;
    setQuantity((oldState) => oldState - 1);
  }

  return (
    <div className="px-32 py-3 flex flex-1 flex-col gap-6 justify-center">
      <header>
        <button onClick={() => back()} className="flex items-center gap-3">
          <CaretLeft />
          <span className="font-poppins font-bold text-xl text-food-light-300">
            Back
          </span>
        </button>
      </header>

      <div className="w-full h-full flex text-food-light-300 flex-row gap-12 items-center">
        <FoodImage foodName="Food 1" url={food1.src} variant="lg" />

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-poppins font-medium">Salad Ravanello</h1>
          <p className="font-poppins font-normal text-2xl">
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </p>
          <div className="flex flex-row gap-3 items-center">
            <Tag name="alface" />
            <Tag name="alface" />
            <Tag name="alface" />
            <Tag name="alface" />
            <Tag name="alface" />
            <Tag name="alface" />
          </div>
          <div className="flex items-center gap-4">
            <Stepper
              quantity={quantity}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
            />
            <Button>Add (R$ 25.00)</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
