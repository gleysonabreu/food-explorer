import { Minus } from "./Icons/Minus";
import { Plus } from "./Icons/Plus";

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
        className="w-6 h-6 items-center justify-center"
      >
        <Minus />
      </button>
      <input
        className="bg-transparent w-10 outline-none text-center text-food-light-300 font-bold text-xl"
        type="number"
        id="food-amount"
        readOnly
        value={quantity}
      />
      <button
        onClick={handleAddQuantity}
        className="w-6 h-6 flex items-center justify-center"
      >
        <Plus />
      </button>
    </div>
  );
}
