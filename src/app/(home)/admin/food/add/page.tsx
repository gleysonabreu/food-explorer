"use client";
import { Button } from "@/components/Button";
import { Dialog } from "@/components/Dialog";
import { HeaderPagesBack } from "@/components/HeaderPagesBack";
import { Input } from "@/components/Input";
import { ScrollArea } from "@/components/ScrollArea";
import * as DialogContent from "@radix-ui/react-dialog";
import { Plus, UploadSimple, X } from "phosphor-react";
import { useState } from "react";

export default function AddFood() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>("");

  function handleAddIngredient() {
    const removeSpacesIngredient = ingredient.toLowerCase().trim();
    if (!removeSpacesIngredient || removeSpacesIngredient.length < 3) return;

    if (ingredients.includes(removeSpacesIngredient)) return;
    setIngredients((prev) => [...prev, removeSpacesIngredient]);
  }

  function handleRemoveIngredient(indexIngredient: number) {
    setIngredients((prev) =>
      prev.filter((_, index) => index !== indexIngredient)
    );
  }
  return (
    <div className="px-32 py-3 flex flex-1 flex-col gap-6 justify-center">
      <HeaderPagesBack />

      <div className="w-full h-full flex text-food-light-300 flex-col gap-12 pb-3">
        <h1 className="font-poppins font-medium text-3xl">Add Food</h1>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-8">
            <fieldset className="flex flex-col gap-4">
              <label className="text-food-light-400">Food image</label>
              <div className="bg-food-dark-900 w-full h-full rounded-lg flex items-center justify-center">
                <input
                  id="upload-image"
                  className="hidden"
                  type="file"
                  placeholder="Add file"
                />
                <label
                  htmlFor="upload-image"
                  className="flex flex-row gap-2 cursor-pointer"
                >
                  <UploadSimple size={25} />
                  Select Image
                </label>
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-4">
              <label className="text-food-light-400" htmlFor="name">
                Food name
              </label>
              <Input type="text" placeholder="Ex: Salad Ravanello" id="name" />
            </fieldset>
            <fieldset className="flex flex-col gap-4 relative">
              <label className="text-food-light-400" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="focus:outline-none focus:ring-2 focus:ring-food-tints-cake-200 focus:ring-offset-2 focus:ring-offset-food-dark-400 w-full bg-food-dark-900 rounded-lg h-12 px-4 py-3 placeholder:text-food-light-500 outline-none text-food-light-100"
              >
                <option>Select category</option>
                <option value="salad">Salad</option>
              </select>
            </fieldset>
          </div>

          <div className="flex gap-8">
            <fieldset className="flex flex-col gap-4">
              <label className="text-food-light-400">Ingredients</label>
              <div className="w-[48rem] overflow-hidden h-12 rounded-lg bg-food-dark-900 flex items-center">
                <ScrollArea>
                  <div className="flex flex-row items-center w-full h-full pl-1 pr-1 gap-2">
                    {ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="bg-food-light-600 truncate text-food-light-100 py-2 px-4 rounded-lg flex items-center gap-2"
                      >
                        {ingredient}
                        <button
                          type="button"
                          className="outline-none"
                          onClick={() => handleRemoveIngredient(index)}
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ))}

                    <DialogContent.Root>
                      <DialogContent.Trigger className="border-food-light-600 outline-none border-dashed border text-food-light-100 py-2 px-4 rounded-lg flex items-center gap-2">
                        Add
                        <Plus size={20} />
                      </DialogContent.Trigger>

                      <Dialog title="Add ingredient">
                        <div className="px-10 py-5 flex gap-3">
                          <Input
                            type="text"
                            placeholder="Add ingredient"
                            onChange={(event) =>
                              setIngredient(event.target.value)
                            }
                          />
                          <Button onClick={handleAddIngredient}>Add</Button>
                        </div>
                      </Dialog>
                    </DialogContent.Root>
                  </div>
                </ScrollArea>
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-4 max-w-sm w-full">
              <label className="text-food-light-400" htmlFor="price">
                Price
              </label>
              <Input type="text" placeholder="Ex: 10.5" id="price" />
            </fieldset>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <fieldset className="flex flex-col gap-4">
              <label className="text-food-light-400" htmlFor="quantity">
                Quantity
              </label>
              <Input type="number" id="quantity" min={1} placeholder="Ex: 1" />
            </fieldset>
            <fieldset className="flex flex-col gap-4">
              <label className="text-food-light-400" htmlFor="friendly-url">
                Friendly URL
              </label>
              <Input
                type="text"
                placeholder="Ex: salad-ravanello"
                id="friendly-url"
              />
            </fieldset>
          </div>

          <fieldset className="flex flex-col gap-4">
            <label className="text-food-light-400" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description food"
              className="focus:outline-none focus:ring-2 focus:ring-food-tints-cake-200 focus:ring-offset-2 focus:ring-offset-food-dark-400 w-full resize-none bg-food-dark-900 min-h-[176px] rounded-lg h-12 px-4 py-3 placeholder:text-food-light-500 outline-none text-food-light-100"
            />
          </fieldset>

          <fieldset className="flex justify-end">
            <Button type="submit">Save</Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
