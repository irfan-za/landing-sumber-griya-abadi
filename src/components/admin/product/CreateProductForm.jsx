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

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  descriptions: z.string(),
});

function CreateProductForm() {
  const [images, setImages] = useState([]); 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      descriptions: "",
      imageUrls: [],
    },
  });

  const onSubmit=(data)=>{
    try {
      const body={
        ...data,
        descriptions: data.descriptions.split(";"),
      }
      console.log(body);
      const valid = formSchema.parse(data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleFileChange = async(event) => {
    const file = event.target.files[0];
    const {data, error} = await supabase.storage.from("products").upload(`${file.name}`, file);
    if(error) alert(error.message);
    else if(data){
      setImages([...images, `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}/${data.fullPath}`]);
    }
  };
  return (
    <div className="mt-16">
      <h1 className="font-semibold text-2xl">Tambah Produk</h1>
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
            name="images"
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
          <span className="inline-block">Link Foto Produk : {images}</span>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CreateProductForm;
