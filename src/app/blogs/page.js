"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import blogsData from "@/data/blogs.json";
import {
  CalendarIcon,
  ClockIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { socialMedia } from "@/constans";
import PublishDate from "@/components/PublishDate";

const ITEMS_PER_PAGE = 6;

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "all",
    ...Array.from(new Set(blogsData.blogs.map((blog) => blog.category))),
  ];

  const filteredBlogs = useMemo(() => {
    return blogsData.blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featuredBlogs = blogsData.blogs
    .filter((blog) => blog.featured)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Navbar />
      <main className="min-h-screen flex-1 sm:pt-12">
        <section className="bg-gradient-to-br from-blue-50 to-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                Temukan berita terbaru kami
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Temukan berbagai tips, tutorial, serta berbagai informasi
                pilihan terkait bahan bangunan. Dapatkan informasi terpercaya
                dan terbaru dari para ahli kami.
              </p>

              <div className="relative max-w-md mx-auto mb-8">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari artikel, tips, atau tutorial..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-sm">
                  Cari
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Artikel Terbaru Material Bangunan
                </h2>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6 text-gray-600">
                Menampilkan {paginatedBlogs.length} dari {filteredBlogs.length}{" "}
                artikel
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {paginatedBlogs.map((blog) => (
                  <Card
                    key={blog.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-700"
                        >
                          {blog.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <PublishDate id={blog.id} />
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {blog.readTime}
                        </div>
                      </div>

                      <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>
                              {blog.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {blog.author}
                            </p>
                            <p className="text-xs text-gray-500">
                              {blog.authorRole}
                            </p>
                          </div>
                        </div>

                        <Link href={`/blogs/${blog.slug}`}>
                          <Button variant="outline" size="sm">
                            Baca Selengkapnya
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    )
                  )}

                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Featured
                </h3>
                <div className="space-y-4">
                  {featuredBlogs.map((blog, index) => (
                    <div key={blog.id} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-blue-600 mb-1">
                          <PublishDate id={blog.id} />
                        </p>
                        <h4 className="font-medium text-sm text-gray-900 line-clamp-2 hover:text-blue-600">
                          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Latest</h3>
                <div className="space-y-4">
                  {blogsData.blogs.slice(0, 3).map((blog) => (
                    <div key={blog.id} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-1">
                          <PublishDate id={blog.id} />
                        </p>
                        <h4 className="font-medium text-sm text-gray-900 line-clamp-2 hover:text-blue-600">
                          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full overflow-hidden">
        <Footer socialMedia={socialMedia} />
      </div>
    </div>
  );
}
