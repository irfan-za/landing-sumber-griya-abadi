import { XMarkIcon } from '@heroicons/react/24/outline'
import ButtonContact from '../ButtonContact'
import Carousel from '../Carousel'
import Link from 'next/link'
import Image from 'next/image'
import { marketplaces, socialMedia } from '@/constans'


export default function DetailCard({ data, type = "products" }) {
  const backUrl = type === "products" ? "/products" : "/services";

  return (
    <div className='mt-8 sm:mt-12 pb-10 sm:pb-20 min-h-screen
     bg-slate-300 dark:bg-slate-800 w-full flex flex-col rounded-t-2xl sm:rounded-t-3xl'>
        {
          data && (
            <div className='h-full'>
              <div className="text-end relative h-60 sm:h-96">
                <Link href={backUrl}>
                  <XMarkIcon 
                  className='w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl hover:cursor-pointer hover:bg-primary-hover inline-block relative' />
                </Link>
                <div className="flex space-x-4 overflow-x-scroll rounded-xl snap-x py-4">
                  {
                    data.image_urls?.map((img,i)=>
                      <Carousel key={i} image={img} alt={data.title} isSquare={true} />
                  )
                  }
                </div>
              </div>
                  <section className='px-2 sm:px-6 text-base sm:text-lg'>
                    <h1 className='mt-8 mb-4 sm:mt-16 sm:mb-8 font-bold text-xl sm:text-3xl'>{data.title}</h1>
                    <strong>Deskripsi :</strong>
                    {data.descriptions ? (
                      <ul className='mb-4 sm:mb-8 list-disc list-inside'>
                        {data.descriptions.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : data.description ? (
                      <div className='mb-4 sm:mb-8' dangerouslySetInnerHTML={{ __html: data.description }} />
                    ) : null}
                    <ButtonContact title={data.title}/>

                    {/* Marketplace & Social Media Links */}
                    <div className='mt-8 sm:mt-12 pt-6 border-t border-slate-400 dark:border-slate-600'>
                      {type === "products" && <><h3 className='font-semibold text-lg sm:text-xl mb-4'>Beli di Marketplace</h3>
                      <div className='flex gap-3 sm:gap-4 mb-6'>
                        {marketplaces.map((mp, i) => (
                          <Link
                            key={i}
                            href={mp.link}
                            target='_blank'
                            className='flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors'
                          >
                            <Image src={mp.image} alt={mp.alt} width={48} height={48} />
                          </Link>
                        ))}
                      </div></>}

                      <h3 className='font-semibold text-lg sm:text-xl mb-4'>Ikuti Kami</h3>
                      <div className='flex gap-3 sm:gap-4'>
                        {socialMedia.map((sm, i) => (
                          <Link
                            key={i}
                            href={sm.link}
                            target='_blank'
                            className='p-2.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors'
                          >
                            <Image src={sm.image} alt={sm.alt} width={24} height={24} className='dark:invert' />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </section>
              </div>
            )
        }
    </div>
  )
}
