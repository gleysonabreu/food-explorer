"use client";
import { env } from "@/config/env";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

type CartContextValue = {
  amountItemCount: number;
  addToCart: (food: AddToCartProps) => void;
  cartItems: CartItem[];
};

type AddToCartProps = {
  foodId: string;
  quantity: number;
};

type CartItem = {
  id: string;
  foodName: string;
  foodDescription: string;
  price: number;
  foodImage: string;
  amount: number;
  urlFood: string;
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
  const amountItemCount = cartItems.reduce((acc, item) => acc + item.amount, 0);

  async function addToCart({ foodId, quantity }: AddToCartProps) {
    try {
      const res = await fetch(`${env.apiURL}/foods/${foodId}`);
      const resBody = (await res.json()) as CartItem;

      if (res.status === 200) {
        const existingCartItem = cartItems.find((cart) => cart.id === foodId);
        const newQuantity = existingCartItem
          ? existingCartItem.amount + quantity
          : quantity;

        if (newQuantity > resBody.amount) {
          toast.error("Quantity not available!");
          return;
        }

        const newCartList = existingCartItem
          ? cartItems.map((cart) =>
              cart.id === foodId ? { ...cart, amount: newQuantity } : cart
            )
          : [...cartItems, { ...resBody, amount: newQuantity }];

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
