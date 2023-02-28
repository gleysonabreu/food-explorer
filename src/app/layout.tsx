"use client";
import { CartProvider } from "@/contexts/Cart";
import { Poppins, Roboto } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/main.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${roboto.variable} ${poppins.variable} font-sans bg-food-dark-400`}
      >
        <>
          <ToastContainer />
          <CartProvider>{children}</CartProvider>
        </>
      </body>
    </html>
  );
}
