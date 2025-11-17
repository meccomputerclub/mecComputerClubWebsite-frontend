import React from "react";
import Link from "next/link";
import data from "@/app/data/club.json";

export default function ProjectsPreview() {
  const projects = (data.projects || []).slice(0, 3);
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#0B1437] dark:text-white">Club Projects</h2>
        <Link href="/projects/software" className="text-[#009FFF] hover:underline">
          Browse projects
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.title} href={p.href} className="rounded-xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] p-5 hover:shadow transition">
            <div className="inline-block text-xs px-2 py-0.5 rounded bg-[#009FFF]/10 text-[#009FFF]">{p.tag}</div>
            <div className="mt-2 text-lg font-semibold text-[#0B1437] dark:text-white">{p.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}


