import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - MEC Computer Club',
  description: 'Learn about web hosting, BDIX hosting, WordPress hosting, VPS hosting, and more. Get expert tips, guides, and tutorials from FlexoHost.',
  keywords: [
    'web hosting blog',
    'hosting tips',
    'BDIX hosting guide',
    'WordPress hosting',
    'VPS hosting',
    'hosting tutorials',
    'web hosting Bangladesh',
    'domain hosting blog'
  ],
  openGraph: {
    title: 'Blog - FlexoHost | Web Hosting Tips & Guides',
    description: 'Learn about web hosting, BDIX hosting, WordPress hosting, VPS hosting, and more. Get expert tips, guides, and tutorials from FlexoHost.',
    url: 'https://flexohost.com/blog',
    siteName: 'FlexoHost',
    images: [
      {
        url: '/img/flexohost-meta.png',
        width: 1200,
        height: 630,
        alt: 'FlexoHost Blog',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - FlexoHost | Web Hosting Tips & Guides',
    description: 'Learn about web hosting, BDIX hosting, WordPress hosting, VPS hosting, and more.',
    images: ['/img/flexohost-meta.png'],
  },
  alternates: {
    canonical: 'https://flexohost.com/blog',
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* Structured Data for Blog Listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'FlexoHost Blog',
            description: 'Web hosting tips, guides, and tutorials from FlexoHost',
            url: 'https://flexohost.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'FlexoHost',
              url: 'https://flexohost.com',
            },
          }),
        }}
      />
    </>
  );
}
