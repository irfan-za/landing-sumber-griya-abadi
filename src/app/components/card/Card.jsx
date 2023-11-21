import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ id, title, imgUrl, fetchUrl }) => {
  return (
    // <div>
    //   <div
    //     className="h-32 md:h-72 rounded-t-xl relative group"
    //   >
    //     <Image src={imgUrl} alt={title} fill={true} objectFit="cover" className="rounded-t-lg" />
    //     <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-t-lg bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
    //       <Link
    //         href={`/${fetchUrl}s/${id}`}
    //         className="border-2 px-3 py-1 rounded-lg border-white hover:border-primary group/link"
    //       >
    //         <span className="transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white text-white">Lihat</span>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="dark:text-white text-slate-700 rounded-b-xl bg-slate-300 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 py-3 sm:py-6 px-2 sm:px-4">
    //     <h5 className=" text-sm sm:text-xl font-medium sm:font-semibold mb-2 truncate">{title}</h5>
    //   </div>
    // </div>
    <Link href={`/${fetchUrl}s/${id}`}>
      <div className="h-32 md:h-72 rounded-t-xl relative group" >
        <Image src={imgUrl} alt={title} fill={true} objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="dark:text-white text-slate-700 rounded-b-xl bg-slate-300 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 py-3 sm:py-6 px-2 sm:px-4">
        <h5 className=" text-sm sm:text-xl font-medium sm:font-semibold mb-2 truncate">{title}</h5>
      </div>
   </Link>
  );
};

export default Card;
