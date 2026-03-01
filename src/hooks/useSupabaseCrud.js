"use client";

import { useState, useCallback } from "react";
import { supabase } from "@/config/supabase";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function useSupabaseCrud(tableName, options = {}) {
  const { redirectOnSuccess, successMessage } = options;
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSuccess = useCallback(
    (message) => {
      toast({ variant: "success", description: message || successMessage || "Berhasil!" });
      if (redirectOnSuccess) {
        router.replace(redirectOnSuccess);
      } else {
        router.refresh();
      }
    },
    [toast, router, redirectOnSuccess, successMessage]
  );

  const handleError = useCallback(
    (error) => {
      toast({ variant: "destructive", description: error.message || "Terjadi kesalahan" });
    },
    [toast]
  );

  const create = useCallback(
    async (item) => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from(tableName)
          .insert(item)
          .select()
          .single();
        if (error) {
          handleError(error);
          return { data: null, error };
        }
        handleSuccess("Data berhasil ditambahkan");
        return { data, error: null };
      } finally {
        setLoading(false);
      }
    },
    [tableName, handleSuccess, handleError]
  );

  const update = useCallback(
    async (id, item) => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from(tableName)
          .update(item)
          .eq("id", id)
          .select()
          .single();
        if (error) {
          handleError(error);
          return { data: null, error };
        }
        handleSuccess("Data berhasil diperbarui");
        return { data, error: null };
      } finally {
        setLoading(false);
      }
    },
    [tableName, handleSuccess, handleError]
  );

  const remove = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const { error } = await supabase
          .from(tableName)
          .delete()
          .eq("id", id);
        if (error) {
          handleError(error);
          return { error };
        }
        handleSuccess("Data berhasil dihapus");
        return { error: null };
      } finally {
        setLoading(false);
      }
    },
    [tableName, handleSuccess, handleError]
  );

  return { create, update, remove, loading };
}
