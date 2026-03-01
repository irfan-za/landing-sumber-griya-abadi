"use client";

import { useDashboardStats } from "@/hooks/useDashboardStats";
import StatCard from "@/components/admin/shared/StatCard";
import {
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

function DashboardContent() {
  const { stats, recentItems, loading } = useDashboardStats();

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Squares2X2Icon className="w-6 h-6" />}
          label="Total Produk"
          value={stats.products}
        />
        <StatCard
          icon={<WrenchScrewdriverIcon className="w-6 h-6" />}
          label="Total Jasa"
          value={stats.services}
        />
        <StatCard
          icon={<DocumentTextIcon className="w-6 h-6" />}
          label="Total Blog"
          value={stats.blogs}
        />
        <StatCard
          icon={<TagIcon className="w-6 h-6" />}
          label="Total Kategori"
          value={stats.categories}
        />
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Aktivitas Terbaru
        </h2>
        {recentItems.length > 0 ? (
          <div className="space-y-3">
            {recentItems.map((item, i) => (
              <div
                key={`${item.type}-${item.id}`}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.type}
                  </Badge>
                  <span className="text-sm font-medium text-foreground">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(item.created_at).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-8">
            Belum ada aktivitas terbaru.
          </p>
        )}
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Aksi Cepat
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            href="/admin/products/create"
            className="flex flex-col items-center gap-2 p-4 rounded-lg border hover:bg-muted transition-colors text-center"
          >
            <Squares2X2Icon className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium">Tambah Produk</span>
          </Link>
          <Link
            href="/admin/services/create"
            className="flex flex-col items-center gap-2 p-4 rounded-lg border hover:bg-muted transition-colors text-center"
          >
            <WrenchScrewdriverIcon className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium">Tambah Jasa</span>
          </Link>
          <Link
            href="/admin/blogs/create"
            className="flex flex-col items-center gap-2 p-4 rounded-lg border hover:bg-muted transition-colors text-center"
          >
            <DocumentTextIcon className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium">Tambah Blog</span>
          </Link>
          <Link
            href="/admin/categories/create"
            className="flex flex-col items-center gap-2 p-4 rounded-lg border hover:bg-muted transition-colors text-center"
          >
            <TagIcon className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium">Tambah Kategori</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
