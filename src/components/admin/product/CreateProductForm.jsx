"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/config/supabase";
import Image from "next/image";
import { createItem, editItem } from "@/lib/utils/supabaseCRUD";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";


// const MAX_FILE_SIZE = 1024 * 1024 * 2;
// const ACCEPTED_IMAGE_MIME_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Wajib diisi.",
  }),
  descriptions: z.string().min(2, {
    message: "Wajib diisi.",
  }),
  // image_urls:  z
  //   .any()
  //   .refine((files) => files?.length !== 0, "File is required")
  //   .refine((files) => {
  //     return files?.[0]?.size <= MAX_FILE_SIZE;
  //   }, `Max image size is 2MB.`)
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
  //     "Only .jpg, .jpeg, .png and .webp formats are supported."
  //   ),
});

function CreateProductForm({product}) {
  const [images, setImages] = useState(product?.image_urls || []); 
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: product?.title ||"",
      descriptions: product?.descriptions?.join(";") ||"",
      image_urls: [],
    },
  });

  const onSubmit=async(data)=>{
    try {
      const body={
        ...data,
        descriptions: data.descriptions.split(";"),
        image_urls: images,
      }
      if(product === "add") {
        const {error} =await createItem("offline_products", body);
        if(error) {alert(error.message); return}
      }else {
        const {error} =await editItem("offline_products", product.id, body);
        if(error) {alert(error.message); return}
      }
      router.replace("/admin")
    } catch (error) {
      alert(error.message);
    }
  }
  const handleFileChange = async(event) => {
    const file = event.target.files[0];
    if(file){
      const {data, error} = await supabase.storage.from("products").upload(`${file.name}`, file);
      if(error){
        setImages([...images, `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}/products/${file.name}`]);
        alert(error.message)
      }
      else if(data){
        setImages([...images, `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}/${data.fullPath}`]);
      }
    }
  };
  return (
    <div className="mt-16">
      <div className="flex justify-between mb-6">
        <Link href='/admin'>
          <ArrowLeftIcon width={24} height={24} strokeWidth={2} className='text-gray-700 cursor-pointer' />
        </Link>
        <h1 className="font-semibold text-2xl">{product==='add' ? 'Tambah Produk' : 'Edit Produk'}</h1>
        <span></span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Produk</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="descriptions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <Input placeholder="pisah dengan ;" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image_urls"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input type="file" accept="image/*" {...field} onChange={handleFileChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="inline-block">
            <p>Link Foto Produk : </p>
            {images.map((img, i) => (
              <span key={i} className="inline-block mx-2 aspect-square relative">
                <button onClick={() => setImages(images.filter((image) => image !== img))} className="absolute top-0 right-0 bg-red-600 text-white">
                  <XMarkIcon width={24} height={24} />
                </button>
                <Image width={100} height={100} src={img} alt="product" className="aspect-square" />
              </span>
            ))}
          </span>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CreateProductForm;
