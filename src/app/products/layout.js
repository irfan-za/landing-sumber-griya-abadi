import ButtonWA from "@/components/ButtonWA";
import "@/app/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jual Berbagai Plafon PVC, Gypsum & Bahan bangunan | Sumber Griya Aba",
  description:
    "Jual berbagai bahan material bangunan, atap rumah, baja ringan, plafon Gypsum dan PVC lengkap hanya di Sumber Griya Abadi.",
  keywords:
    "toko plafon, toko bangunan, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, toko plafon solo, toko bangunan solo",
  openGraph: {
    images: `${process.env.SGA_LOGO_META_TAG}`,
  },
};

export default function ProductsLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <main className={inter.className}>{children}</main>
        <div>
          <ButtonWA />
        </div>
      </body>
    </html>
  );
}
