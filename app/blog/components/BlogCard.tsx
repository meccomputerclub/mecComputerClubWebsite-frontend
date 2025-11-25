"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Blog = {
  id: string | number;
  title: string;
  excerpt: string;
  image?: string;
  category: string;
  date: string | Date;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(blog.image || "/img/flexohost-meta.png");

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc("/img/flexohost-meta.png"); // Fallback image
    }
  };

  return (
    <div className="bg-white dark:bg-[#181F2A] rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 dark:border-[#232B3E] transition hover:shadow-2xl">
      {imageSrc && (
        <Link href={`/blog/${blog.id}`} className="relative w-full h-44 overflow-hidden block hover:opacity-90 transition-opacity">
          <Image
            src={imageSrc}
            alt={blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={handleImageError}
          />
        </Link>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold text-[#FF267E] bg-[#FF267E]/10 rounded px-2 py-1">
            {blog.category}
          </span>
          <span className="text-xs text-gray-400">
            {new Date(blog.date).toLocaleDateString("en-BD", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <Link href={`/blog/${blog.id}`}>
          <h3 className="font-bold text-lg text-[#0B1437] dark:text-white mb-2 line-clamp-2 hover:text-[#009FFF] transition-colors cursor-pointer">
            {blog.title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
          {blog.excerpt}
        </p>
        <Link
          href={`/blog/${blog.id}`}
          className="mt-auto text-[#009FFF] font-semibold flex items-center gap-1 hover:underline"
        >
          Read Full <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
