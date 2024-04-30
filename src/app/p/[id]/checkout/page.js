'use client'
import { ArrowRightCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function CheckoutPage() {
  const [provinces, setProvinces]=useState(null)
  const [cities, setCities]=useState(null)
  const [subdistricts, setSubdistricts]=useState(null)

  const router= useRouter()

  useEffect(() => {
    const f=async() => {
      await fetch('https://api.orderonline.id/shipping/province')
      .then(response => response.json())
      .then(data => {
        setProvinces(data.data)
      })
    }
    f()
  }, [])
  const fetchCity=async(province_id)=>{
    await fetch(`https://api.orderonline.id/shipping/city?province_id=${province_id}`)
    .then(response => response.json())
    .then(data => {
      setCities(data.data)
    })
  }
  const fetchSubdistrict=async(city_id)=>{
    await fetch(`https://api.orderonline.id/shipping/subdistrict?city_id=${city_id}`)
    .then(response => response.json())
    .then(data => {
      setSubdistricts(data.data)
    })
  }
  return (
    <div className='lg:max-w-[80%] bg-slate-100 rounded-t-lg mx-auto container pb-10'>
      <div className='flex justify-end p-3'>
      <XMarkIcon 
        onClick={()=>router.back()}
        className='w-8 h-8 rounded-sm sm:rounded-xl hover:cursor-pointer hover:bg-blue-200' />
      </div>
      <div>
        <h1 className='text-center font-bold text-2xl lg:text-3xl my-4'>Bor Listrik Serbaguna</h1>
        <div className='mx-auto aspect-square h-64 sm:h-96 relative'>
          <Image src='https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg' alt='bor listrik' fill={true} objectFit='cover' className='rounded-lg' />
        </div>
        <p className='text-center text-lg font-medium my-10'>Silahkan isi data dibawah ini untuk data pengiriman paket.</p>
      </div>
      <div>
        <form method="post">
          <div className='grid grid-cols-12 gap-4 mx-auto w-[90%] sm:max-w-md lg:max-w-xl'>
            <div className='col-span-12'>
              <label className='block font-semibold text-lg'>Pilih Promo :</label>
                <div className='bg-white flex space-x-2 border p-2'>
                  <input type='radio' id='promo1' name='promo' value='diskon50' />
                  <label htmlFor='promo1'>Diskon 50%</label>
                </div>
                <div className='bg-white flex space-x-2 border p-2'>
                  <input type='radio' id='promo2' name='promo' value='beli2gratis1' />
                  <label htmlFor='promo2'>Beli 2 Gratis 1</label>
                </div>
            </div>
            <div className='col-span-12'>
              <label className='block font-semibold text-lg my-3'>Data Penerima :</label>
              <label htmlFor='name' className='block'>Nama Lengkap</label>
              <input type='text' id='name' name='name' className='w-full p-2 border-2 border-slate-300 rounded-md' />
            </div>
            <div className='col-span-12'>
              <label htmlFor='phone' className='block'>Nomor Whatsapp</label>
              <input type='text' id='phone' name='phone' className='w-full p-2 border-2 border-slate-300 rounded-md' />
            </div>
            <div className='col-span-12'>
              <label htmlFor='province' className='block'>Provinsi</label>
              <select 
              id='province' 
              name='province' 
              className='w-full p-2 border-2 border-slate-300 rounded-md'
              onChange={(e)=>fetchCity(e.target.value)}>
                <option value=''>Pilih Provinsi</option>
                {provinces && provinces.map((prov, i)=><option key={i} value={prov.province_id}>{prov.province_name}</option>)}
              </select>
            </div>
            <div className='col-span-12'>
              <label htmlFor='city' className='block'>Kota</label>
              <select
              id='city'
              name='city'
              className='w-full p-2 border-2 border-slate-300 rounded-md'
              onChange={(e)=>fetchSubdistrict(e.target.value)}>
                <option value=''>Pilih Kota</option>
                {cities && cities.map((city, i)=><option key={i} value={city.city_id}>{city.city_name_with_type}</option>)}
              </select>
            </div>
            <div className='col-span-12'>
              <label htmlFor='subdistrict' className='block'>Kecamatan</label>
              <select
              id='subdistrict'
              name='subdistrict'
              className='w-full p-2 border-2 border-slate-300 rounded-md'>
                <option value=''>Pilih Kecamatan</option>
                {subdistricts && subdistricts.map((sub, i)=><option key={i} value={sub.subdistrict_id}>{sub.subdistrict_name}</option>)}
              </select>
            </div>
            <div className='col-span-12'>
              <label htmlFor='postal' className='block'>Kode Pos</label>
              <input type='number' id='postal' name='postal' className='w-full p-2 border-2 border-slate-300 rounded-md' />
            </div>
            <div className='col-span-12'>
              <label htmlFor='address' className='block'>Alamat Lengkap</label>
              <textarea id='address' name='address' className='w-full p-2 border-2 border-slate-300 rounded-md'></textarea>
            </div>

            <div className='col-span-12'>
              <label className='block font-semibold text-lg'>Metode Pembayaran :</label>
                <div className='bg-white flex space-x-2 border p-2'>
                  <input type='radio' id='bank' name='paymentMethod' value='bank' />
                  <label htmlFor='bank'>
                    <Image src={'/payment/bank.svg'} alt='Pembayaran melalui bank transfer' className='inline' width={48} height={12} /> Bank Transfer
                  </label>
                </div>
                <div className='bg-white flex space-x-2 border p-2'>
                  <input type='radio' id='cod' name='paymentMethod' value='cod' />
                  <label htmlFor='cod'>
                    <Image src={'/payment/cod.svg'} alt='Pembayaran melalui COD' className='inline' width={48}  height={12} /> COD (Bayar Ditempat)
                  </label>
                </div>
            </div>
            <div className='col-span-12'>
              <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-md flex items-center justify-center'>
                Beli Sekarang <ArrowRightCircleIcon width={24} height={24} className='ml-2' /> 
              </button>
            </div>
          </div>
        </form>
      </div>
        
    </div>
  )
}

export default CheckoutPage