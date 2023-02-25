import { Box } from "./Box";
import { FoodProps } from "./Food";

type Categories = {
  id: number;
  name: string;
  foods: FoodProps[];
};

const getCategoriesWithFoods = async (): Promise<Categories[]> => {
  const res = await fetch("http://localhost:3333/categories?_embed=foods");
  const result = await res.json();
  return result;
};

export async function ContextBoxes() {
  const categories = await getCategoriesWithFoods();
  return (
    <>
      {categories.map((category) => (
        <Box key={category.id} title={category.name} foods={category.foods} />
      ))}
    </>
  );
}
