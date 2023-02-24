import * as DialogContent from "@radix-ui/react-dialog";
import { ReactNode } from "react";

type DialogProps = {
  title: string;
  children: ReactNode;
};

export function Dialog({ title, children }: DialogProps) {
  return (
    <DialogContent.Portal>
      <DialogContent.Overlay className="bg-black/50 backdrop-blur-sm inset-0 fixed" />

      <DialogContent.Content className="fixed bg-food-dark-600 py-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-[480px] w-full shadow-lg shadow-black/25">
        <DialogContent.Title className="text-lg font-black pl-10">
          {title}
        </DialogContent.Title>
        {children}
      </DialogContent.Content>
    </DialogContent.Portal>
  );
}
