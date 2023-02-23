type TagProps = {
  name: string;
};

export function Tag({ name }: TagProps) {
  return (
    <span className="px-2 py-1 bg-food-dark-1000 rounded-md lowercase">
      {name}
    </span>
  );
}
