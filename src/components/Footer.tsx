import Image from "next/image";
import logoGraySVG from "../../public/logo-gray.svg";

export function Footer() {
  return (
    <footer className="w-full h-20 bg-food-dark-600 flex flex-row justify-between items-center px-32 py-6">
      <Image
        src={logoGraySVG.src}
        alt="Food Explorer"
        width={186}
        height={30}
      />
      <span className="text-food-light-300 text-base">
        © 2023 - All rights reserved.
      </span>
    </footer>
  );
}
