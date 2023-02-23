import { Button } from "@/components/Button";
import { Minus } from "@/components/Icons/Minus";
import { Plus } from "@/components/Icons/Plus";
import Image from "next/image";
import { useState } from "react";

type FoodProps = {
  id: string;
  foodImage: string;
  foodName: string;
  foodDescription: string;
  price: number;
  amount: number;
};

export function Food({
  id,
  amount,
  foodDescription,
  foodImage,
  foodName,
  price,
}: FoodProps) {
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
    <div className="flex flex-col items-center p-6 gap-4 isolate w-[305px] h-[462px] bg-food-dark-300 border border-food-dark-300 rounded-lg">
      <div className="h-44 w-44">
        <Image
          src={foodImage}
          alt={foodName}
          width={176}
          height={176}
          className="w-44 h-44 rounded-full"
        />
      </div>

      <h1 className="font-poppins font-bold text-2xl text-center text-food-light-300">
        {foodName}
      </h1>
      <p className="text-base text-food-light-400 text-center">
        {foodDescription}
      </p>
      <h2 className="font-normal text-3xl text-center text-food-tints-cake-200">
        R$ {price}
      </h2>

      <div className="flex items-center gap-4">
        <button
          onClick={handleRemoveQuantity}
          className="w-6 h-6 items-center justify-center"
        >
          <Minus />
        </button>
        <input
          className="bg-transparent w-10 outline-none text-center text-food-light-300 font-bold text-xl"
          type="number"
          id="food-amount"
          readOnly
          value={quantity}
        />
        <button
          onClick={handleAddQuantity}
          className="w-6 h-6 flex items-center justify-center"
        >
          <Plus />
        </button>

        <Button>Add</Button>
      </div>
    </div>
  );
}
