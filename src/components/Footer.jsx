import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoogleMaps from "./GoogleMaps";

const Footer = () => {
  const socialMedia=[
    {
      link: 'https://www.instagram.com/sumbergriyaabadi',
      alt: 'Instagram Sumber Griya Abadi',
      image: '/ig.svg'
    },
    {
      link: 'https://web.facebook.com/sumbergriyaabadi?_rdc=1&_rdr',
      alt: 'Facebook Sumber Griya Abadi',
      image: '/fb.svg'
    },
    {
      link: 'https://www.tiktok.com/@sumbergriyaabadi',
      alt: 'Tiktok Sumber Griya Abadi',
      image: '/tiktok.svg'
    },
    {
      link: 'https://www.youtube.com/@sumbergriyaabadi',
      alt: 'Youtube Sumber Griya Abadi',
      image: '/yt.svg'
    },
    {
      link: 'https://api.whatsapp.com/send?phone=6285602904294&text=halo%20pak%2C%20saya%20mau%20konsultasi%20Plafon.',
      alt: 'Whatsapp Sumber Griya Abadi',
      image: '/wa.svg'
    },
  ]
  return (
    <>
      <section className="grid md:grid-cols-2 pb-12 sm:pb-24 pt-6 sm:pt-12 gap-4 relative  border border-t-[#33353F] border-l-transparent border-r-transparent mt-24 py-4 px-4 sm:px-12 container sm:max-w-[90%] mx-auto ">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-slate-800 dark:text-white my-2">
            Sumber Griya Abadi
          </h5>
          <p className="text-slate-700 dark:text-slate-200 mb-4 pb-2 max-w-md border-b-2 border-primary-500">
            Belanja plafon lengkap dan terpercaya hanya di Sumber Griya Abadi.
            <br /><br />
            📍Jl Mangu-Sambi km.3, Sobokerto, Ngemplak, Boyolali, Jawa Tengah.
            <br />
            <strong>085 602 904 294 (WhatsApp)</strong>
          </p>
          <span className="text-xl font-bold text-slate-800 dark:text-white">Media Sosial :</span>
          <div className="flex flex-row gap-2">
            {
              socialMedia && socialMedia.map((item)=>(
                <Link href={item.link} key={item.link}>
                  <Image src={item.image} alt={item.alt} className="dark:invert" width={36} height={36} />
                </Link>
              ))
            }
          </div>
        </div>
        <div >
          <GoogleMaps/>
        </div>
      </section>
      <footer className="z-10">
        <div className="container p-4 sm:p-8 text-center">
          <p className="text-slate-700 dark:text-slate-200 text-sm"> Copyright {new Date().getFullYear()} | Sumber Griya Abadi</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
