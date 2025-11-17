import React from "react";
import Link from "next/link";
import data from "@/app/data/club.json";

export default function ResourcesPreview() {
  const resources = (data.resources || []).slice(0, 3);
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#0B1437] dark:text-white">Resources</h2>
        <Link href="/resources/tutorials" className="text-[#009FFF] hover:underline">
          View tutorials
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((r) => (
          <Link key={r.title} href={r.href} className="rounded-xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] p-5 hover:shadow transition">
            <div className="text-lg font-semibold text-[#0B1437] dark:text-white">{r.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tutorial</div>
          </Link>
        ))}
      </div>
    </section>
  );
}


