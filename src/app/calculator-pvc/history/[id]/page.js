"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCalculationById } from "@/lib/utils/storage";

export default function CalculationDetail({ params }) {
  const router = useRouter();
  const { id } = params;
  const [calculation, setCalculation] = useState(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      const data = getCalculationById(id);
      if (data) {
        setCalculation(data);
      } else {
        router.push("/calculator-pvc/history");
      }
    }
  }, [id, router]);

  if (!calculation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Button onClick={() => router.back()} className="mb-6">
        Kembali
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>{calculation.title}</CardTitle>
          <div className="text-sm text-gray-500">
            {new Date(calculation.createdAt).toLocaleString()}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-bold">Input Data:</h3>
              <p>Panjang: {calculation.data.panjang}m</p>
              <p>Lebar: {calculation.data.lebar}m</p>
              <p>Panjang PVC: {calculation.data.panjangPvc}m</p>
              <p>
                Wall Angle:{" "}
                {calculation.data.pakaiWallAngle === "true" ? "Ya" : "Tidak"}
              </p>
              <p>Jarak Rangka 2x4: {calculation.data.jarakRangka2x4}m</p>
              <p>Jarak Rangka 4x4: {calculation.data.jarakRangka4x4}m</p>
              <p>
                Jarak Gantungan: {calculation.data.jarakRangkaGantungan2x4}m
              </p>
              <p>Tinggi Gantungan: {calculation.data.tinggiGantungan2x4}m</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-300/10 border-blue-500 border-2 shadow-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-blue-900">Hasil Perhitungan:</h3>
                <p>
                  Jumlah PVC: {calculation.results.jumlahPvc} lembar (
                  {calculation.data.panjangPvc}m)
                </p>
                {calculation.results.sisaPvc > 0 && (
                  <p>
                    Sisa PVC: {calculation.results.sisaPvc}m (
                    {calculation.results.jumlahPvc} lembar)
                  </p>
                )}
                <p>Lis PVC: {calculation.results.lisPvc} batang</p>
                {calculation.results.wallAngle > 0 && (
                  <p>Wall Angle: {calculation.results.wallAngle} batang</p>
                )}
                {calculation.results.kawatGantungan > 0 && (
                  <p>Kawat Gantungan: {calculation.results.kawatGantungan}m</p>
                )}
                <p>Hollow 4x4: {calculation.results.hollow4x4} batang</p>
                <p>Hollow 2x4: {calculation.results.hollow2x4} batang</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
