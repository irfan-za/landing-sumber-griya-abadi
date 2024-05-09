"use client";
import ProductSkeleton from "@/components/checkout/ProductSkeleton";
import ShippingMenu from "@/components/checkout/ShippingMenu";
import { currencyFormat } from "@/utils";
import { createItem, getItem, getItemsWithFilter } from "@/utils/supabaseCRUD";
import { ArrowRightCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const { z } = require("zod");

function CheckoutPage({ params }) {
  const [provinces, setProvinces] = useState(null);
  const [cities, setCities] = useState(null);
  const [subdistricts, setSubdistricts] = useState(null);
  const [shippingOption, setShippingOption] = useState(null);
  const [product, setProduct] = useState(null);
  const [currentSubdistrictId, setCurrentSubdistrictId] = useState(null);
  const [address, setAddress] = useState({
    province: "",
    city: "",
    subdistrict: "",
  });
  const [body, setBody] = useState({
    product_id: "",
    product_variant: "Beli 1",
    product_price: 0,
    product_weight: 0,
    shipping_cost: 0,
    total_price: 0,
    payment_method: "",
    province_id: "",
    city_id: "",
    subdistrict_id: "",
    postal: "0",
    detail_address: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState(null);
  const router = useRouter();

  async function fetchCity(province_id) {
    await fetch(
      `${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/city?province_id=${province_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCities(data.data);
      });
  }
  const fetchSubdistrict = async (city_id) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/subdistrict?city_id=${city_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSubdistricts(data.data);
      });
  };
  const fetchShippingOptions = async (
    weight = product.weight,
    subdistrict_id = currentSubdistrictId
  ) => {
    const formData = new FormData();
    formData.append(
      "origin",
      '{"id":1251,"type":"subdistrict","name":"Ngemplak","province_id":10,"city_id":91,"city_name":"Kab. Boyolali","subdistrict_id":1251,"subdistrict_name":"Ngemplak"}'
    );
    formData.append(
      "destination",
      `{"id":${subdistrict_id},"type":"subdistrict"}`
    );
    formData.append("couriers", '["ninja","jne", "jnt", "sicepat"]');
    formData.append("product", `{"weight":${weight}}`);
    if (subdistrict_id && weight > 0) {
      await fetch(`${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/cost`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setShippingOption(data.data);
        });
    }
  };
  // const setProductVariant = async (val) => {
  //   if (val === "Beli 1") {
  //     setBody({
  //       product_variant: "Beli 1",
  //       product_price: product.discount_price,
  //       product_weight: product.weight,
  //     });
  //   } else if (val === "Beli 2 Gratis 1") {
  //     setBody({
  //       product_variant: "Beli 2 Gratis 1",
  //       product_price: product.discount_price * 2,
  //       product_weight: product.weight * 3,
  //     });
  //   }
  // };

  const handleChange = (e) => {
    setBody((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const changeAddress = (key, value) => {
    setAddress((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const bodySchema = z.object({
    product_id: z
      .string({ message: "Id produk tidak valid" })
      .min(3, { message: "Id produk tidak valid" }),
    product_variant: z.string({ message: "Wajib diisi" }).min(3, {
      message: "Pilih varian produk",
    }),
    product_price: z.number().min(1, { message: "Harga produk tidak valid" }),
    product_weight: z.number().min(1, { message: "Berat produk tidak valid" }),
    shipping_cost: z.number().min(1, { message: "Pilih kurir pengiriman" }),
    total_price: z.number({ message: "Total harga tidak valid" }),
    payment_method: z
      .string({ message: "Wajib diisi" })
      .min(1, { message: "Pilih metode pembayaran" }),
    province_id: z
      .string({ message: "Wajib diisi" })
      .min(1, { message: "Masukkan nama Provinsi yang valid" }),
    city_id: z
      .string({ message: "Wajib diisi" })
      .min(1, { message: "Masukkan nama Kota yang valid" }),
    subdistrict_id: z
      .string({ message: "Wajib diisi" })
      .min(1, { message: "Masukkan nama Kecamatan yang valid" }),
    postal: z.string().optional(),
    detail_address: z
      .string({ message: "Wajib diisi" })
      .min(1, { message: "Masukkan Alamat lengkap yang valid" }),
    name: z
      .string({ message: "Wajib diisi" })
      .min(3, { message: "Silahkan masukkan nama penerima" }),
    phone: z
      .string({ message: "Wajib diisi" })
      .min(10, { message: "Masukkan nomor telepon/WA yang valid" })
      .max(13, { message: "Masukkan nomor telepon/WA yang valid" }),
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      bodySchema.parse(body);

      const data = await getItemsWithFilter("users", "phone", body.phone);
      if (data && data.length === 0) {
        const currentUser = await createItem("users", [
          {
            name: body.name,
            phone: body.phone,
            detail_address: body.detail_address,
            ...address,
          },
        ]);
        const checkoutData = await createItem("checkouts", {
          ...body,
          user_id: currentUser.id,
        });
        if (checkoutData) {
          setBody({
            ...body,
            user_id: currentUser.id,
          });
          router.push(
            `/p/${params.id}/checkout/thanks/${body.payment_method}?checkout_id=${checkoutData[0].id}`
          );
        }
      } else {
        const currentUser = data[0];
        const checkoutData = await createItem("checkouts", {
          ...body,
          user_id: currentUser.id,
        });
        if (checkoutData) {
          setBody({
            ...body,
            user_id: currentUser.id,
          });
          router.push(
            `/p/${params.id}/checkout/thanks/${body.payment_method}?checkout_id=${checkoutData[0].id}`
          );
        }
      }
    } catch (error) {
      setErrors(error.formErrors.fieldErrors);
    }
  };

  useEffect(() => {
    const f = async () => {
      await fetch(`${process.env.NEXT_PUBLIC_SHIPPING_API_URL}/province`)
        .then((response) => response.json())
        .then((data) => {
          setProvinces(data.data);
        });
      const data = await getItem("products", params.id);
      if (data) {
        setProduct(data);
        setBody({
          ...body,
          product_id: data.id,
          product_price: data.discount_price,
          product_weight: data.weight,
        });
      }
    };
    f();
  }, []);

  return (
    <div className="lg:max-w-[80%] bg-slate-100 rounded-t-lg mx-auto container pb-10">
      <div className="flex justify-end p-3">
        <XMarkIcon
          onClick={() => router.back()}
          className="w-8 h-8 rounded-sm sm:rounded-xl hover:cursor-pointer hover:bg-primary-100"
        />
      </div>
      {product ? (
        <div>
          <h1 className="text-center font-bold text-2xl lg:text-3xl my-4">
            {product.title}
          </h1>
          <div className="mx-auto aspect-square h-64 sm:h-96 relative">
            <Image
              src={product.image}
              alt={product.title}
              fill={true}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-center text-lg font-medium my-10">
            Silahkan isi data dibawah ini untuk data pengiriman paket.
          </p>
        </div>
      ) : (
        <ProductSkeleton />
      )}
      <div>
        <form method="post" onSubmit={submitForm}>
          <div className="grid grid-cols-12 gap-4 mx-auto w-[90%] sm:max-w-md lg:max-w-xl">
            {/* <div className="col-span-12">
              <label className="block font-semibold text-lg">
                Pilih Promo :
              </label>
              <div className="bg-white flex space-x-2 border pl-2">
                <input
                  type="radio"
                  id="beli1"
                  name="product_variant"
                  value="Beli 1"
                  onClick={(e) => {
                    setProductVariant(e.target.value);
                    fetchShippingOptions(product.weight);
                  }}
                />
                <label htmlFor="beli1" className="w-full p-2">
                  Beli 1 ({product && currencyFormat(product.discount_price)})
                </label>
              </div>
              <div className="bg-white flex space-x-2 border pl-2">
                <input
                  type="radio"
                  id="beli2gratis1"
                  name="product_variant"
                  value="Beli 2 Gratis 1"
                  onClick={(e) => {
                    setProductVariant(e.target.value);
                    fetchShippingOptions(product?.weight * 3);
                  }}
                />
                <label htmlFor="beli2gratis1" className="w-full p-2">
                  Beli 2 Gratis 1 (
                  {product && currencyFormat(product.discount_price * 2)})
                </label>
              </div>
              {errors && errors.product_variant && (
                <p className="text-red-500">{errors.product_variant[0]}</p>
              )}
            </div> */}
            <div className="col-span-12">
              <label className="block font-semibold text-lg my-3">
                Data Penerima :
              </label>
              <label htmlFor="name" className="block">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border-2 border-slate-300 rounded-md"
                onChange={handleChange}
              />
              {errors && errors.name && (
                <p className="text-red-500">{errors.name[0]}</p>
              )}
            </div>
            <div className="col-span-12">
              <label htmlFor="phone" className="block">
                Nomor Whatsapp
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="081..."
                className="w-full p-2 border-2 border-slate-300 rounded-md"
                onChange={handleChange}
              />
              {errors && errors.phone && (
                <p className="text-red-500">{errors.phone[0]}</p>
              )}
            </div>
            <div className="col-span-12">
              <label htmlFor="province_id" className="block">
                Provinsi
              </label>
              <select
                id="province_id"
                name="province_id"
                className="w-full p-2 border-2 border-slate-300 rounded-md"
                onChange={(e) => {
                  fetchCity(e.target.value);
                  handleChange(e);
                  changeAddress(
                    "province",
                    e.target.options[e.target.selectedIndex].id
                  );
                }}
              >
                <option value="" disabled>
                  Pilih Provinsi
                </option>
                {provinces &&
                  provinces.map((prov, i) => (
                    <option
                      key={i}
                      value={prov.province_id}
                      id={prov.province_name}
                    >
                      {prov.province_name}
                    </option>
                  ))}
              </select>
              {errors && errors.province_id && (
                <p className="text-red-500">{errors.province_id[0]}</p>
              )}
            </div>
            <div className="col-span-12">
              <label htmlFor="city_id" className="block">
                Kota
              </label>
              <select
                id="city_id"
                name="city_id"
                className="w-full p-2 border-2 border-slate-300 rounded-md"
                onChange={(e) => {
                  fetchSubdistrict(e.target.value);
                  handleChange(e);
                  changeAddress(
                    "city",
                    e.target.options[e.target.selectedIndex].id
                  );
                }}
              >
                <option value="" disabled>
                  Pilih Kota
                </option>
                {cities &&
                  cities.map((city, i) => (
                    <option
                      key={i}
                      value={city.city_id}
                      id={city.city_name_with_type}
                    >
                      {city.city_name_with_type}
                    </option>
                  ))}
              </select>
              {errors && errors.city_id && (
                <p className="text-red-500">{errors.city_id[0]}</p>
              )}
            </div>
            <div className="col-span-12">
              <label htmlFor="subdistrict_id" className="block">
                Kecamatan
              </label>
              <select
                id="subdistrict_id"
                name="subdistrict_id"
                className="w-full p-2 border-2 border-slate-300 rounded-md"
                onChange={(e) => {
                  setCurrentSubdistrictId(e.target.value);
                  fetchShippingOptions(body.product_weight, e.target.value);
                  handleChange(e);
                  changeAddress(
                    "subdistrict",
                    e.target.options[e.target.selectedIndex].id
                  );
                }}
              >
                <option value="" disabled>
                  Pilih Kecamatan
                </option>
                {subdistricts &&
                  subdistricts.map((sub, i) => (
                    <option
                      key={i}
                      value={sub.subdistrict_id}
                      id={sub.subdistrict_name}
                    >
                      {sub.subdistrict_name}
                    </option>
                  ))}
              </select>
              {errors && errors.subdistrict_id && (
                <p className="text-red-500">{errors.subdistrict_id[0]}</p>
              )}
            </div>
            <div className="col-span-12">
              <label htmlFor="postal" className="block">
                Kode Pos
              </label>
              <input
                type="number"
                id="postal"
                name="postal"
                className="w-full p-2 border-2 border-slate-300 rounded-md"
                onChange={handleChange}
              />
              {errors && errors.postal && (
                <p className="text-red-500">{errors.postal[0]}</p>
              )}
            </div>
            <div className="col-span-12">
              <label htmlFor="detail_address" className="block">
                Alamat Lengkap
              </label>
              <textarea
                id="detail_address"
                name="detail_address"
                placeholder="contoh: RT 1/RW 3 Banaran"
                className="w-full p-2 border-2 border-slate-300 rounded-md"
                onChange={handleChange}
              ></textarea>
              {errors && errors.detail_address && (
                <p className="text-red-500">{errors.detail_address[0]}</p>
              )}
            </div>

            {shippingOption && (
              <>
                <ShippingMenu
                  data={shippingOption}
                  body={body}
                  setBody={setBody}
                  errMessage={
                    errors && errors.shipping_cost
                      ? errors.shipping_cost[0]
                      : null
                  }
                />
              </>
            )}
            <div className="col-span-12">
              <label className="block font-semibold text-lg">
                Metode Pembayaran :
              </label>
              <div className="bg-white flex space-x-2 border pl-2">
                <input
                  type="radio"
                  id="bank"
                  name="payment_method"
                  value="bank-transfer"
                  onChange={handleChange}
                />
                <label htmlFor="bank" className="w-full p-2">
                  <Image
                    src={"/payment/bank.svg"}
                    alt="Pembayaran melalui bank transfer"
                    className="inline"
                    width={48}
                    height={12}
                  />{" "}
                  Bank Transfer
                </label>
              </div>
              <div className="bg-white flex space-x-2 border pl-2">
                <input
                  type="radio"
                  id="cod"
                  name="payment_method"
                  value="cod"
                  onChange={handleChange}
                />
                <label htmlFor="cod" className="w-full p-2">
                  <Image
                    src={"/payment/cod.svg"}
                    alt="Pembayaran melalui COD"
                    className="inline"
                    width={48}
                    height={12}
                  />{" "}
                  COD (Bayar Ditempat)
                </label>
              </div>
              {errors && errors.payment_method && (
                <p className="text-red-500">{errors.payment_method[0]}</p>
              )}
            </div>
            <div className="col-span-12">
              <button
                type="submit"
                className="w-full bg-primary-500 text-white p-2 rounded-md flex items-center justify-center"
              >
                Beli Sekarang{" "}
                <ArrowRightCircleIcon width={24} height={24} className="ml-2" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
