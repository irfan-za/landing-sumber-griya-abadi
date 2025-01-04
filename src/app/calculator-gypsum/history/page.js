"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCalculations, deleteCalculation } from "@/lib/utils/storage";

export default function History() {
  const router = useRouter();
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
    setCalculations(getCalculations("gypsumCalculations"));
  }, []);

  const handleDelete = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus perhitungan ini?")) {
      deleteCalculation(id, "gypsumCalculations");
      setCalculations(getCalculations("gypsumCalculations"));
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Riwayat Perhitungan</h1>
        <Button onClick={() => router.push("/calculator-gypsum")}>
          Perhitungan Baru
        </Button>
      </div>

      <div className="space-y-4">
        {calculations
          .slice()
          .reverse()
          .map((calc) => (
            <Card key={calc.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{calc.title}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(calc.createdAt).toLocaleDateString()}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() =>
                      router.push(`/calculator-gypsum/history/${calc.id}`)
                    }
                  >
                    Lihat Detail
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(calc.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

        {calculations.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center text-gray-500">
              Belum ada riwayat perhitungan
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
