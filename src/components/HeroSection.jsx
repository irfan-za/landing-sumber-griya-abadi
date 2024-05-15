"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 lg:mt-12">
      <div className=" flex flex-col-reverse sm:flex-row sm:justify-between items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-slate-800 dark:text-white mb-4 text-2xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Temukan
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Plafon PVC",
                1000,
                "Atap Galvalume",
                1000,
                "Plafon Gypsum",
                1000,
                "Lis Profil",
                1000,
                "Baja Ringan",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg mb-6 lg:text-xl">
            Hanya Di <strong>Sumber Griya Abadi</strong>
          </p>
          <div>
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}`}
              target="_blank"
              className=" 
              transition duration-1000 delay-1000 ease-in 
              px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary via-blue-400 to-secondary hover:to-primary text-white font-medium"
            >
              Kontak Admin
            </Link>
            <Link
              href="/products"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary via-blue-400 to-secondary hover:to-primary text-slate-900 dark:text-white mt-3"
            >
              <span className="block bg-slate-100 hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full px-5 py-2 font-medium">
                Lihat Produk
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" mb-12"
        >
          <div className="relative w-72 h-48 sm:h-64 lg:w-[30rem] lg:h-[18rem]">
          <Image
            className="rounded-lg drop-shadow-xl"
            objectFit="cover"
            fill={true}
           src={"https://res.cloudinary.com/ddjmxrrij/image/upload/v1700565205/sga/20231119_120639_pzlvoh.jpg"} alt="Toko Sumber Griya Abadi"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
