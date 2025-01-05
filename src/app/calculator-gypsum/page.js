import CalculatorGypsum from "@/components/calculator/CalculatorGypsum";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
      <Card className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Kalkulator Kebutuhan Plafon Gypsum
        </h2>

        <CalculatorGypsum />
      </Card>
      <Card className="p-6 max-w-xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold">Riwayat Perhitungan</h3>
          <p className="text-gray-600 text-center">
            Lihat riwayat perhitungan plafon Gypsum Anda
          </p>
          <Link
            href="/calculator-gypsum/history"
            className="border-2 border-primary text-primary font-semibold hover:font-medium hover:text-primary-foreground hover:bg-primary px-4 py-1 rounded-md"
          >
            Lihat Riwayat
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default page;
