import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-slate-700 dark:text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="relative w-48 h-48 sm:w-80 sm:h-80 lg:w-[25rem] lg:h-[25rem] mx-auto">
        <Image 
          className="rounded-lg drop-shadow-xl"
          objectFit="cover"
          fill={true}
          src="https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga/sga_uttegw.png" 
          alt=" Logo Sumber Griya Abadi" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-4">Tentang Kami</h2>
          <p className="text-base lg:text-lg">
            <strong>Sumber Griya Abadi (SGA)</strong> merupakan perusahaan jasa pemasangan plafon dan distribusi bahan material bangunan. Kami berdiri sejak 2008 di Solo, Jawa Tengah. Hingga saat ini, kami selalu konsisten melayani pemasangan plafon secara professional dan berkualitas.  
          </p>
          <p className="text-base lg:text-lg my-2">
            <strong>Kami</strong> menjual berbagai pilihan produk plafon PVC dan Gypsum serta bahan material lainnya.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
