import { Metadata } from 'next';

interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

async function getBlog(blogId: string): Promise<Blog | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flexohost.com';
    const response = await fetch(`${baseUrl}/json/blogs.json`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      return null;
    }
    
    const blogs: Blog[] = await response.json();
    return blogs.find((b) => b.id === blogId) || null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found - MEC Computer Club',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flexohost.com';
  const blogImage = blog.image.startsWith('http') 
    ? blog.image 
    : `${siteUrl}${blog.image}`;
  const blogUrl = `${siteUrl}/blog/${blog.id}`;

  return {
    title: `${blog.title} - FlexoHost Blog`,
    description: blog.excerpt || blog.content.substring(0, 160),
    keywords: [
      blog.category,
      'web hosting',
      'hosting tips',
      blog.title.toLowerCase(),
      'FlexoHost',
    ],
    authors: [{ name: 'FlexoHost' }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.content.substring(0, 160),
      url: blogUrl,
      siteName: 'FlexoHost',
      images: [
        {
          url: blogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: 'bn_BD',
      type: 'article',
      publishedTime: blog.date,
      section: blog.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.content.substring(0, 160),
      images: [blogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* Structured Data will be added dynamically in the page component */}
    </>
  );
}
