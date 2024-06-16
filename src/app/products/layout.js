import "@/app/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jual Plafon PVC, Gypsum & Bahan bangunan | Sumber Griya Abadi",
  description:
    "Belanja berbagai bahan material bangunan, baja ringan, plafon Gypsum dan PVC lengkap & terpercaya hanya di Sumber Griya Abadi.",
  keywords:
    "toko plafon, toko bangunan, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, toko plafon solo, toko bangunan solo",
  openGraph: {
    images: `${process.env.SGA_LOGO_META_TAG}`,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products`,
  },
};

export default function ProductsLayout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
