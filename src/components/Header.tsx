"use client";
import { Role } from "@/contexts/Auth";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { Plus, Receipt, SignOut } from "phosphor-react";
import logoAdminSVG from "../../public/logo-admin.svg";
import logoSVG from "../../public/logo.svg";
import { CartDialog } from "./CartDialog";
import { Button, Input } from "./Form";

export function Header() {
  const { user } = useAuth();

  return (
    <header className="w-full flex justify-center flex-row items-center py-6 px-28 gap-8 bg-food-dark-600 h-28">
      <Image
        src={user.role === Role.Admin ? logoAdminSVG.src : logoSVG.src}
        alt="Food Explorer Logo"
        width={197}
        height={30}
      />

      <div className="w-4/12">
        <Input placeholder="Search for food or ingredients" />
      </div>

      {user.role === Role.Admin ? (
        <Button asChild>
          <Link href="/admin/food/add">
            <Plus size={20} />
            <span>New plate</span>
          </Link>
        </Button>
      ) : (
        <Button>
          <Receipt size={25} />
          <span>Orders (0)</span>
        </Button>
      )}

      {user.role === Role.User && <CartDialog />}

      <button className="text-food-light-300">
        <SignOut size={25} />
      </button>
    </header>
  );
}
