import { Poppins, Roboto } from "@next/font/google";
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
        className={`${roboto.variable} ${poppins.variable} bg-food-dark-400`}
      >
        {children}
      </body>
    </html>
  );
}
