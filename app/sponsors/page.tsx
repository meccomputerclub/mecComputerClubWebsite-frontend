"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

type Sponsor = { name: string; logo: string; href: string };

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  useEffect(() => {
    fetch("/json/sponsors.json")
      .then((r) => r.json())
      .then((data: Sponsor[]) => setSponsors(data))
      .catch(() => setSponsors([]));
  }, []);

  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] min-h-screen">
      <PageHero title="Our Sponsors" crumbs={[{ label: "Home" }, { label: "Sponsors" }]} />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {sponsors.map((sp) => (
            <a key={sp.name} href={sp.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-3 flex items-center justify-center hover:shadow-lg transition">
              <div className="relative w-full h-16">
                <Image src={sp.logo} alt={sp.name} fill style={{ objectFit: "cover" }} className="rounded" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}


