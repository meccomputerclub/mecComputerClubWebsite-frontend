"use client";
import PageHero from "@/components/ui/PageHero";
import data from "@/app/data/club.json";
import MemberCard, { MemberCardProps } from "@/app/components/members/MemberCard";

export default function MembershipPage() {
  interface ClubMember {
    name: string;
    role: string;
    batch: string;
    email: string;
    img?: string;
    bio?: string;
    socials?: Record<string, string | undefined>;
  }
  const members: MemberCardProps[] = ((data.members as unknown as ClubMember[]) || []).map((m) => ({
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
      <PageHero title="Membership" crumbs={[{ label: "Home" }, { label: "Members" }, { label: "Membership" }]} />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white">Our Members</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            The people who make the club vibrant — builders, learners, mentors.
          </p>
        </div>
        {members.length && 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <MemberCard key={`${m.name}-${idx}`} {...m} />
          ))}
        </div>
        }
        <div className="mt-12 rounded-2xl border border-gray-100 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-6 md:p-8">
          <h3 className="text-2xl font-bold text-[#0B1437] dark:text-white mb-2">Become a Member</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We welcome passionate students in coding, robotics, AI/ML, IoT, and beyond. Join us to learn, build, and compete together.
          </p>
          <a
            href="/join"
            className="inline-block mt-4 bg-primary hover:bg-secondary text-primary-foreground font-semibold px-6 py-2.5 rounded-lg shadow transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}


