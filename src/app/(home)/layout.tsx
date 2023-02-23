import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

type HomeLayoutProps = {
  children: ReactNode;
};
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
