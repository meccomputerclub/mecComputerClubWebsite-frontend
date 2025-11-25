"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import HeroSection from "../../components/HeroSection";

interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export default function SingleBlogPage() {
  const params = useParams();
  const blogId = params.id as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch("/json/blogs.json");
        
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        
        const blogs: Blog[] = await response.json();
        const foundBlog = blogs.find((b) => b.id === blogId);
        
        if (!foundBlog) {
          setError("Blog not found");
          return;
        }
        
        setBlog(foundBlog);
        setError(null);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7FAFF] dark:bg-[#101624] py-0 transition-colors">
        <HeroSection
          title="Loading..."
          subtitle={<span>Blog - MEC Computer Club</span>}
          gradientFrom="#0B1437"
          gradientTo="#009FFF"
        />
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center text-gray-400 dark:text-gray-500">
            Loading blog post...
          </div>
        </section>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="min-h-screen bg-[#F7FAFF] dark:bg-[#101624] py-0 transition-colors">
        <HeroSection
          title="Blog Not Found"
          subtitle={<span>Blog - FlexoHost</span>}
          gradientFrom="#0B1437"
          gradientTo="#009FFF"
        />
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white dark:bg-[#181F2A] rounded-2xl shadow-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {error || "The blog post you're looking for doesn't exist."}
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#009FFF] text-white font-semibold rounded-lg hover:bg-[#0088cc] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7FAFF] dark:bg-[#101624] py-0 transition-colors">
      {/* Hero Section */}
      <HeroSection
        title={blog.title}
        subtitle={
          <>
            <Link href="/" className="hover:underline">Home</Link> /{" "}
            <Link href="/blog" className="hover:underline">Blog</Link> /{" "}
            <span>{blog.title}</span>
          </>
        }
        gradientFrom="#0B1437"
        gradientTo="#009FFF"
      />

      {/* Blog Content */}
      <article 
        className="max-w-4xl mx-auto px-4 py-12" 
        itemScope 
        itemType="https://schema.org/BlogPosting"
      >
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-[#009FFF] hover:underline font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Blog Card */}
        <div className="bg-white dark:bg-[#181F2A] rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-[#232B3E]">
          {/* Blog Image */}
          {blog.image && (
            <div className="relative w-full h-64 md:h-96" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
                itemProp="contentUrl"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = '/img/flexohost-meta.png'; // Use your default image
                }}
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="p-6 md:p-8">
            {/* Category and Date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF267E] bg-[#FF267E]/10 rounded px-3 py-1" itemProp="articleSection">
                <Tag className="w-3 h-3" />
                {blog.category}
              </span>
              <time 
                dateTime={blog.date} 
                className="inline-flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500"
                itemProp="datePublished"
              >
                <Calendar className="w-3 h-3" />
                {new Date(blog.date).toLocaleDateString("en-BD", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 hover:text-[#009FFF] transition-colors"
              >
                <Share2 className="w-3 h-3" />
                Share
              </button>
            </div>

            {/* Blog Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-4" itemProp="headline">
              {blog.title}
            </h1>

            {/* Blog Excerpt */}
            {blog.excerpt && (
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic border-l-4 border-[#009FFF] pl-4" itemProp="description">
                {blog.excerpt}
              </p>
            )}

            {/* Blog Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="articleBody">
                {(() => {
                  const paragraphs = blog.content.split('\n');
                  const elements: React.ReactElement[] = [];
                  let currentList: string[] = [];
                  let listKey = 0;

                  paragraphs.forEach((paragraph, index) => {
                    // Close list if exists and current paragraph is not a list item
                    if (currentList.length > 0 && !paragraph.startsWith('- ')) {
                      elements.push(
                        <ul key={`list-${listKey++}`} className="list-disc list-inside mb-4 space-y-2">
                          {currentList.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      );
                      currentList = [];
                    }

                    // Handle markdown-style headers
                    if (paragraph.startsWith('## ')) {
                      elements.push(
                        <h2 key={index} className="text-2xl font-bold text-[#0B1437] dark:text-white mt-6 mb-3">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    } else if (paragraph.startsWith('### ')) {
                      elements.push(
                        <h3 key={index} className="text-xl font-bold text-[#0B1437] dark:text-white mt-4 mb-2">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    } else if (paragraph.startsWith('- ')) {
                      // Add to current list
                      currentList.push(paragraph.replace('- ', ''));
                    } else if (paragraph.includes('**')) {
                      // Handle bold text
                      const parts = paragraph.split('**');
                      elements.push(
                        <p key={index} className="mb-4">
                          {parts.map((part, i) => 
                            i % 2 === 1 ? (
                              <strong key={i} className="font-semibold">{part}</strong>
                            ) : (
                              <span key={i}>{part}</span>
                            )
                          )}
                        </p>
                      );
                    } else if (paragraph.trim()) {
                      // Regular paragraph
                      elements.push(
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      );
                    }
                  });

                  // Close any remaining list
                  if (currentList.length > 0) {
                    elements.push(
                      <ul key={`list-${listKey}`} className="list-disc list-inside mb-4 space-y-2">
                        {currentList.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return elements;
                })()}
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-[#232B3E]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#009FFF] text-white font-semibold rounded-lg hover:bg-[#0088cc] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Structured Data (JSON-LD) for SEO */}
      {blog && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: blog.title,
              description: blog.excerpt,
              image: blog.image.startsWith('http')
                ? blog.image
                : `${typeof window !== 'undefined' ? window.location.origin : 'https://flexohost.com'}${blog.image}`,
              datePublished: blog.date,
              dateModified: blog.date,
              author: {
                '@type': 'Organization',
                name: 'FlexoHost',
                url: 'https://flexohost.com',
              },
              publisher: {
                '@type': 'Organization',
                name: 'FlexoHost',
                url: 'https://flexohost.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://flexohost.com/img/flexohost-meta.png',
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${typeof window !== 'undefined' ? window.location.href : 'https://flexohost.com/blog/' + blog.id}`,
              },
              articleSection: blog.category,
              keywords: [blog.category, blog.title, 'web hosting', 'FlexoHost'],
              articleBody: blog.content,
            }),
          }}
        />
      )}
    </main>
  );
}
