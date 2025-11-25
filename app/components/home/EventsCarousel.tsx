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

type EventItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  href: string;
  status: string;
};

export default function EventsCarousel() {
  const [events, setEvents] = useState<EventItem[]>([]);

useEffect(() => {
  fetch("/json/events.json")
    .then((r) => r.json())
    .then((data: EventItem[]) => {
      const pastEvents = data.filter((e) => e.status === "past");
      setEvents(pastEvents);
    })
    .catch(() => setEvents([]));
}, []);

  if (events.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B1437] dark:text-white">Latest Events</h2>
        <Link href="/events/upcoming" className="text-primary hover:text-secondary text-sm md:text-base">View all</Link>
      </div>
      <Carousel opts={{ align: "start", loop: true }} className="relative rounded-2xl border border-gray-100 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-3">
        <CarouselContent className="md:-ml-4">
          {events.map((ev) => (
            <CarouselItem key={ev.id} className="basis-full md:basis-1/3 pl-0 md:pl-4">
              <div className="h-full rounded-xl overflow-hidden border border-gray-100 dark:border-[#232B3E] flex flex-col">
                <div className="relative w-full aspect-[16/10]">
                  <Image src={ev.image} alt={ev.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="inline-flex text-xs px-2 py-0.5 rounded bg-primary/10 text-primary w-fit">
                    {new Date(ev.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                  <h3 className="text-[#0B1437] dark:text-white text-base font-semibold mt-2 line-clamp-2 flex-1">
                    {ev.title}
                  </h3>
                  <Link href={ev.href} className="inline-flex mt-3 bg-primary hover:bg-secondary text-primary-foreground font-semibold px-3 py-1.5 rounded-lg shadow transition-colors text-sm w-fit">
                    Learn more
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 shadow-lg" aria-label="Previous events" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 shadow-lg" aria-label="Next events" />
      </Carousel>
    </section>
  );
}


