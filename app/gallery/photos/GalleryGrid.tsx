"use client";
import React, { useState } from "react";
import Image from "next/image";

type Img = { src: string; alt: string };

export default function GalleryGrid({ images }: { images: Img[] }) {
  const [open, setOpen] = useState<Img | null>(null);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setOpen(img)}
            className="group block text-left rounded-xl overflow-hidden border border-gray-200 dark:border-[#232B3E] focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="relative aspect-[4/3]">
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="px-3 py-2 bg-white dark:bg-[#181F2A] text-sm text-gray-700 dark:text-gray-300">
              {img.alt}
            </div>
          </button>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(null)} />
          <div className="relative z-10 max-w-5xl w-[94%] rounded-2xl overflow-hidden border border-gray-100 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] shadow-2xl">
            <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
              <Image src={open.src} alt={open.alt} fill style={{ objectFit: "contain" }} />
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#181F2A]">
              <div className="text-sm text-gray-700 dark:text-gray-300 truncate">{open.alt}</div>
              <button
                onClick={() => setOpen(null)}
                className="rounded-md px-3 py-1 text-sm bg-gray-100 dark:bg-[#232B3E] hover:bg-gray-200 dark:hover:bg-[#2b3650] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


