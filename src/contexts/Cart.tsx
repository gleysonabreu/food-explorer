"use client";
import { env } from "@/config/env";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

type CartContextValue = {
  amountItemCount: number;
  addToCart: (food: CartItem) => void;
  cartItems: CartItem[];
};

type CartItem = {
  foodId: string;
  quantity: number;
};

export const CartContext = createContext<CartContextValue | null>(null);

type CartProviderProps = {
  children: ReactNode;
};
export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const cart = localStorage.getItem(env.cartKey);

    return cart ? JSON.parse(cart) : [];
  });
  const amountItemCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  async function addToCart({ foodId, quantity }: CartItem) {
    try {
      const res = await fetch(`${env.apiURL}/stock/${foodId}`);
      const resBody = await res.json();

      if (res.status === 200) {
        const existingCartItem = cartItems.find(
          (cart) => cart.foodId === foodId
        );
        const newQuantity = existingCartItem
          ? existingCartItem.quantity + quantity
          : quantity;

        if (newQuantity > resBody.amount) {
          toast.error("Quantity not available!");
          return;
        }

        const newCartList = existingCartItem
          ? cartItems.map((cart) =>
              cart.foodId === foodId ? { ...cart, quantity: newQuantity } : cart
            )
          : [...cartItems, { foodId, quantity: newQuantity }];

        setCartItems(newCartList);
        localStorage.setItem(env.cartKey, JSON.stringify(newCartList));
        toast.success("Food added to cart!");
      } else {
        toast.error("Unexpected response from the server, try again!");
      }
    } catch (error) {
      toast.error("Unable to connect to Food Explorer!");
    }
  }

  const values: CartContextValue = {
    addToCart,
    amountItemCount,
    cartItems,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
