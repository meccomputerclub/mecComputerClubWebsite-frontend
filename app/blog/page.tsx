"use client";
import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import CategorySidebar from "./components/CategorySidebar";
import HeroSection from "../components/HeroSection";

interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

const BLOGS_PER_PAGE = 6;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("/json/blogs.json")
      .then((res) => res.json())
      .then((data: Blog[]) => {
        setBlogs(data);
        setCategories([...Array.from(new Set(data.map((b) => b.category)))]);
      });
  }, []);

  // Reset to page 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * BLOGS_PER_PAGE,
    page * BLOGS_PER_PAGE
  );

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://meccomputerclub.org',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://meccomputerclub.org/blog',
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-[#F7FAFF] dark:bg-[#101624] py-0 transition-colors">
        {/* Hero Section */}
        <HeroSection
          title="Blog"
          subtitle={
            <>
              <span>Home</span> / <span>Blog</span>
            </>
          }
          gradientFrom="#033a54"
          gradientTo="#f59431"
        />
        {/* Blog Content */}
        <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8" itemScope itemType="https://schema.org/Blog">
        {/* Sidebar */}
        <div className="md:w-1/4 w-full">
          <CategorySidebar
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
          {/* Blog Grid */}
          <div className="md:w-3/4 w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedBlogs.length === 0 ? (
                <div className="col-span-full text-center text-gray-400 dark:text-gray-500 py-12 text-lg">
                  Didnt Found Any Blog
                </div>
              ) : (
                paginatedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))
              )}
            </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                className="px-3 py-1 rounded bg-primary text-primary-foreground font-semibold disabled:opacity-50 hover:bg-secondary"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  className={`px-3 py-1 rounded font-semibold transition-colors ${
                    p === page
                      ? "bg-secondary text-[#0B1437]"
                      : "bg-white dark:bg-[#232B3E] text-[#0B1437] dark:text-white hover:bg-gray-100 dark:hover:bg-[#232B3E]"
                  }`}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded bg-primary text-primary-foreground font-semibold disabled:opacity-50 hover:bg-secondary"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
          </div>
        </section>
      </main>

      {/* Blog Posts Structured Data */}
      {blogs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: blogs.map((blog, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'BlogPosting',
                  '@id': `https://meccomputerclub.org/blog/${blog.id}`,
                  headline: blog.title,
                  description: blog.excerpt,
                  image: blog.image.startsWith('http')
                    ? blog.image
                    : `https://meccomputerclub.org${blog.image}`,
                  datePublished: blog.date,
                  author: {
                    '@type': 'Organization',
                    name: 'MEC Computer Club',
                  },
                },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
