import { Card } from "@/components/ui/card";
import CalculatorPvc from "@/components/CalculatorPvc";

const page = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <Card className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Kalkulator Kebutuhan Plafon PVC
        </h2>

        <CalculatorPvc />
      </Card>
    </section>
  );
};

export default page;
