'use client'
import ShipmentOption from '@/components/checkout/ShipmentOption'
import { ArrowRightCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const { z } = require("zod");

function CheckoutPage({params}) {
  const [provinces, setProvinces]=useState(null)
  const [cities, setCities]=useState(null)
  const [subdistricts, setSubdistricts]=useState(null)
  const [shipmentOptions, setShipmentOptions] = useState(null)
  const [product, setProduct] = useState(null)
  const [currentSubdistrictId, setCurrentSubdistrictId]=useState(null)
  const router= useRouter()

  const fetchCity=async(province_id)=>{
    await fetch(`${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/city?province_id=${province_id}`)
    .then(response => response.json())
    .then(data => {
      setCities(data.data)
    })
  }
  const fetchSubdistrict=async(city_id)=>{
    await fetch(`${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/subdistrict?city_id=${city_id}`)
    .then(response => response.json())
    .then(data => {
      setSubdistricts(data.data)
    })
  }
  const fetchShipmentOptions=async()=>{
    const formData = new FormData();
    formData.append('origin', '{"id":1251,"type":"subdistrict","name":"Ngemplak","province_id":10,"city_id":91,"city_name":"Kab. Boyolali","subdistrict_id":1251,"subdistrict_name":"Ngemplak"}'); 
    formData.append('destination', `{"id":${currentSubdistrictId},"type":"subdistrict"}`);
    formData.append('couriers', '["ninja","jne", "jnt", "sicepat"]');
    formData.append('product', `{"weight":${product.weight}}`); 

    await fetch(`${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/cost`,{
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setShipmentOptions(data.data)
    })
  }
  const setProductData=async(id)=>{
    if(id==='1'){
      setProduct({id: params.id, name: 'Bor Listrik Serbaguna Discount 50%', price: 100000, weight: 1000})
    }else if(id==='2'){
      setProduct({id: params.id, name: 'Bor Listrik Serbaguna Beli 2 gratis 1', price: 200000, weight: 3000})
    }
  }

  const [formData, setFormData] = useState({
    product_id: "",
    product_name: "",
    product_price: 0,
    product_weight: 0,
    shipment: 0,
    total: 0,
    payment_method: "",
    province: "",
    city: "",
    subdistrict: "",
    postal: "",
    address: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const bodySchema = z.object({
    product_id: z.string(),
    product_name: z.string(),
    product_price: z.number(),
    product_weight: z.number(),
    shipment: z.number(),
    total: z.number(),
    payment_method: z.string(),
    province: z.string(),
    city: z.string(),
    subdistrict: z.string(),
    postal: z.string().optional(),
    address: z.string(),
    name: z.string(),
    phone: z.string(),
  });

  const submitForm=async(e)=>{
      e.preventDefault();
      try{
        const validatedData = formSchema.parse(formData);
        console.log(validatedData);
      }
      catch(error){ 
        console.error("Validation error:", error);
        setErrors(error.errors);
      }

  }


  useEffect(() => {
    const f=async() => {
      await fetch(`${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/province`)
      .then(response => response.json())
      .then(data => {
        setProvinces(data.data)
      })
    }
    f()
  }, [])
  useEffect(()=>{
    fetchShipmentOptions()
  },[product, currentSubdistrictId])

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
        <form method="post" onSubmit={submitForm}>
          <div className='grid grid-cols-12 gap-4 mx-auto w-[90%] sm:max-w-md lg:max-w-xl'>
            <div className='col-span-12'>
              <label className='block font-semibold text-lg'>Pilih Promo :</label>
                <div className='bg-white flex space-x-2 border pl-2'>
                  <input type='radio' id='promo1' name='promo' value='1' checked onChange={(e)=>{setProductData(e.target.value); handleChange()}}/>
                  <label htmlFor='promo1' className='w-full p-2'>Diskon 50%</label>
                </div>
                <div className='bg-white flex space-x-2 border pl-2'>
                  <input type='radio' id='promo2' name='promo' value='2' onChange={(e)=>{setProductData(e.target.value); handleChange()}}/>
                  <label htmlFor='promo2' className='w-full p-2'>Beli 2 Gratis 1</label>
                </div>
            </div>
            <div className='col-span-12'>
              <label className='block font-semibold text-lg my-3'>Data Penerima :</label>
              <label htmlFor='name' className='block'>Nama Lengkap</label>
              <input type='text' id='name' name='name' className='w-full p-2 border-2 border-slate-300 rounded-md' onChange={handleChange}/>
            </div>
            <div className='col-span-12'>
              <label htmlFor='phone' className='block'>Nomor Whatsapp</label>
              <input type='text' id='phone' name='phone' placeholder='081...' className='w-full p-2 border-2 border-slate-300 rounded-md' onChange={handleChange}/>
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
              className='w-full p-2 border-2 border-slate-300 rounded-md'
              onChange={(e)=>setCurrentSubdistrictId(e.target.value)}>
                <option value=''>Pilih Kecamatan</option>
                {subdistricts && subdistricts.map((sub, i)=><option key={i} value={sub.subdistrict_id}>{sub.subdistrict_name}</option>)}
              </select>
            </div>
            <div className='col-span-12'>
              <label htmlFor='postal' className='block'>Kode Pos</label>
              <input type='number' id='postal' name='postal' className='w-full p-2 border-2 border-slate-300 rounded-md' onChange={handleChange}/>
            </div>
            <div className='col-span-12'>
              <label htmlFor='address' className='block'>Alamat Lengkap</label>
              <textarea id='address' name='address' placeholder='contoh: RT 1/RW 3 Banaran' className='w-full p-2 border-2 border-slate-300 rounded-md'></textarea>
            </div>

            {
              shipmentOptions && <ShipmentOption data={shipmentOptions} product={product} setProduct={setProduct} />
            }
            <div className='col-span-12'>
              <label className='block font-semibold text-lg'>Metode Pembayaran :</label>
                <div className='bg-white flex space-x-2 border pl-2'>
                  <input type='radio' id='bank' name='paymentMethod' value='bank-transfer' onChange={handleChange}/>
                  <label htmlFor='bank' className='w-full p-2'>
                    <Image src={'/payment/bank.svg'} alt='Pembayaran melalui bank transfer' className='inline' width={48} height={12} /> Bank Transfer
                  </label>
                </div>
                <div className='bg-white flex space-x-2 border pl-2'>
                  <input type='radio' id='cod' name='paymentMethod' value='cod' onChange={handleChange}/>
                  <label htmlFor='cod' className='w-full p-2'>
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