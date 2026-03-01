"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/config/supabase";

export function useDashboardStats() {
  const [stats, setStats] = useState({
    products: 0,
    services: 0,
    blogs: 0,
    categories: 0,
  });
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [products, services, blogs, categories] = await Promise.all([
          supabase.from("offline_products").select("id", { count: "exact", head: true }),
          supabase.from("services").select("id", { count: "exact", head: true }),
          supabase.from("blogs").select("id", { count: "exact", head: true }),
          supabase.from("categories").select("id", { count: "exact", head: true }),
        ]);

        setStats({
          products: products.count || 0,
          services: services.count || 0,
          blogs: blogs.count || 0,
          categories: categories.count || 0,
        });

        // Fetch recent items from all tables
        const { data: recentProducts } = await supabase
          .from("offline_products")
          .select("id, title, created_at")
          .order("created_at", { ascending: false })
          .limit(3);

        const { data: recentBlogs } = await supabase
          .from("blogs")
          .select("id, title, created_at")
          .order("created_at", { ascending: false })
          .limit(3);

        const combined = [
          ...(recentProducts || []).map((item) => ({ ...item, type: "Produk" })),
          ...(recentBlogs || []).map((item) => ({ ...item, type: "Blog" })),
        ]
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 5);

        setRecentItems(combined);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, recentItems, loading };
}
