"use client";

import { useState } from "react";
import { supabase } from "@/config/supabase";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export function useImageUpload(bucket = "products") {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return "Format file harus .jpg, .jpeg, .png, atau .webp";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "Ukuran file maksimal 2MB";
    }
    return null;
  };

  const uploadImage = async (file) => {
    setError(null);

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return null;
    }

    setUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
      const { data, error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(fileName, file);

      if (uploadError) {
        // If file already exists, use the existing URL
        if (uploadError.message?.includes("already exists")) {
          return `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}/${bucket}/${fileName}`;
        }
        setError(uploadError.message);
        return null;
      }

      return `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}/${data.fullPath}`;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (filePath) => {
    try {
      // Extract filename from full URL
      const parts = filePath.split(`/${bucket}/`);
      if (parts.length > 1) {
        await supabase.storage.from(bucket).remove([parts[1]]);
      }
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  };

  return { uploadImage, deleteImage, uploading, error, setError };
}
