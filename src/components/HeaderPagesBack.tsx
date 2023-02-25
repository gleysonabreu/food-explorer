"use client";
import { useRouter } from "next/navigation";
import { CaretLeft } from "./Icons/CaretLeft";

export function HeaderPagesBack() {
  const router = useRouter();

  return (
    <header>
      <button onClick={() => router.back()} className="flex items-center gap-3">
        <CaretLeft />
        <span className="font-poppins font-bold text-xl text-food-light-300">
          Back
        </span>
      </button>
    </header>
  );
}
