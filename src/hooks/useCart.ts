import { CartContext } from "@/contexts/Cart";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
