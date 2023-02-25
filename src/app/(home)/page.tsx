import { ContextBoxes } from "@/components/ContentBoxes";
import { Loading } from "@/components/Loading";
import Image from "next/image";
import { Suspense } from "react";
import foodPNG from "../../../public/food-banner.png";

export default function Home() {
  return (
    <div className="px-32 mt-44 flex flex-col gap-16 justify-center">
      <div className="w-full relative bg-gradient-food-200 h-64 rounded-lg text-food-light-300 flex items-center justify-center">
        <Image
          src={foodPNG.src}
          alt="Foods"
          width={550}
          height={412}
          className="-mt-16"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl leading-[140%] font-normal font-poppins">
            Unparalleled flavors
          </h1>
          <span className="text-base leading-[100%]">
            Feel the care of the preparation with selected ingredients
          </span>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Await Components */}
        <ContextBoxes />
      </Suspense>
    </div>
  );
}
