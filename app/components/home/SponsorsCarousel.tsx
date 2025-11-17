"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Sponsor = { name: string; logo: string; href: string };

export default function SponsorsCarousel() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    fetch("/json/sponsors.json")
      .then((r) => r.json())
      .then((data: Sponsor[]) => setSponsors(data))
      .catch(() => setSponsors([]));
  }, []);

  if (sponsors.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10" aria-label="Sponsors">
      <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B1437] dark:text-white">Our Sponsors</h2>
        <Link href="/sponsors" className="text-primary hover:text-secondary text-sm md:text-base">All Sponsors</Link>
      </div>
      <Carousel opts={{ align: "start", loop: true, dragFree: true }} className="relative rounded-2xl border border-gray-100 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] px-4 py-6">
        <CarouselContent className="-ml-6">
          {sponsors.map((sp) => (
            <CarouselItem key={sp.name} className="basis-1/2 sm:basis-1/3 md:basis-1/5 pl-6">
              <a
                href={sp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#101624]">
                  <Image src={sp.logo} alt={sp.name} fill style={{ objectFit: "contain", padding: "10px" }} sizes="160px" />
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 shadow-lg" aria-label="Previous sponsors" />
        <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 shadow-lg" aria-label="Next sponsors" />
      </Carousel>
    </section>
  );
}

