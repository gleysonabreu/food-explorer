"use client";
import { useRouter } from "next/navigation";
import { CaretLeft } from "phosphor-react";

export function HeaderPagesBack() {
  const router = useRouter();

  return (
    <header>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-3 text-food-light-300"
      >
        <CaretLeft size={25} />
        <span className="font-poppins font-bold text-xl text-food-light-300">
          Back
        </span>
      </button>
    </header>
  );
}
