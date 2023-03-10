"use client";
import { Role } from "@/contexts/Auth";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { Heart, PencilSimple } from "phosphor-react";
import { useState } from "react";
import { FoodImage } from "./FoodImage";
import { Button } from "./Form";
import { Stepper } from "./Stepper";

export type FoodProps = {
  id: string;
  foodImage: string;
  foodName: string;
  foodDescription: string;
  price: number;
  amount: number;
  urlFood: string;
};

export function Food({
  id,
  amount,
  foodDescription,
  foodImage,
  foodName,
  price,
  urlFood,
}: FoodProps) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { user } = useAuth();

  function handleAddQuantity() {
    if (quantity >= amount) return;
    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  }

  return (
    <div className="flex relative flex-col items-center p-6 gap-4 isolate w-[305px] h-[462px] bg-food-dark-300 border border-food-dark-300 rounded-lg">
      {user.role === Role.Admin ? (
        <Link
          href={`/admin/food/${id}/edit`}
          className="absolute top-0 right-0 text-food-light-300"
        >
          <PencilSimple size={25} />
        </Link>
      ) : (
        <button className="absolute top-0 right-0 text-food-light-300">
          <Heart size={25} />
        </button>
      )}
      <FoodImage foodName={foodName} url={foodImage} variant="sm" />

      <Link
        href={`/foods/${urlFood}`}
        className="font-poppins font-bold text-2xl text-center text-food-light-300 hover:text-food-tints-cake-200 transition-colors"
      >
        {foodName}
      </Link>
      <p className="text-base text-food-light-400 text-center">
        {foodDescription}
      </p>
      <h2 className="font-normal text-3xl text-center text-food-tints-cake-200">
        {formatPrice(price)}
      </h2>

      {user.role === Role.User && (
        <div className="flex items-center gap-4">
          <Stepper
            quantity={quantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />
          <Button onClick={() => addToCart({ quantity, foodId: id })}>
            Add
          </Button>
        </div>
      )}
    </div>
  );
}
