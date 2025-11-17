import React from "react";
import Link from "next/link";
import data from "@/app/data/club.json";

export default function ContactCTA() {
  const cta = data.cta || { headline: "Get Involved", subtext: "Join the club or propose a project." };
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow transition-colors">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">{cta.headline}</h3>
          <p className="text-white/90">{cta.subtext}</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/join"
            className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow transition-colors cursor-pointer"
          >
            Join Now
          </Link>
          <Link
            href="/projects/propose"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors cursor-pointer"
          >
            Propose Project
          </Link>
        </div>
      </div>
    </section>
  );
}


