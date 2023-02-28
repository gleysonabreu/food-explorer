import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { FoodImage } from "./FoodImage";
import { Stepper } from "./Stepper";

type CartItem = {
  id: string;
  foodName: string;
  foodDescription: string;
  price: number;
  foodImage: string;
  amount: number;
  urlFood: string;
  subTotal: string;
  priceFormatted: string;
};

type CartItemProps = {
  item: CartItem;
};

export function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.amount);
  const { removeFoodFromCart, updateCartItems } = useCart();

  async function handleAddQuantity() {
    setQuantity(quantity + 1);
    await updateCartItems({ foodId: item.id, quantity: quantity + 1 });
  }

  async function handleRemoveQuantity() {
    setQuantity(quantity - 1);
    await updateCartItems({ foodId: item.id, quantity: quantity - 1 });
  }

  return (
    <li className="flex flex-col pb-4 items-start justify-center">
      <div className="py-4 flex flex-row gap-3 items-center">
        <FoodImage url={item.foodImage} foodName={item.foodName} variant="xs" />
        <div className="flex flex-col">
          <Link
            href={`/foods/${item.urlFood}`}
            className="font-bold font-poppins"
          >
            {item.foodName}
          </Link>
          <span>Price: {item.priceFormatted}</span>
          <span className="font-bold">Subtotal: {item.subTotal}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-end w-full pr-5">
        <Stepper
          quantity={quantity}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
        />
        <Button onClick={() => removeFoodFromCart({ foodId: item.id })}>
          Remove
        </Button>
      </div>
    </li>
  );
}
