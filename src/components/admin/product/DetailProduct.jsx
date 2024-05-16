import Carousel from '@/components/Carousel'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function DetailProduct({data}) {
  return (
    <div>
      <Link href='/admin'>
        <ArrowLeftIcon width={24} height={24} strokeWidth={2} className='text-gray-700 cursor-pointer' />
      </Link>
      {data && (
        <div className="h-full">
          <div className="text-end relative h-60 sm:h-96">
            <div className="flex space-x-4 overflow-x-scroll rounded-xl snap-x py-4">
              {data.image_urls.map((img, i) => (
                  <Carousel
                    key={i}
                    image={img}
                    alt={data.title}
                    isSquare={true}
                  />
                ))}
            </div>
          </div>
          <section className="px-2 sm:px-6 text-base sm:text-lg">
            <h1 className="mt-8 mb-4 sm:mt-16 sm:mb-8 font-bold text-xl sm:text-3xl">
              {data.title}
            </h1>
            <strong>Deskripsi :</strong>
            <div className="mb-4 sm:mb-8">
              {
                data.descriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))
              }
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default DetailProduct