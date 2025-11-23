"use client";
import PageHero from "@/components/ui/PageHero";
import data from "@/app/data/club.json";
import MemberCard, { MemberCardProps } from "@/app/components/members/MemberCard";

export default function AlumniPage() {
  interface AlumniMember {
    name: string;
    role: string;
    batch: string;
    email: string;
    img?: string;
    bio?: string;
    socials?: Record<string, string | undefined>;
  }
  const alumni: MemberCardProps[] = ((data.alumni as unknown as AlumniMember[]) || []).map((m) => ({
    name: m.name,
    role: m.role,
    batch: m.batch,
    email: m.email,
    img: m.img,
    bio: m.bio,
    socials: m.socials ? Object.fromEntries(
      Object.entries(m.socials).filter(([, v]) => v !== undefined)
    ) as Record<string, string> : undefined,
  })) || [];

  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] min-h-screen transition-colors">
      <PageHero title="Alumni" crumbs={[{ label: "Home" }, { label: "Members" }, { label: "Alumni" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
      {alumni.length &&   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {alumni.map((m, idx) => (
            <MemberCard key={`${m.name}-${idx}`} {...m} />
          ))}
        </div>
      } 
      </section>
    </main>
  );
}


