"use client";
import { Button } from "@/components/Button";
import { useCart } from "@/hooks/useCart";
import * as DialogContent from "@radix-ui/react-dialog";
import Link from "next/link";
import { ShoppingCart } from "phosphor-react";
import food1 from "../../public/food1.png";
import { Dialog } from "./Dialog";
import { FoodImage } from "./FoodImage";
import { ScrollArea } from "./ScrollArea";
import { Stepper } from "./Stepper";

export function CartDialog() {
  const { cartItems } = useCart();

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

      <Dialog title="Cart">
        <div className="gap-4 h-[500px] flex">
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
                    <ul className="list-none w-full h-96 pl-10">
                      <li className="flex flex-col pb-4 items-start justify-center">
                        <div className="py-4 flex flex-row gap-3 items-center">
                          <FoodImage
                            url={food1.src}
                            foodName="Food Name"
                            variant="xs"
                          />
                          <div className="flex flex-col">
                            <Link
                              href="/product"
                              className="font-bold font-poppins"
                            >
                              Product Name
                            </Link>
                            <span>R$ 15,15</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 justify-end w-full pr-5">
                          <Stepper
                            quantity={1}
                            handleAddQuantity={() => {}}
                            handleRemoveQuantity={() => {}}
                          />
                          <Button onClick={() => {}}>Remove</Button>
                        </div>
                      </li>
                      <li className="flex flex-col pb-4 items-start">
                        <div className="py-4 flex flex-row gap-3 items-center justify-between">
                          <FoodImage
                            url={food1.src}
                            foodName="Food Name"
                            variant="xs"
                          />
                          <div className="flex flex-col">
                            <Link
                              href="/product"
                              className="font-bold font-poppins"
                            >
                              Product Name
                            </Link>
                            <span>R$ 15,15</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 justify-end w-full pr-5">
                          <Stepper
                            quantity={1}
                            handleAddQuantity={() => {}}
                            handleRemoveQuantity={() => {}}
                          />
                          <Button onClick={() => {}}>Remove</Button>
                        </div>
                      </li>
                      <li className="flex flex-col pb-4 items-start">
                        <div className="py-4 flex flex-row gap-3 items-center justify-between">
                          <FoodImage
                            url={food1.src}
                            foodName="Food Name"
                            variant="xs"
                          />
                          <div className="flex flex-col">
                            <Link
                              href="/product"
                              className="font-bold font-poppins"
                            >
                              Product Name
                            </Link>
                            <span>R$ 15,15</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 justify-end w-full pr-5">
                          <Stepper
                            quantity={1}
                            handleAddQuantity={() => {}}
                            handleRemoveQuantity={() => {}}
                          />
                          <Button onClick={() => {}}>Remove</Button>
                        </div>
                      </li>
                      <li className="flex flex-col pb-4 items-start">
                        <div className="py-4 flex flex-row gap-3 items-center">
                          <FoodImage
                            url={food1.src}
                            foodName="Food Name"
                            variant="xs"
                          />
                          <div className="flex flex-col">
                            <Link
                              href="/product"
                              className="font-bold font-poppins"
                            >
                              Product Name
                            </Link>
                            <span>R$ 15,15</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 justify-end w-full pr-5">
                          <Stepper
                            quantity={1}
                            handleAddQuantity={() => {}}
                            handleRemoveQuantity={() => {}}
                          />
                          <Button onClick={() => {}}>Remove</Button>
                        </div>
                      </li>
                    </ul>
                  </ScrollArea>
                </div>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </DialogContent.Root>
  );
}
