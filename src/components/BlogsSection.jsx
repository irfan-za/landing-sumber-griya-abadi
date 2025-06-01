import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { getItemsWithFilter } from "@/lib/utils/supabaseCRUD";

export default async function BlogsSection() {
  const {data} = await getItemsWithFilter("blogs", "featured", true);
  const featuredBlogs = data
    .filter((blog) => blog.featured)
    .slice(0, 3);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-accent-foreground mb-6 text-center">
            Panduan & Tips Terbaru
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dapatkan tips dan panduan terbaru seputar material bangunan dari
            para ahli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {featuredBlogs.map((blog) => (
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
                  >
                    {blog.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                  <Link href={`/blogs/${blog.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Baca Selengkapnya
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blogs">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Lihat Semua Artikel
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
