"use client";
import { Button } from "@/components/Button";
import { Receipt } from "@/components/Icons/Receipt";
import { SignOut } from "@/components/Icons/SignOut";
import { Input } from "@/components/Input";
import Image from "next/image";
import logoSVG from "../../public/logo.svg";
import { CartDialog } from "./CartDialog";

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
        <Receipt />
        <span>Orders (0)</span>
      </Button>

      <CartDialog />

      <button>
        <SignOut />
      </button>
    </header>
  );
}
