"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  title?: string;
  rating?: number;
  avatar?: string;
}

const GRADIENTS = [
  "from-[#4F6DF5] via-[#746CFF] to-[#FF267E]",
  "from-[#0EA5E9] via-[#2563EB] to-[#7C3AED]",
  "from-[#22C55E] via-[#16A34A] to-[#0EA5E9]",
  "from-[#F97316] via-[#EC4899] to-[#6366F1]",
];

function truncateText(str: string, maxLength: number) {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + "…";
}

export default function TestimonialCard({
  avatar,
  name,
  text,
  title,
  rating = 5,
}: TestimonialCardProps) {
  const initials = useMemo(() => {
    if (!name) return "FH";
    const parts = name.trim().split(" ");
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  }, [name]);

  const gradient = useMemo(() => {
    const index = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % GRADIENTS.length;
    return GRADIENTS[index];
  }, [name]);

  const safeRating = Math.max(0, Math.min(5, Math.round(rating)));

  const displayText = useMemo(() => truncateText(text, 100), [text]);

  return (
    <article className="flex h-full w-full flex-col gap-6 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm transition-colors dark:border-slate-700/60 dark:bg-slate-900/70">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {avatar ? (
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#4F6DF5]/25 dark:ring-[#4F6DF5]/40">
              <Image
                src={avatar}
                alt={name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-base font-semibold text-white shadow-md`}
            >
              {initials}
            </div>
          )}

          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              {name}
            </p>
            {title && (
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {title}
              </p>
            )}
            <div className="mt-2 flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < safeRating
                      ? "text-amber-400 fill-amber-400"
                      : "text-slate-300 dark:text-slate-600"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <blockquote className="relative flex flex-1 flex-col justify-between gap-6">
        <div className="flex items-start gap-4">
          <Quote className="mt-1 h-10 w-10 flex-shrink-0 text-[#4F6DF5]/70 dark:text-[#4F6DF5]" />
          <p className="flex-1 text-base leading-relaxed text-slate-700 dark:text-slate-200">
            {displayText}
          </p>
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
          Verified FlexoHost Client
        </span>
      </blockquote>
    </article>
  );
}
