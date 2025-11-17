"use client";
import React from "react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  crumbs = [],
}: {
  title: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-95" />
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-primary-foreground/90 text-sm mb-3 flex items-center gap-2">
          {crumbs.length > 0 ? (
            <>
              {crumbs.map((c, i) => (
                <span key={i} className="opacity-90">
                  {c.label}
                  {i < crumbs.length - 1 && <span className="mx-2 opacity-60">/</span>}
                </span>
              ))}
            </>
          ) : null}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground tracking-tight animate-in fade-in zoom-in duration-700">
          {title}
        </h1>
      </div>
    </section>
  );
}


