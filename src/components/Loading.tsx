"use client";
import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <CircleNotch size={35} className="animate-spin text-food-light-300" />
    </div>
  );
}
