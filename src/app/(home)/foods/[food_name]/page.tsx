import { FoodProps } from "@/components/Food";
import { FoodDetails } from "@/components/FoodDetails";
import { HeaderPagesBack } from "@/components/HeaderPagesBack";

export default async function Home({
  params,
}: {
  params: { food_name: string };
}) {
  const res = await fetch(
    `http://localhost:3333/foods/?urlFood=${params.food_name}&singular=1`
  );
  const food = (await res.json()) as FoodProps;

  return (
    <div className="px-32 py-3 flex flex-1 flex-col gap-6 justify-center">
      <HeaderPagesBack />
      <FoodDetails food={food} />
    </div>
  );
}
