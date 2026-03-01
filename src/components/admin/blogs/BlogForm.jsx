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
import { Switch } from "@/components/ui/switch";
import { useSupabaseCrud } from "@/hooks/useSupabaseCrud";
import AdminFormLayout from "@/components/admin/shared/AdminFormLayout";
import ImageUploader from "@/components/admin/shared/ImageUploader";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  title: z.string().min(2, "Judul wajib diisi"),
  slug: z.string().min(2, "Slug wajib diisi"),
  category: z.string().min(1, "Kategori wajib diisi"),
  excerpt: z.string().min(10, "Ringkasan minimal 10 karakter"),
  content: z.string().min(20, "Konten minimal 20 karakter"),
  author: z.string().min(2, "Penulis wajib diisi"),
  authorRole: z.string().optional(),
  readtime: z.string().optional(),
  tags: z.string().optional(),
  featured: z.boolean().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  keywords: z.string().optional(),
});

function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function BlogForm({ blog }) {
  const isEdit = !!blog;
  const [coverImage, setCoverImage] = useState(blog?.image ? [blog.image] : []);
  const { create, update, loading } = useSupabaseCrud("blogs", {
    redirectOnSuccess: "/admin/blogs",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blog?.title || "",
      slug: blog?.slug || "",
      category: blog?.category || "",
      excerpt: blog?.excerpt || "",
      content: blog?.content || "",
      author: blog?.author || "",
      authorRole: blog?.authorRole || "",
      readtime: blog?.readtime || "",
      tags: blog?.tags?.join(", ") || "",
      featured: blog?.featured || false,
      seoTitle: blog?.seoTitle || "",
      seoDescription: blog?.seoDescription || "",
      keywords: blog?.keywords?.join(", ") || "",
    },
  });

  const onSubmit = async (data) => {
    const body = {
      ...data,
      tags: data.tags
        ? data.tags.split(",").map((t) => t.trim()).filter(Boolean)
        : [],
      keywords: data.keywords
        ? data.keywords.split(",").map((k) => k.trim()).filter(Boolean)
        : [],
      image: coverImage[0] || "",
    };

    if (isEdit) {
      await update(blog.id, body);
    } else {
      await create(body);
    }
  };

  return (
    <AdminFormLayout
      title={isEdit ? "Edit Artikel" : "Tambah Artikel"}
      backHref="/admin/blogs"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">Konten</TabsTrigger>
              <TabsTrigger value="meta">Meta & Penulis</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6 mt-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul Artikel</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan judul artikel"
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kategori</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: Tips & Tutorial" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ringkasan</FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="Ringkasan singkat artikel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konten (Markdown)</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={12}
                        placeholder="Tulis konten artikel dalam format markdown..."
                        className="font-mono text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Gunakan format Markdown: # Heading, **bold**, *italic*, - list
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <label className="text-sm font-medium">Cover Image</label>
                <ImageUploader
                  images={coverImage}
                  onChange={setCoverImage}
                  bucket="products"
                  multiple={false}
                />
              </div>
            </TabsContent>

            <TabsContent value="meta" className="space-y-6 mt-6">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Penulis</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama penulis" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="authorRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Peran Penulis</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: Konsultan Bangunan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="readtime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Waktu Baca</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: 5 menit" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Input placeholder="Pisahkan dengan koma: tag1, tag2, tag3" {...field} />
                    </FormControl>
                    <FormDescription>
                      Pisahkan setiap tag dengan tanda koma
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="featured"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <FormLabel className="text-base">Featured Article</FormLabel>
                      <FormDescription>
                        Tampilkan artikel ini di bagian featured
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </TabsContent>

            <TabsContent value="seo" className="space-y-6 mt-6">
              <FormField
                control={form.control}
                name="seoTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SEO Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title untuk mesin pencari" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="seoDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SEO Description</FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="Deskripsi untuk mesin pencari" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="Pisahkan dengan koma" {...field} />
                    </FormControl>
                    <FormDescription>
                      Keywords SEO, pisahkan dengan tanda koma
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
          </Tabs>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                Loading <ArrowPathIcon className="w-4 h-4 animate-spin ml-2" />
              </>
            ) : isEdit ? (
              "Simpan Perubahan"
            ) : (
              "Publish Artikel"
            )}
          </Button>
        </form>
      </Form>
    </AdminFormLayout>
  );
}

export default BlogForm;
