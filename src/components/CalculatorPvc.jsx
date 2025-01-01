'use client';


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState, useEffect } from "react";
import { saveCalculation } from "@/lib/utils/storage";
import StepNavigation from "./stepNavigation";
import { useRouter } from "next/navigation";

// Define the form schema using Zod
const formSchema = z.object({
  panjang: z.string().min(1, "Silahkan masukkan panjang ruangan"),
  lebar: z.string().min(1, "Silahkan masukkan lebar ruangan"),
  panjangPvc: z.string().min(1, "Silahkan pilih panjang PVC"),
  pakaiWallAngle: z.string().min(1, "Silahkan pilih penggunaan wall angle"),
  jarakRangka2x4: z.string().min(1, "Silahkan masukkan jarak rangka 2x4"),
  jarakRangka4x4: z.string().min(1, "Silahkan masukkan jarak rangka 4x4"),
  jarakRangkaGantungan2x4: z
    .string()
    .min(1, "Silahkan masukkan jarak rangka gantungan 2x4"),
  tinggiGantungan2x4: z
    .string()
    .min(1, "Silahkan masukkan tinggi gantungan 2x4"),
});


export default function CalculatorPvc() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
    const [results, setResults] = useState(null);
    const handleNext = async () => {
      if (await validateStep(step)) {
        setStep(prev => Math.min(prev + 1, totalSteps));
      }
    };
  
    const handlePrev = () => {
      setStep(prev => Math.max(prev - 1, 1));
    };
  const router= useRouter()
  
  
    const {
      register,
      handleSubmit,
      watch,
      setValue,
      formState: { errors },
      trigger,
    } = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        panjangPvc: "3",
        pakaiWallAngle: "true",
        jarakRangka2x4: "0.6",
        jarakRangka4x4: "1",
        jarakRangkaGantungan2x4: "1",
        tinggiGantungan2x4: "1",
      },
    });
  
    // Load saved data from localStorage
    useEffect(() => {
      const savedData = localStorage.getItem("pvcCalculatorData");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        Object.entries(parsedData).forEach(([key, value]) => {
          setValue(key , value);
        });
      }
    }, [setValue]);
  
    // Save form data to localStorage
    const formData = watch();
    useEffect(() => {
      localStorage.setItem("pvcCalculatorData", JSON.stringify(formData));
    }, [formData]);
  
    const validateStep = async (stepNumber) => {
      let fieldsToValidate = [];
  
      switch (stepNumber) {
        case 1:
          fieldsToValidate = ["panjang", "lebar"];
          break;
        case 2:
          fieldsToValidate = ["panjangPvc", "pakaiWallAngle"];
          break;
        case 3:
          fieldsToValidate = [
            "jarakRangka2x4",
            "jarakRangka4x4",
            "jarakRangkaGantungan2x4",
            "tinggiGantungan2x4",
          ];
          break;
      }
  
      const isValid = await trigger(fieldsToValidate);
      if (isValid) {
        setStep((prev) => prev + 1);
      }
    };
  
    const calculateJumlahPvc = (data) => {
      const p = parseFloat(data.panjang);
      const l = parseFloat(data.lebar);
      const panjangPvc = parseFloat(data.panjangPvc);
  
      if (Math.abs(panjangPvc - l) < Math.abs(panjangPvc - p)) {
        return Math.ceil(p / 0.2);
      } else {
        return Math.ceil(l / 0.2);
      }
    };
  
    const calculateRangkaHollow = (data) => {
      const p = parseFloat(data.panjang);
      const l = parseFloat(data.lebar);
      const isPakaiWallAngle = data.pakaiWallAngle === "true";
      const jarakRangka2x4 = parseFloat(data.jarakRangka2x4);
      const jarakGantungan = parseFloat(data.jarakRangkaGantungan2x4);
      const tinggiGantungan = parseFloat(data.tinggiGantungan2x4);
      const panjangPvc = parseFloat(data.panjangPvc);
  
      let hollowTepi4x4 = 0;
      let wallAngle = 0;
  
      if (isPakaiWallAngle) {
        wallAngle = ((p + l) * 2) / 3;
      } else {
        hollowTepi4x4 = ((p + l) * 2) / 4;
      }
  
      const hollowAtas4x4 =
        panjangPvc < l ? ((p - 1) * l) / 4 : ((l - 1) * p) / 4;
  
      const hollowBawah2x4 = ((3 / jarakRangka2x4) * p) / 4;
      const hollowGantungan2x4 =
        (((p * l) / jarakGantungan) * tinggiGantungan) / 4;
  
      return {
        wallAngle: Math.ceil(wallAngle),
        hollow4x4: Math.ceil(hollowTepi4x4 + hollowAtas4x4),
        hollow2x4: Math.ceil(hollowBawah2x4 + hollowGantungan2x4),
      };
    };
  
    const onSubmit = (data) => {
      const jumlahPvc = calculateJumlahPvc(data);
      const rangkaHollow = calculateRangkaHollow(data);
      const results = {
        jumlahPvc,
        ...rangkaHollow,
      };
      
      const calculation = {
        id: crypto.randomUUID(),
        title: `Plafon PVC ruangan ${data.panjang} x ${data.lebar}`,
        createdAt: new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString(),
        data,
        results
      };
      
      saveCalculation(calculation);
      setResults(results);
      router.push('/calculator-pvc/history');
    };
    
  
  return (
    <>    
      <StepNavigation
        currentStep={step}
        totalSteps={totalSteps}
        onNext={handleNext}
        onPrev={handlePrev}
        isNextDisabled={false} // Set this based on form validation
      />
      <form onSubmit={handleSubmit(onSubmit)}>
    {step === 1 && (
      <div className="space-y-4">
        <div>
          <Label>Panjang Ruangan (meter)</Label>
          <Input
            type="number"
            step="0.1"
            {...register("panjang")}
            className={`mt-1 ${errors.panjang ? "border-red-500" : ""}`}
          />
          {errors.panjang && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.panjang.message}</AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <Label>Lebar Ruangan (meter)</Label>
          <Input
            type="number"
            step="0.1"
            {...register("lebar")}
            className={`mt-1 ${errors.lebar ? "border-red-500" : ""}`}
          />
          {errors.lebar && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{errors.lebar.message}</AlertDescription>
            </Alert>
          )}
        </div>
        <Button
          type="button"
          onClick={() => validateStep(1)}
          className="w-full"
        >
          Lanjut
        </Button>
      </div>
    )}

    {step === 2 && (
      <div className="space-y-4">
        <div>
          <Label>Panjang PVC</Label>
          <RadioGroup
            value={watch("panjangPvc")}
            onValueChange={(value) => setValue("panjangPvc", value)}
            className="flex space-x-4 mt-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="pvc3" />
              <Label htmlFor="pvc3">3m</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="pvc4" />
              <Label htmlFor="pvc4">4m</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6" id="pvc6" />
              <Label htmlFor="pvc6">6m</Label>
            </div>
          </RadioGroup>
          {errors.panjangPvc && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                {errors.panjangPvc.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <Label>Pakai Wall Angle?</Label>
          <RadioGroup
            value={watch("pakaiWallAngle")}
            onValueChange={(value) => setValue("pakaiWallAngle", value)}
            className="flex space-x-4 mt-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="wallAngleYes" />
              <Label htmlFor="wallAngleYes">Ya</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="wallAngleNo" />
              <Label htmlFor="wallAngleNo">Tidak</Label>
            </div>
          </RadioGroup>
          {errors.pakaiWallAngle && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                {errors.pakaiWallAngle.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
        <Button
          type="button"
          onClick={() => validateStep(2)}
          className="w-full"
        >
          Lanjut
        </Button>
      </div>
    )}

    {step === 3 && (
      <div className="space-y-4">
        <div>
          <Label>Jarak Rangka 2x4 (meter)</Label>
          <Input
            type="number"
            step="0.1"
            {...register("jarakRangka2x4")}
            className={`mt-1 ${
              errors.jarakRangka2x4 ? "border-red-500" : ""
            }`}
          />
          {errors.jarakRangka2x4 && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                {errors.jarakRangka2x4.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <Label>Jarak Rangka 4x4 (meter)</Label>
          <Input
            type="number"
            step="0.1"
            {...register("jarakRangka4x4")}
            className={`mt-1 ${
              errors.jarakRangka4x4 ? "border-red-500" : ""
            }`}
          />
          {errors.jarakRangka4x4 && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                {errors.jarakRangka4x4.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <Label>Jarak Rangka Gantungan 2x4 (meter)</Label>
          <Input
            type="number"
            step="0.1"
            {...register("jarakRangkaGantungan2x4")}
            className={`mt-1 ${
              errors.jarakRangkaGantungan2x4 ? "border-red-500" : ""
            }`}
          />
          {errors.jarakRangkaGantungan2x4 && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                {errors.jarakRangkaGantungan2x4.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <Label>Tinggi Gantungan 2x4 (meter)</Label>
          <Input
            type="number"
            step="0.1"
            {...register("tinggiGantungan2x4")}
            className={`mt-1 ${
              errors.tinggiGantungan2x4 ? "border-red-500" : ""
            }`}
          />
          {errors.tinggiGantungan2x4 && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                {errors.tinggiGantungan2x4.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
        <Button type="submit" className="w-full">
          Hitung
        </Button>
      </div>
    )}
  </form>

  {results && (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold mb-2">Hasil Perhitungan:</h3>
      <p>
        Jumlah PVC: {results.jumlahPvc} lembar ({formData.panjangPvc}m)
      </p>
      <p>Wall Angle: {results.wallAngle} batang</p>
      <p>Hollow 4x4: {results.hollow4x4} batang</p>
      <p>Hollow 2x4: {results.hollow2x4} batang</p>
    </div>
  )}
  </>
  )
}
