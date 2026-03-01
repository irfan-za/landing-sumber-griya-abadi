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
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSupabaseCrud } from "@/hooks/useSupabaseCrud";
import AdminFormLayout from "@/components/admin/shared/AdminFormLayout";
import ImageUploader from "@/components/admin/shared/ImageUploader";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const formSchema = z.object({
  title: z.string().min(2, "Nama layanan wajib diisi"),
  slug: z.string().min(2, "Slug wajib diisi"),
  descriptions: z.string().min(2, "Deskripsi wajib diisi"),
});

function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function ServiceForm({ service }) {
  const isEdit = !!service;
  const [images, setImages] = useState(service?.image_urls || []);
  const { create, update, loading } = useSupabaseCrud("services", {
    redirectOnSuccess: "/admin/services",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: service?.title || "",
      slug: service?.slug || "",
      descriptions: service?.descriptions?.join(";") || "",
    },
  });

  const onSubmit = async (data) => {
    const body = {
      ...data,
      descriptions: data.descriptions.split(";").map((d) => d.trim()).filter(Boolean),
      image_urls: images,
    };

    if (isEdit) {
      await update(service.id, body);
    } else {
      await create(body);
    }
  };

  return (
    <AdminFormLayout
      title={isEdit ? "Edit Layanan" : "Tambah Layanan"}
      backHref="/admin/services"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Layanan</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Contoh: Pemasangan Plafon"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      if (!isEdit) {
                        form.setValue("slug", generateSlug(e.target.value));
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="auto-generated" />
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
                  <Textarea
                    rows={4}
                    placeholder="Pisahkan setiap poin dengan tanda titik koma (;)"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Gunakan tanda ; untuk memisahkan setiap poin deskripsi
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">Foto Layanan</label>
            <ImageUploader
              images={images}
              onChange={setImages}
              bucket="products"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                Loading <ArrowPathIcon className="w-4 h-4 animate-spin ml-2" />
              </>
            ) : isEdit ? (
              "Simpan Perubahan"
            ) : (
              "Tambah Layanan"
            )}
          </Button>
        </form>
      </Form>
    </AdminFormLayout>
  );
}

export default ServiceForm;
