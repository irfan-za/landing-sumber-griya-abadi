'use client'
import { bankAccounts } from "@/constans";
import { currencyFormat } from "@/utils";
import { ChatBubbleOvalLeftEllipsisIcon, CheckIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function BankTransfer({checkoutId, totalPrice, title}) {
  const [isCopiedPrice, setIsCopiedPrice] = useState(false)
  const [isCopiedNo, setIsCopiedNo] = useState(false)
  const uniquePrice = totalPrice + 111;
  const copyText = (text) => {
    if(text === uniquePrice) {
      navigator.clipboard.writeText(text)
      setIsCopiedPrice(true)
      setTimeout(() => {
        setIsCopiedPrice(false)
      }, 1500);
    }else{
      const modifiedText = text.replace(/\s/g, "");
      navigator.clipboard.writeText(modifiedText);
      setIsCopiedNo(true)
      setTimeout(() => {
        setIsCopiedNo(false)
      }, 1500);
    }
  }
  return (
    <div className="p-3 mx-auto text-center">
      <p className="text-sm sm:text-base">Untuk menyelesaikan proses order, silahkan transfer sejumlah</p>
      <p className="font-bold text-green-500 text-2xl sm:text-3xl my-5">{currencyFormat(uniquePrice)}</p>
      <div className=" p-1 bg-yellow-500  rounded-md">
        <span className="font-semibold text-sm">PENTING! Mohon transfer sesuai sampai dengan 3 digit terakhir</span>
      </div>
      <div className={`py-1 px-3 w-fit border-2 rounded-md my-5 mx-auto hover:bg-green-100 cursor-pointer ${isCopiedPrice && 'bg-green-500 hover:bg-green-500 text-white'}`}>
          <button className="text-xs sm:text-sm flex" onClick={()=>copyText(uniquePrice)}>{isCopiedPrice? <CheckIcon width={16} height={16}/> : <PencilIcon width={16} height={16}/>} Salin Jumlah</button>
      </div>
      <p className="text-sm sm:text-base">Transfer ke salah satu rekening berikut:</p>
      <div className="border-2 mx-auto rounded-md w-fit p-3 flex flex-col space-y-3">
        {
          bankAccounts.map((bank, i) => (
            <div key={i}>
            <Image src={`/footer/${bank.bank}.webp`} alt={`No Rekening ${bank.name}`} width={100} height={50} className="mx-auto" />
            <p className="font-semibold text-sm">No. Rek: {bank.no}</p>
            <p className="font-semibold text-sm">a/n: {bank.name}</p>
            <div className={`py-1 px-3 w-fit border-2 rounded-md my-5 mx-auto hover:bg-green-100 cursor-pointer ${isCopiedNo && 'bg-green-500 hover:bg-green-500 text-white'}`}>
              <button className="text-xs sm:text-sm flex" onClick={()=>copyText(bank.no)}>{isCopiedNo? <CheckIcon width={16} height={16}/> : <PencilIcon width={16} height={16}/>} Salin No. Rek</button>
          </div>
          </div>
          ))
        }
      </div>
      <p className="text-sm sm:text-base mt-5 mb-2">Setelah transfer, mohon konfirmasi pembayaran ke admin kami</p>
      <Link href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE}&text=Kak%20saya%20sudah%20mentransfer%20${currencyFormat(uniquePrice)}%20untuk%20pesanan%20${title}%20ke%20bank%20BNI.%0AOrder%20id%20%3A${checkoutId}.%20Silahkan%20diproses%20ya`} target='_blank'>
        <button className='ring-4 ring-green-300 bg-green-100 hover:bg-green-500 hover:text-white transition-colors duration-300 text-gray-800 font-semibold px-4 py-2 rounded-full space-x-2 text-sm'>
          <ChatBubbleOvalLeftEllipsisIcon strokeWidth={2} width={16} height={16} className='inline-block h-4 w-4 sm:h-6 sm:w-6 mr-2'/>
          Konfirmasi Pembayaran
        </button>
      </Link>
    </div>
  )
}

export default BankTransfer