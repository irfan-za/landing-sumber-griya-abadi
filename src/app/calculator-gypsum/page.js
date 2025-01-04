import CalculatorGypsum from "@/components/calculator/CalculatorGypsum";
import { Card } from "@/components/ui/card";

const page = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <Card className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Kalkulator Kebutuhan Plafon Gypsum
        </h2>

        <CalculatorGypsum />
      </Card>
    </section>
  );
};

export default page;
