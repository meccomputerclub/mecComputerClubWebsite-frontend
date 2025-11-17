import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface HostingBreadcrumbTabsProps {
  title: string;
  image: string | StaticImageData;
  current: "bundle" | "web" | "premium" | "bdix" | "ecommerce";
  children?: React.ReactNode;
}

const hostingTabs = [
  {
    key: "bundle",
    label: "Domain-Hosting Bundle",
    href: "/hosting/domain-hosting-bundle",
  },
  { key: "web", label: "Web Hosting", href: "/hosting/web-hosting" },
  {
    key: "premium",
    label: "Premium Web Hosting",
    href: "/hosting/premium-web-hosting",
  },
  { key: "bdix", label: "BDIX Hosting", href: "/hosting/bdix-hosting" },
];

export default function HostingBreadcrumbTabs({
  title,
  image,
  current,
  children,
}: HostingBreadcrumbTabsProps) {
  return (
    <>
      <section className="relative min-h-[220px] flex flex-col justify-center items-center text-center text-white py-12 md:py-16 overflow-hidden transition-colors">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1437]/80 to-[#009FFF]/80 dark:from-[#181F2A]/90 dark:to-[#4F6DF5]/80" />
        </div>
        <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
            {title}
          </h1>
          {children}
        </div>
      </section>
      {/* Tabs at the bottom */}
      <div className="w-full bg-blue-500 pt-4 items-end-safe hidden md:flex">
        <div className="mx-auto flex gap-2 max-w-7xl">
          {hostingTabs.map((tab) => {
            const isActive = current === tab.key;
            return (
              <Link
                key={tab.key}
                href={tab.href}
                className={`
                  inline-block
                  text-center
                  px-5 py-4
                  font-semibold
                  text-base
                  transition-all
                  duration-200
                  border-t-4
                  ${
                    isActive
                      ? "bg-white text-[#4F6DF5] dark:bg-[#4F6DF5] dark:text-white border-t-[#009FFF] dark:border-t-[#4F6DF5] rounded-tl-sm rounded-tr-sm"
                      : "text-white hover:bg-white/40 dark:text-white/80 hover:dark:bg-[#232B3E]/60 border-t-transparent"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
