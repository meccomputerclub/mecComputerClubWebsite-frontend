import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/img/events/contest-nov2024/13.jpg";

export default function HomeHeroSection() {
  return (
    <section className="relative min-h-[600px] flex flex-col justify-center items-center text-center text-white py-16 overflow-hidden transition-colors">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="MEC Computer Club background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />

        {/* Unique decorative layers */}
        {/* Soft gradient orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#4F6DF5]/30 to-[#00E5FF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#FF267E]/30 to-[#FFB800]/10 blur-3xl" />

        {/* Concentric rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />

        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 opacity-[0.07] text-white"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="mx-auto max-w-3xl flex items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-sm">
            <span className="size-2 rounded-full bg-[#FFB800]" />
            Learn. Build. Share.
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-4">
          MEC <span className="text-[#FFB800]">Computer Club</span>
        </h1>

        {/* Subcopy */}
        <p className="mx-auto max-w-3xl text-lg text-white/90 mb-6">
          Makers and innovators at MEC—coding, robotics, AI, competitions, workshops, and real-world projects.
        </p>

        {/* Actions */}
        <div className="flex flex-row gap-4 justify-center mb-8">
          <Link
            href="/join"
            className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow transition-colors cursor-pointer"
          >
            Join the Club
          </Link>
          <Link
            href="/events/upcoming"
            className="bg-white text-[#0B1437] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Explore Events
          </Link>
        </div>

        {/* Compact stats strip */}
        <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="rounded-xl bg-white/10 backdrop-blur px-4 py-3 text-left">
            <div className="text-2xl font-bold">150+</div>
            <div className="text-white/80 text-sm">Active Members</div>
          </div>
          <div className="rounded-xl bg-white/10 backdrop-blur px-4 py-3 text-left">
            <div className="text-2xl font-bold">35+</div>
            <div className="text-white/80 text-sm">Projects</div>
          </div>
          <div className="rounded-xl bg-white/10 backdrop-blur px-4 py-3 text-left">
            <div className="text-2xl font-bold">20+</div>
            <div className="text-white/80 text-sm">Events / Year</div>
          </div>
          <div className="rounded-xl bg-white/10 backdrop-blur px-4 py-3 text-left">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-white/80 text-sm">Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
