"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EVENT_IMAGES = [
  "/img/events/contest-nov2024/1.jpg",
  "/img/events/contest-nov2024/2.jpg",
  "/img/events/contest-nov2024/3.jpg",
  "/img/events/contest-nov2024/4.jpg",
  "/img/events/contest-nov2024/5.jpg",
  "/img/events/contest-nov2024/6.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl font-bold text-[#0B1437] dark:text-white">Gallery</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Highlights from recent events</p>
        </div>
        <Link href="/gallery/photos" className="text-[#009FFF] hover:underline text-sm font-semibold">
          View gallery
        </Link>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="relative">
        <CarouselContent className="md:-ml-6">
          {EVENT_IMAGES.map((src, idx) => (
            <CarouselItem key={src} className="basis-full md:basis-1/3 pl-0 md:pl-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-[#232B3E] shadow-sm">
                <Image
                  src={src}
                  alt={`Club event photo ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 768px) 30vw, 90vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 shadow-lg" aria-label="Previous photos" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 shadow-lg" aria-label="Next photos" />
      </Carousel>
    </section>
  );
}

