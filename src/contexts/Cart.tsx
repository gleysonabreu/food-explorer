"use client";
import { env } from "@/config/env";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

type CartContextValue = {
  amountItemCount: number;
  addToCart: (food: AddToCartProps) => Promise<void>;
  removeFoodFromCart: (food: RemoveItemFromCartProps) => void;
  updateCartItems: (food: UpdateCartItemProps) => Promise<void>;
  cartItems: CartItem[];
};

type AddToCartProps = {
  foodId: string;
  quantity: number;
};
type UpdateCartItemProps = {
  foodId: string;
  quantity: number;
};

type RemoveItemFromCartProps = {
  foodId: string;
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
    const settingsLoadingToast = {
      isLoading: false,
      autoClose: 2000,
      closeButton: true,
    };
    const toastId = toast.loading("Adding to cart...");

    try {
      const res = await fetch(`${env.apiURL}/foods/${foodId}`);
      const resBody = (await res.json()) as CartItem;

      if (res.status === 200) {
        const existingCartItem = cartItems.find((cart) => cart.id === foodId);
        const newQuantity = existingCartItem
          ? existingCartItem.amount + quantity
          : quantity;

        if (newQuantity > resBody.amount) {
          toast.update(toastId, {
            render: "Quantity not available!",
            type: "error",
            ...settingsLoadingToast,
          });
          return;
        }

        const newCartList = existingCartItem
          ? cartItems.map((cart) =>
              cart.id === foodId ? { ...cart, amount: newQuantity } : cart
            )
          : [...cartItems, { ...resBody, amount: newQuantity }];

        setCartItems(newCartList);
        localStorage.setItem(env.cartKey, JSON.stringify(newCartList));
        toast.update(toastId, {
          render: "Food added to cart!",
          type: "success",
          ...settingsLoadingToast,
        });
      } else {
        toast.update(toastId, {
          render: "Unexpected response from the server, try again!",
          type: "error",
          ...settingsLoadingToast,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Unable to connect to Food Explorer!",
        type: "error",
        ...settingsLoadingToast,
      });
    }
  }

  function removeFoodFromCart({ foodId }: RemoveItemFromCartProps) {
    try {
      const findItemCart = cartItems.find((cart) => cart.id === foodId);
      if (!findItemCart) {
        throw Error();
      }

      const newCartList = cartItems.filter((cart) => cart.id !== foodId);
      localStorage.setItem(env.cartKey, JSON.stringify(newCartList));
      setCartItems(newCartList);
      toast.success("Food removed from cart!");
    } catch (error) {
      toast.error("Error removing food from cart!");
    }
  }

  async function updateCartItems({ foodId, quantity }: UpdateCartItemProps) {
    const settingsLoadingToast = {
      isLoading: false,
      autoClose: 2000,
      closeButton: true,
    };
    const toastId = toast.loading("Updating quantity...");

    try {
      if (quantity <= 0) {
        removeFoodFromCart({ foodId });
        toast.done(toastId);
        return;
      }

      const res = await fetch(`${env.apiURL}/foods/${foodId}`);
      const resBody = (await res.json()) as CartItem;

      if (res.status === 200) {
        const updateCart = [...cartItems];
        const existingCartItem = updateCart.find((cart) => cart.id === foodId);

        if (quantity > resBody.amount) {
          toast.update(toastId, {
            render: "Quantity not available!",
            type: "error",
            ...settingsLoadingToast,
          });
          return;
        }

        if (existingCartItem) {
          existingCartItem.amount = quantity;
          setCartItems(updateCart);
          localStorage.setItem(env.cartKey, JSON.stringify(updateCart));
          toast.update(toastId, {
            render: "Quantity updated!",
            type: "success",
            ...settingsLoadingToast,
          });
        }
      } else {
        toast.update(toastId, {
          render: "Unexpected response from the server, try again!",
          type: "error",
          ...settingsLoadingToast,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Unable to connect to Food Explorer!",
        type: "error",
        ...settingsLoadingToast,
      });
    }
  }

  const values: CartContextValue = {
    addToCart,
    amountItemCount,
    cartItems,
    removeFoodFromCart,
    updateCartItems,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
