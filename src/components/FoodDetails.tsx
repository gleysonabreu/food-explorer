"use client";
import { Role } from "@/contexts/Auth";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { useState } from "react";
import { FoodProps } from "./Food";
import { FoodImage } from "./FoodImage";
import { Button } from "./Form";
import { Stepper } from "./Stepper";
import { Tag } from "./Tag";

type FoodDetailsProps = {
  food: FoodProps;
};

export function FoodDetails({ food }: FoodDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { user } = useAuth();

  function handleAddQuantity() {
    if (quantity >= food.amount) return;
    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
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
          {user.role === Role.User && (
            <Stepper
              quantity={quantity}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
            />
          )}

          {user.role === Role.User ? (
            <Button onClick={() => addToCart({ foodId: food.id, quantity })}>
              Add (R$ {formatPrice(food.price)})
            </Button>
          ) : (
            <Button asChild>
              <Link href={`/admin/food/${food.id}/edit`}>Edit plate</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
