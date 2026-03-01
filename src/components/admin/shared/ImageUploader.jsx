"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { useImageUpload } from "@/hooks/useImageUpload";
import { XMarkIcon, PhotoIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

function ImageUploader({ images = [], onChange, bucket = "products", multiple = true }) {
  const { uploadImage, uploading, error } = useImageUpload(bucket);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = useCallback(
    async (files) => {
      for (const file of files) {
        const url = await uploadImage(file);
        if (url) {
          onChange(multiple ? [...images, url] : [url]);
        }
      }
    },
    [uploadImage, images, onChange, multiple]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragOver(false);
      const files = Array.from(e.dataTransfer.files).filter((f) =>
        f.type.startsWith("image/")
      );
      if (files.length) handleFiles(files);
    },
    [handleFiles]
  );

  const handleFileInput = useCallback(
    (e) => {
      const files = Array.from(e.target.files);
      if (files.length) handleFiles(files);
      e.target.value = "";
    },
    [handleFiles]
  );

  const removeImage = useCallback(
    (urlToRemove) => {
      onChange(images.filter((url) => url !== urlToRemove));
    },
    [images, onChange]
  );

  return (
    <div className="space-y-3">
      {/* Drop zone */}
      <label
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`
          flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors
          ${dragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"}
          ${uploading ? "pointer-events-none opacity-60" : ""}
        `}
      >
        {uploading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <ArrowPathIcon className="w-5 h-5 animate-spin" />
            <span className="text-sm">Mengupload...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <PhotoIcon className="w-8 h-8" />
            <span className="text-sm">Drag & drop atau klik untuk upload</span>
            <span className="text-xs">JPG, PNG, WebP (maks. 2MB)</span>
          </div>
        )}
        <input
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
        />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {/* Image previews */}
      {images.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {images.map((url, i) => (
            <div key={i} className="relative group">
              <div className="w-24 h-24 rounded-lg overflow-hidden border bg-muted">
                <Image
                  src={url}
                  alt={`Upload ${i + 1}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={() => removeImage(url)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
              >
                <XMarkIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
