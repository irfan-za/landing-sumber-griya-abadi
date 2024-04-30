import Image from "next/image"
import Link from "next/link"

function QuoteCard({name, job, message}) {
  return (
        <div className="sm:w-[400px] min-w-[320px] mx-auto rounded-lg bg-white dark:bg-slate-700 shadow-lg px-5 py-5 snap-center">
          <div className="w-full mb-4 sm:mb-10">
              <div className="text-xl sm:text-3xl text-primary-500 text-left leading-tight h-3">“</div>
              <p className="text-sm text-gray-600 dark:text-white text-center px-5">{message}</p>
              <div className="text-xl sm:text-3xl text-primary-500 text-right leading-tight h-3 -mt-3">”</div>
          </div>
          <div className="w-full">
              <p className="text-sm sm:text-md capitalize text-primary-500 font-bold text-center">{name}</p>
              <p className="text-xs text-gray-500 dark:text-slate-100 text-center">{job}</p>
          </div>
      </div>
  )
}

export default QuoteCard
