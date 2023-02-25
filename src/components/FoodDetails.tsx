"use client";
import { useState } from "react";
import { Button } from "./Button";
import { FoodProps } from "./Food";
import { FoodImage } from "./FoodImage";
import { Stepper } from "./Stepper";
import { Tag } from "./Tag";

type FoodDetailsProps = {
  food: FoodProps;
};

export function FoodDetails({ food }: FoodDetailsProps) {
  const [quantity, setQuantity] = useState(0);

  function handleAddQuantity() {
    if (quantity >= food.amount) return;
    setQuantity((oldState) => oldState + 1);
  }

  function handleRemoveQuantity() {
    if (quantity <= 0) return;
    setQuantity((oldState) => oldState - 1);
  }

  return (
    <div className="w-full h-full flex text-food-light-300 flex-row gap-12 items-center">
      <FoodImage foodName={food.foodName} url={food.foodImage} variant="lg" />

      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-poppins font-medium">{food.foodName}</h1>
        <p className="font-poppins font-normal text-2xl">
          {food.foodDescription}
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
          <Button>Add (R$ {food.price})</Button>
        </div>
      </div>
    </div>
  );
}
