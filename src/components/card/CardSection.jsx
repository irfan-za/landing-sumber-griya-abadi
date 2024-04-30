"use client";
import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import CardTag from "./CardTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";


const CardSection = () => {
  const [tag, setTag] = useState("product");
  const [data, setData] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  useEffect(() => {
    const f=async() => {
      const res= await fetch(`/api/${tag}`)
      const data= await res.json()
      // limit 4 data
      setData(data.slice(0, 4))
    }
    f()
  }, [tag])
  

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const marqueeItem=[
    {
      direction:'left',
      content:'KENALI LEBIH LANJUT'
    },
    {
      direction:'right',
      content:'BERBAGAI PRODUK PILIHAN KAMI'
    }
  ]
  return (
    <section>
      <div className="mt-4 mb-0 sm:mb-12">
        {
          marqueeItem &&(
            marqueeItem.map((item, index)=>(
              <marquee direction={item.direction} key={index} className="hidden sm:block">
                <h2 className="text-center text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-500 via-blue-400 to-secondary-400 text-transparent">
                  {item.content}
                </h2>
              </marquee>

            ))
          )
        }
        <h2 className="block sm:hidden text-center text-2xl font-bold bg-clip-text bg-gradient-to-r from-primary-500 via-blue-400 to-secondary-400 text-transparent">Kenali Lebih Lanjut</h2>
      </div>
      <div className="text-slate-700 dark:text-white flex flex-row justify-center items-center gap-2 py-6">
        <CardTag
          handleTagChange={handleTagChange}
          name="Produk"
          path="product"
          isSelected={tag === "product"}
        />
        <CardTag
          handleTagChange={handleTagChange}
          name="Jasa"
          path="service"
          isSelected={tag === "service"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
        {data && data.map((data, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Card
              id={data.id}
              title={data.title}
              imgUrl={data.imageUrl}
              fetchUrl={tag}
            />
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center my-6 sm:my-12">
        <Link href={`${tag.toLowerCase().split(' ').join('-')}s`} className="px-2 sm:px-4 py-1 w-fit text-sm sm:text-lg bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white  transition duration-1000 delay-1000 ease-in inline-block sm:w-fit rounded-md mr-4 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-400 hover:to-primary-500 text-white">Lihat lebih banyak</Link>
      </div>
    </section>
  );
};

export default CardSection;
