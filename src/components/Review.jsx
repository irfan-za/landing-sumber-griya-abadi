
import QuoteCard from "./card/QuoteCard"
import { useEffect, useState } from 'react';
export default function Review() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const f=async() => {
      const res= await fetch(`/api/review`)
      const data= await res.json()
      setData(data)
    }
    f()
  }, []);

  return (
    <div className="flex space-x-4 overflow-x-scroll py-12 sm:py-16 rounded-xl bg-slate-300 dark:bg-slate-800 bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-sm snap-x">
      {
          data && data.map(data=>(
              <QuoteCard key={data.id} name={data.name} job={data.job} message={data.message} />
          ))
        }

    </div>
  );
}
