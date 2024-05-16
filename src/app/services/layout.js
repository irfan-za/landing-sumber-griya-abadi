import ButtonWA from "@/components/ButtonWA";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasa Pemasangan Plafon PVC & Gypsum di Solo | Sumber Griya Abadi",
  description:
    "Melayani berbagai jasa pemasangan plafon Gypsum, PVC dan Baja Ringan. Pengalaman 20 tahun, harga terjangkau, dan bergaransi. Hubungi kami sekarang!",
  keywords:
    "pemborong plafon, jasa konstruksi, jasa pasang plafon, plafon pvc, plafon gypsum, baja ringan, atap galvalume, pasang plafon pvc, tukang plafon, atap rumah, toko plafon solo",
  openGraph: {
    images: `${process.env.SGA_LOGO_META_TAG}`,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/services`,
  },
};

export default function ServicesLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <main className={inter.className}>{children}</main>
        <div>
          <ButtonWA />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
