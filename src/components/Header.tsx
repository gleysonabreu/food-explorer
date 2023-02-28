"use client";
import Image from "next/image";
import { Receipt, SignOut } from "phosphor-react";
import logoSVG from "../../public/logo.svg";
import { CartDialog } from "./CartDialog";
import { Button, Input } from "./Form";

export function Header() {
  return (
    <header className="w-full flex justify-center flex-row items-center py-6 px-28 gap-8 bg-food-dark-600 h-28">
      <Image
        src={logoSVG.src}
        alt="Food Explorer Logo"
        width={197}
        height={30}
      />

      <div className="w-4/12">
        <Input placeholder="Search for food or ingredients" />
      </div>

      <Button>
        <Receipt size={25} />
        <span>Orders (0)</span>
      </Button>

      <CartDialog />

      <button className="text-food-light-300">
        <SignOut size={25} />
      </button>
    </header>
  );
}
