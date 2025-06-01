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
import StepNavigation from "../stepNavigation";
import { useRouter } from "next/navigation";


const formSchema = z.object({
  panjang: z.string().min(1, "Silahkan masukkan panjang ruangan"),
  lebar: z.string().min(1, "Silahkan masukkan lebar ruangan"),
  panjangPvc: z.string().min(1, "Silahkan pilih panjang PVC"),
  pakaiWallAngle: z.string().min(1, "Silahkan pilih penggunaan wall angle"),
  pakaiKawatGantungan: z.string().min(1, "Silahkan pilih penggunaan kawat gantungan"),
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
  const [errorStep1, setErrorStep1] = useState(null);
  const [errorStep2, setErrorStep2] = useState(null);

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
        pakaiKawatGantungan: "false",
        jarakRangka2x4: "0.6",
        jarakRangka4x4: "1",
        jarakRangkaGantungan2x4: "1",
        tinggiGantungan2x4: "1",
      },
    });
  
    
    useEffect(() => {
      const savedData = localStorage.getItem("pvcCalculatorData");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        Object.entries(parsedData).forEach(([key, value]) => {
          setValue(key , value);
        });
      }
    }, [setValue]);
  
    
    const formData = watch();
    useEffect(() => {
      localStorage.setItem("pvcCalculatorData", JSON.stringify(formData));
    }, [formData]);
  
    const validateStep = async (stepNumber) => {
      let fieldsToValidate = [];
  
      switch (stepNumber) {
        case 1:
          fieldsToValidate = ["panjang", "lebar"];
          const dimensionError = validateDimensions();
          if (dimensionError) {
            setErrorStep1(dimensionError);
            return false;
          }
          setErrorStep1(null);
          break;
          case 2:
            fieldsToValidate = ["panjangPvc", "pakaiWallAngle", "pakaiKawatGantungan"];
            const pnajangPvcError = validatePanjangPvc();
            if (pnajangPvcError) {
              setErrorStep2(pnajangPvcError);
              return false;
            }
            setErrorStep2(null);
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

    const validateDimensions = () => {
      if (parseFloat(formData.lebar) > parseFloat(formData.panjang)) {
        return "Lebar harus lebih kecil dari panjang";
      }
      return null;
    };
    const validatePanjangPvc = () => {
      if (parseFloat(formData.lebar) > parseFloat(formData.panjangPvc)) {
        return "Panjang PVC tidak mencukupi untuk ruangan Anda. Silahkan pilih PVC yang lebih panjang.";
      }
      return null;
    };
  
    const calculateJumlahPvc = (data) => {
      const p = parseFloat(data.panjang);
      const l = parseFloat(data.lebar);
      const lebarPvc = 0.2;
      const panjangPvc = parseFloat(data.panjangPvc);
      const panjangPvcMinLebar=panjangPvc - l
      const panjangPvcMinPanjang=panjangPvc - p
  
      if (panjangPvcMinPanjang < 0 && panjangPvcMinLebar >= 0) {
        return {
          jumlahPvc:Math.ceil(p / lebarPvc),
          sisaPvc:panjangPvc-l,
          lisPvc:Math.ceil((p+l)*2/4),
        }
      } else if ( panjangPvcMinLebar< panjangPvcMinPanjang) {
        return {
          jumlahPvc:Math.ceil(p / lebarPvc),
          sisaPvc:panjangPvc-l,
          lisPvc:Math.ceil((p+l)*2/4),
        }
      } else {
        return {
          jumlahPvc:Math.ceil(l / lebarPvc),
          sisaPvc:panjangPvc-p,
          lisPvc:Math.ceil((p+l)*2/4),
        }
      }
    };
  
    const calculateRangkaHollow = (data) => {
      const p = parseFloat(data.panjang);
      const l = parseFloat(data.lebar);
      const isPakaiWallAngle = data.pakaiWallAngle === "true";
      const isPakaiKawatGantungan = data.pakaiKawatGantungan === "true";
      const jarakRangka2x4 = parseFloat(data.jarakRangka2x4);
      const jarakRangka4x4 = parseFloat(data.jarakRangka4x4);
      const jarakGantungan = parseFloat(data.jarakRangkaGantungan2x4);
      const tinggiGantungan = parseFloat(data.tinggiGantungan2x4);
      const panjangPvc = parseFloat(data.panjangPvc);
      const panjangPvcMinLebar=panjangPvc - l
      const panjangPvcMinPanjang=panjangPvc - p
  
      let hollowTepi2x4 = 0;
      let wallAngle = 0;
      let hollowGantungan2x4=0;
      let kawatGantungan=0;
      let hollowBawah2x4 = 0;
      let hollowAtas4x4 =0;

      if (isPakaiWallAngle) {
        wallAngle = ((p + l) * 2) / 3;
      } else {
        hollowTepi2x4 = ((p + l) * 2) / 4;
      }
          
  
      
      if (panjangPvcMinPanjang < 0 && panjangPvcMinLebar >= 0) {
        hollowBawah2x4=((Math.ceil(l / jarakRangka2x4)-1) * p) / 4;
        hollowAtas4x4=((Math.ceil(p/jarakRangka4x4) - 1) * l) / 4;
      } else if ( panjangPvcMinLebar< panjangPvcMinPanjang) {
        hollowBawah2x4=((Math.ceil(l / jarakRangka2x4)-1) * p) / 4;
        hollowAtas4x4=((Math.ceil(p/jarakRangka4x4) - 1) * l) / 4;
      } else {
        hollowBawah2x4=((Math.ceil(p / jarakRangka2x4)-1) * l) / 4;
        hollowAtas4x4=((Math.ceil(l/jarakRangka4x4) - 1) * p) / 4;
      }
      if(isPakaiKawatGantungan){
        kawatGantungan=(((p * l) / jarakGantungan) * tinggiGantungan);
      }else{
        hollowGantungan2x4 =(((p * l) / jarakGantungan) * tinggiGantungan) / 4;
      }
  
      return {
        wallAngle: Math.ceil(wallAngle),
        kawatGantungan: Math.ceil(kawatGantungan),
        hollow4x4: Math.ceil(hollowAtas4x4),
        hollow2x4: Math.ceil( isPakaiKawatGantungan?hollowBawah2x4 + hollowTepi2x4 :hollowBawah2x4 + hollowTepi2x4 +hollowGantungan2x4),
      };
    };
  
    const onSubmit = (data) => {
      const pvc = calculateJumlahPvc(data);
      const rangkaHollow = calculateRangkaHollow(data);
      const results = {
        jumlahPvc:pvc.jumlahPvc,
        sisaPvc:pvc.sisaPvc,
        lisPvc:pvc.lisPvc,
        ...rangkaHollow,
      };
      
      const calculation = {
        id: crypto.randomUUID(),
        title: `Plafon PVC ruangan ${data.panjang} x ${data.lebar}`,
        createdAt: new Date().toISOString(),
        data,
        results
      };
      
      saveCalculation(calculation, 'pvcCalculations');
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
        isNextDisabled={false} 
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
        {errorStep1 && (
  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
    {errorStep1}
  </div>)}
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
        <div>
          <Label>Pakai Kawat Gantungan?</Label>
          <RadioGroup
            value={watch("pakaiKawatGantungan")}
            onValueChange={(value) => setValue("pakaiKawatGantungan", value)}
            className="flex space-x-4 mt-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="kawatGantunganYes" />
              <Label htmlFor="kawatGantunganYes">Ya</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="kawatGantunganNo" />
              <Label htmlFor="kawatGantunganNo">Tidak</Label>
            </div>
          </RadioGroup>
          {errors.pakaiKawatGantungan && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                {errors.pakaiKawatGantungan.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
        {errorStep2 && (
  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
    {errorStep2}
  </div>)}
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
      {results.sisaPvc > 0 && (
                  <p>
                    Sisa PVC: {calculation.results.sisaPvc}m (
                    {calculation.results.jumlahPvc} lembar)
                  </p>
                )}
      <p>Lis PVC: {results.lisPvc} batang</p>
      {results.wallAngle > 0 && (
        <p>Wall Angle: {results.wallAngle} batang</p>
      )}
      {
        results.kawatGantungan > 0 && (
          <p>Kawat Gantungan: {results.kawatGantungan}m</p>
        )
      }
      <p>Hollow 4x4: {results.hollow4x4} batang</p>
      <p>Hollow 2x4: {results.hollow2x4} batang</p>
    </div>
  )}
  </>
  )
}
