import QuoteCard from "./card/QuoteCard";
import { reviews } from "@/constans";

export default function Review() {
  return (
    <div className="flex space-x-4 overflow-x-scroll py-12 sm:py-16 rounded-xl bg-slate-300 dark:bg-slate-800 bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-sm snap-x">
      {reviews.map((data) => (
        <QuoteCard key={data.id} name={data.name} job={data.job} message={data.message} />
      ))}
    </div>
  );
}
