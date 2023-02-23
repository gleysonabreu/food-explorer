import clsx from "clsx";
import Image from "next/image";

type FoodImageProps = {
  url: string;
  foodName: string;
  variant: "xs" | "sm" | "md" | "lg";
};

export function FoodImage({ url, foodName, variant }: FoodImageProps) {
  const variantSize =
    variant === "xs"
      ? 80
      : variant === "sm"
      ? 176
      : variant === "md"
      ? 256
      : 384;
  return (
    <Image
      src={url}
      alt={foodName}
      width={variantSize}
      height={variantSize}
      className={clsx("rounded-full", {
        "w-20 h-20": variant === "xs",
        "w-44 h-44": variant === "sm",
        "w-64 h-64": variant === "md",
        "w-96 h-96": variant === "lg",
      })}
    />
  );
}
