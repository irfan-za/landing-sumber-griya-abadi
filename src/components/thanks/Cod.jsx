import { currencyFormat } from '@/utils';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function Cod({orderId}) {
  const price= 1000000;
  return (
    <div className='text-center'>
      <p>Pesanan Anda akan segera kami kirim.</p>
      <p>Silahkan tunggu kedatangan kurir dalam 2-5 hari kedepan dan siapkan pembayaran untuk dibayarkan langsung ke kurir  :</p>
      <table className='mx-auto mt-5'>
        <tr>
          <td>Harga produk</td>
          <td>:</td>
          <td>{currencyFormat(price)}</td>
        </tr>
        <tr>
          <td>Ongkos Kirim</td>
          <td>:</td>
          <td>{currencyFormat(price)}</td>
        </tr>
        <tr>
          <td colSpan={3} className='text-center pt-3 font-semibold'>Total Pembayaran :</td>
        </tr>
      </table>
      <p className="font-bold text-green-500 text-2xl sm:text-3xl my-5">{currencyFormat(price)}</p>
      <p className="text-sm sm:text-base mb-2">Jangan lupa untuk mengkonfirmasi pesanan Anda ke admin kami.</p>
      <Link href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE}&text=Kak%20saya%20mau%20mengkonfirmasi%20pesanan%20COD%20produk%20JUDUL.%20Order%20id:%20${orderId}.%20Silahkan%20diproses%20ya`} target='_blank'>
        <button className='ring-4 ring-green-300 bg-green-100 hover:bg-green-500 hover:text-white transition-colors duration-300 text-gray-800 font-semibold px-4 py-2 rounded-full space-x-2 text-sm mx-auto'>
          <ChatBubbleOvalLeftEllipsisIcon strokeWidth={2} width={16} height={16} className='inline-block h-4 w-4 sm:h-6 sm:w-6 mr-2'/>
          Konfirmasi Pesanan
        </button>
      </Link>
    </div>
  )
}

export default Cod