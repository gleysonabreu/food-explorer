"use client";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import * as DialogContent from "@radix-ui/react-dialog";
import { ShoppingCart } from "phosphor-react";
import { CartItem } from "./CartItem";
import { Dialog } from "./Dialog";
import { Button } from "./Form";
import { ScrollArea } from "./ScrollArea";

export function CartDialog() {
  const { cartItems } = useCart();

  const cartItemsFormatted = cartItems.map((item) => {
    return {
      ...item,
      priceFormatted: formatPrice(item.price),
      subTotal: formatPrice(item.price * item.amount),
    };
  });

  const subTotal = formatPrice(
    cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0)
  );

  return (
    <DialogContent.Root>
      <DialogContent.Trigger className="relative text-food-light-100 hover:text-food-light-600 transition-all">
        <ShoppingCart size={32} />
        {cartItems.length > 0 && (
          <span className="absolute -bottom-1 left-5 flex items-center justify-center border font-bold border-food-dark-400 text-xs leading-4 pl-[2.5px] pr-[2.5px] min-h-[1.25rem] min-w-[1.25rem] bg-food-tints-cake-200 rounded-full text-food-dark-100">
            {cartItems.length}
          </span>
        )}
      </DialogContent.Trigger>

      <Dialog title={`Cart (${cartItems.length})`}>
        <div className="gap-4 h-[570px] flex">
          <div className="flex flex-1 flex-col">
            {cartItems.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-4 gap-3">
                <span className="text-food-dark-500 bg-food-light-100 border-food-dark-500 border-dashed border rounded-full flex items-center justify-center  w-16 h-16">
                  <ShoppingCart size={32} />
                </span>

                <h1 className="font-bold tracking-wide text-xl text-center">
                  Your cart is empty!
                </h1>
                <p className="text-food-light-500 text-center px-10">
                  Biscuit oat cake wafer icing ice cream tiramisu pudding
                  cupcake.
                </p>
              </div>
            ) : (
              <>
                <div className="px-1 flex-1">
                  <ScrollArea>
                    <ul className="list-none w-full h-[345px] pl-10">
                      {cartItemsFormatted.map((item) => (
                        <CartItem item={item} key={item.id} />
                      ))}
                    </ul>
                  </ScrollArea>

                  <div className="flex flex-1 border-t border-food-light-700 px-6 py-6 flex-shrink flex-col">
                    <ul className="pb-2 list-none w-full">
                      <li className="flex justify-between items-center py-1">
                        <span>Subtotal</span>
                        <span>{subTotal}</span>
                      </li>
                      <li className="flex justify-between items-center py-1">
                        <span>Taxes</span>
                        <span>Calculate at checkout</span>
                      </li>
                      <li className="flex justify-between items-center py-1">
                        <span>Shipping</span>
                        <span className="font-bold">FREE</span>
                      </li>
                    </ul>

                    <div className="font-bold py-3 border-food-light-700 border-t flex justify-between items-center mb-2">
                      <span>Total</span>
                      <span>{subTotal}</span>
                    </div>

                    <div className="w-full">
                      <Button isFull>Proceed to checkout</Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </DialogContent.Root>
  );
}
