import { Minus, Plus } from "phosphor-react";

type StepperProps = {
  quantity: number;
  handleRemoveQuantity: () => void;
  handleAddQuantity: () => void;
};

export function Stepper({
  quantity,
  handleRemoveQuantity,
  handleAddQuantity,
}: StepperProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleRemoveQuantity}
        className="w-6 h-6 flex items-center justify-center text-food-light-300"
      >
        <Minus size={20} />
      </button>
      <input
        className="bg-transparent max-w-[2.5rem] outline-none text-center text-food-light-300 font-bold text-lg"
        type="number"
        id="food-amount"
        readOnly
        value={quantity}
      />
      <button
        onClick={handleAddQuantity}
        className="w-6 h-6 flex items-center justify-center text-food-light-300"
      >
        <Plus size={20} />
      </button>
    </div>
  );
}
