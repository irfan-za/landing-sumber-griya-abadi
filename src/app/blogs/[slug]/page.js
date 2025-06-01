import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import blogsData from "@/data/blogs.json";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import { socialMedia } from "@/constans";
import PublishDate from "@/components/PublishDate";

function MDXContent({ content }) {
  const renderMarkdown = (text) => {
    return text
      .replace(
        /### (.*)/g,
        '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>'
      )
      .replace(
        /#### (.*)/g,
        '<h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">$1</h4>'
      )
      .replace(
        /## (.*)/g,
        '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">$1</h2>'
      )
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-gray-900">$1</strong>'
      )
      .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')
      .replace(/\n/g, "<br>");
  };

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{
        __html: `<p class="text-gray-700 leading-relaxed mb-4">${renderMarkdown(
          content
        )}</p>`,
      }}
    />
  );
}

export async function generateMetadata({ params }) {
  const blog = blogsData.blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Sumber Griya Abadi",
      description: "The requested blog post was not found.",
    };
  }

  return {
    title: blog.seoTitle,
    description: blog.seoDescription,
    keywords: blog.keywords.join(", "),
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      authors: [blog.author],
      images: [
        {
          url: blog.image,
          width: 800,
          height: 400,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export async function generateStaticParams() {
  return blogsData.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPage({ params }) {
  const blog = blogsData.blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogsData.blogs
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen items-center pt-0 sm:pt-16">
      <Navbar />

      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blogs">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{blog.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Kembali ke Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            <article className="lg:col-span-3">
              
              <header className="mb-8">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-4 text-white">
                    {blog.category}
                  </Badge>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <PublishDate id={blog.id} />
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                
                <div className="relative h-[400px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </header>

              
              <div className="mb-12">
                <MDXContent content={blog.content} />
              </div>

              
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mb-12">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Butuh Konsultasi Material Bangunan?
                  </h3>
                  <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
                    Tim ahli kami siap membantu Anda memilih material terbaik
                    untuk proyek konstruksi. Dapatkan konsultasi GRATIS dan
                    penawaran harga terbaik!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                      asChild
                    >
                      <Link
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}&text=Halo%20kak,%20saya%20ingin%20bertanya%20tentang...`}
                        target="_blank"
                      >
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Konsultasi Sekarang
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4 text-blue-100">
                    <MapPinIcon className="w-4 h-4" />
                    <span className="text-sm">
                      Melayani seluruh wilayah di pulau Jawa.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </article>

            
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                
                {relatedBlogs.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">
                        Artikel Terkait
                      </h3>
                      <div className="space-y-4">
                        {relatedBlogs.map((relatedBlog) => (
                          <div key={relatedBlog.id}>
                            <Link
                              href={`/blogs/${relatedBlog.slug}`}
                              className="block group"
                            >
                              <div className="flex gap-3">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                  <Image
                                    src={relatedBlog.image}
                                    alt={relatedBlog.title}
                                    fill
                                    className="object-cover rounded"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {relatedBlog.title}
                                  </h4>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {relatedBlog.readTime}
                                  </p>
                                </div>
                              </div>
                            </Link>
                            {relatedBlog.id !==
                              relatedBlogs[relatedBlogs.length - 1].id && (
                              <Separator className="mt-4" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">
                      Hubungi Kami
                    </h3>
                    <div className="space-y-3 text-sm">
                      <Link
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}&text=Halo%20kak,%20saya%20ingin%20bertanya%20tentang...`}
                        target="_blank"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <PhoneIcon className="w-4 h-4 text-blue-600" />
                        <span>{process.env.NEXT_PUBLIC_PHONE}</span>
                      </Link>
                      <Link
                        href={"https://maps.app.goo.gl/C73ymPb5k7ajYqAt6"}
                        target="_blank"
                        className="flex items-start gap-2 hover:underline"
                      >
                        <MapPinIcon className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>
                          Jl Mangu-Sambi km.3, Sobokerto, Ngemplak, Boyolali,
                          Jawa Tengah.
                        </span>
                      </Link>
                    </div>
                    <Separator className="my-4" />
                    <p className="text-xs text-gray-600">
                      Buka: Senin - Sabtu, 08:00 - 16:00 WIB
                    </p>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <div className="w-full overflow-hidden">
        <Footer socialMedia={socialMedia} />
      </div>
    </div>
  );
}
