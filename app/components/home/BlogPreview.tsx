"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
};

export default function BlogPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/json/blogs.json")
      .then((r) => r.json())
      .then((data: Blog[]) => setBlogs(data.slice(0, 3)))
      .catch(() => setBlogs([]));
  }, []);

  if (blogs.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#0B1437] dark:text-white">Latest From the Blog</h2>
        <Link href="/blog" className="text-primary hover:text-secondary">View all</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <Link key={b.id} href={`/blog`} className="rounded-xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] overflow-hidden hover:shadow transition">
            <div className="relative aspect-[16/9]">
              <Image src={b.image} alt={b.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div className="p-4">
              <div className="text-xs inline-block px-2 py-0.5 rounded bg-primary/10 text-primary mb-2">{b.category}</div>
              <h3 className="text-lg font-semibold text-[#0B1437] dark:text-white line-clamp-2">{b.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-1">{b.excerpt}</p>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">{new Date(b.date).toLocaleDateString()}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


