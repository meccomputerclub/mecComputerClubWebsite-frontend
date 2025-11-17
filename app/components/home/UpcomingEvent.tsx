"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type EventItem = {
  id: string;
  title: string;
  date: string; // ISO string
  image: string;
  href: string;
};

function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const distance = target.getTime() - now;
  const clamp = (n: number) => (n < 0 ? 0 : n);
  return {
    distance,
    days: clamp(Math.floor(distance / (1000 * 60 * 60 * 24))),
    hours: clamp(Math.floor((distance / (1000 * 60 * 60)) % 24)),
    minutes: clamp(Math.floor((distance / (1000 * 60)) % 60)),
    seconds: clamp(Math.floor((distance / 1000) % 60)),
  };
}

export default function UpcomingEvent() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    fetch("/json/events.json")
      .then((r) => r.json())
      .then((data: EventItem[]) => setEvents(data))
      .catch(() => setEvents([]));
  }, []);

  // pick the nearest future event
  const upcoming = useMemo(() => {
    const future = events
      .map((e) => ({ ...e, ts: new Date(e.date).getTime() }))
      .filter((e) => e.ts >= now)
      .sort((a, b) => a.ts - b.ts);
    return future[0] || null;
  }, [events, now]);

  // live tick
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!upcoming) return null;
  const target = new Date(upcoming.date);
  const left = getTimeLeft(target);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 dark:border-[#232B3E]">
        <div className="relative h-[260px] sm:h-[320px] md:h-[380px]">
          <Image src={upcoming.image} alt={upcoming.title} fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            {/* Left: title and cta */}
            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white w-max">
                Upcoming Event
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mt-3">{upcoming.title}</h3>
              <div className="mt-3 text-white/90">
                {target.toLocaleDateString()} • {target.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
              <div className="mt-5 flex gap-3">
                <Link
                  href={upcoming.href}
                  className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg shadow transition-colors"
                >
                  View details
                </Link>
                <a
                  href="#events"
                  className="bg-white/15 hover:bg-white/25 text-white font-semibold px-5 py-2.5 rounded-lg shadow transition-colors"
                >
                  More events
                </a>
              </div>
            </div>
            {/* Right: countdown */}
            <div className="hidden md:flex items-center justify-center p-6">
              <div className="grid grid-cols-4 gap-3">
                <TimeBox label="Days" value={left.days} />
                <TimeBox label="Hours" value={left.hours} />
                <TimeBox label="Minutes" value={left.minutes} />
                <TimeBox label="Seconds" value={left.seconds} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  const v = String(value ?? 0).padStart(2, "0");
  return (
    <div className="rounded-xl bg-primary/90 text-primary-foreground px-4 py-3 text-center shadow">
      <div className="text-2xl font-bold">{v}</div>
      <div className="text-xs opacity-90">{label}</div>
    </div>
  );
}


