'use client'
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function Timer({discountDate, discountDuration}) {
  const router= useRouter()
  const [isPromo, setIsPromo] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const date= new Date();
    let target = new Date(date.getTime() + (discountDuration * 60 * 60 * 1000));
    if(discountDate === undefined){
      setDate()
    }else{
      if(date.getDate() !== new Date(discountDate.value).getDate()){
        setDate()
      }else{
        target = new Date(discountDate.value)
      }
    }

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setIsPromo(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // store date to cookie
  const setDate=()=>{
    const date= new Date();
    const target= new Date(date.getTime() + (discountDuration * 60 * 60 * 1000));
    setCookie('date_timer', target)
    router.refresh()
  }

  
  
  return (
    <>
    {isPromo && (
      <>
        <p className='font-medium text-sm sm:text-base mt-4'>Batas waktu promo</p>
        <div className="inline-flex space-x-2 mx-auto">
          <div className="flex flex-col items-center justify-center bg-primary rounded-lg h-fit p-2 sm:space-y-1">
            <span className="text-2xl sm:text-4xl font-bold text-white">{days}</span>
            <span className="text-sm font-medium text-white">Hari</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-primary rounded-lg h-fit p-2 sm:space-y-1">
            <span className="text-2xl sm:text-4xl font-bold text-white">{hours}</span>
            <span className="text-sm font-medium text-white">Jam</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-primary rounded-lg h-fit p-2 sm:space-y-1">
            <span className="text-2xl sm:text-4xl font-bold text-white">{minutes}</span>
            <span className="text-sm font-medium text-white">Menit</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-primary rounded-lg h-fit p-2 sm:space-y-1">
            <span className="text-2xl sm:text-4xl font-bold text-white">{seconds}</span>
            <span className="text-sm font-medium text-white">Detik</span>
          </div>
        </div>
      </>
      )}
    </>
  )
}

export default Timer