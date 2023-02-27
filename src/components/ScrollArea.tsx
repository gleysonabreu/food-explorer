import * as ScrollAreaContainer from "@radix-ui/react-scroll-area";
import { ReactNode } from "react";

type ScrollAreaProps = {
  children: ReactNode;
};

export function ScrollArea({ children }: ScrollAreaProps) {
  return (
    <ScrollAreaContainer.Root className={`w-full rounded overflow-hidden`}>
      <ScrollAreaContainer.Viewport className="w-full h-full rounded-none">
        {children}
      </ScrollAreaContainer.Viewport>
      <ScrollAreaContainer.Scrollbar
        className="flex select-none touch-none p-[2px] bg-food-dark-1000 rounded-lg transition-colors ease-out hover:bg-food-dark-800 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2"
        orientation="vertical"
      >
        <ScrollAreaContainer.Thumb className="flex-1 bg-food-dark-700 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollAreaContainer.Scrollbar>
      <ScrollAreaContainer.Scrollbar
        className="flex select-none touch-none p-[2px] bg-food-dark-1000 rounded-lg transition-colors ease-out hover:bg-food-dark-800 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2"
        orientation="horizontal"
      >
        <ScrollAreaContainer.Thumb className="flex-1 bg-food-dark-700 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollAreaContainer.Scrollbar>
      <ScrollAreaContainer.Corner className="bg-food-dark-1000" />
    </ScrollAreaContainer.Root>
  );
}
