export const metadata = {
  title: "Kalkulator Plafon Gypsum | Sumber Griya Abadi",
  description:
    "Hitung kebutuhan material plafon Gypsum Anda dengan mudah dan gratis hanya di Sumber Griya Abadi.",
  keywords:
    "toko plafon, jasa konstruksi, jasa pasang plafon, toko bangunan, plafon Gypsum, kalkulator material bangunan, kalkulator plafon Gypsum, toko bangunan solo",
  openGraph: {
    images: `${process.env.SGA_LOGO_META_TAG}`,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
  },
};

export default function CalculatorLayout({ children }) {
  return <div>{children}</div>;
}
