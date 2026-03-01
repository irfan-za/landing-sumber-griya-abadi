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
import { Textarea } from "@/components/ui/textarea";
import { useSupabaseCrud } from "@/hooks/useSupabaseCrud";
import AdminFormLayout from "@/components/admin/shared/AdminFormLayout";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const formSchema = z.object({
  name: z.string().min(2, "Nama kategori wajib diisi"),
  slug: z.string().min(2, "Slug wajib diisi"),
  description: z.string().optional(),
});

function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function CategoryForm({ category }) {
  const isEdit = !!category;
  const { create, update, loading } = useSupabaseCrud("categories", {
    redirectOnSuccess: "/admin/categories",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: category?.name || "",
      slug: category?.slug || "",
      description: category?.description || "",
    },
  });

  const onSubmit = async (data) => {
    if (isEdit) {
      await update(category.id, data);
    } else {
      await create(data);
    }
  };

  return (
    <AdminFormLayout
      title={isEdit ? "Edit Kategori" : "Tambah Kategori"}
      backHref="/admin/categories"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Kategori</FormLabel>
                <FormControl>
                  <Input
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi (opsional)</FormLabel>
                <FormControl>
                  <Textarea rows={3} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                Loading <ArrowPathIcon className="w-4 h-4 animate-spin ml-2" />
              </>
            ) : isEdit ? (
              "Simpan Perubahan"
            ) : (
              "Tambah Kategori"
            )}
          </Button>
        </form>
      </Form>
    </AdminFormLayout>
  );
}

export default CategoryForm;
