import ButtonWA from "@/components/ButtonWA";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import FacebookPixel from "@/components/product/FacebookPixel";
const inter = Inter({ subsets: ["latin"] });

export default function ProductsLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <FacebookPixel />
        <ButtonWA />
      </body>
    </html>
  );
}
