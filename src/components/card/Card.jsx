import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ id, title, imgUrl, fetchUrl }) => {
  return (
    <Link href={`/${fetchUrl}s/${id}`}>
      <div className="aspect-square rounded-t-xl relative group bg-slate-50  dark:bg-slate-800" >
        <Image src={imgUrl[0]} alt={title} fill={true} objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="dark:text-slate-100 text-slate-700 rounded-b-xl bg-slate-50 drop-shadow-md sm:drop-shadow-lg dark:bg-slate-800 h-12 sm:h-20 py-1 sm:py-2 px-2 sm:px-4">
        <h5 className=" text-sm sm:text-base md:text-lg font-medium sm:font-semibold line-clamp-2">{title}</h5>
      </div>
   </Link>
  );
};

export default Card;
