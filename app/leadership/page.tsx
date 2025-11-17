"use client";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import data from "@/app/data/executive-commitee.json";
import MemberCard, { MemberCardProps } from "@/app/components/members/MemberCard";

export default function LeadershipPage() {
  interface LeadershipMember {
    name: string;
    role: string;
    batch: string;
    email: string;
    img?: string;
    bio?: string;
    socials?: Record<string, string | undefined>;
  }

  interface LeadershipSession {
    session: string;
    label?: string;
    members: LeadershipMember[];
  }

  const sessions: LeadershipSession[] = (data.sessions as unknown as LeadershipSession[]) || [];
  const [activeSession, setActiveSession] = useState(sessions[0]?.session ?? "");

  const currentSession = sessions.find((s) => s.session === activeSession);
  const leaders: MemberCardProps[] = ((currentSession?.members as LeadershipMember[]) || []).map((m) => ({
    name: m.name,
    role: m.role,
    batch: m.batch,
    email: m.email,
    img: m.img,
    bio: m.bio,
    socials: m.socials
      ? (Object.fromEntries(Object.entries(m.socials).filter(([, v]) => v !== undefined)) as Record<string, string>)
      : undefined,
  }));

  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] min-h-screen transition-colors">
      <PageHero title="Executive Committee" crumbs={[{ label: "Home" }, { label: "Members" }, { label: "Executive Committee" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {sessions.length > 1 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {sessions.map((session) => {
              const isActive = session.session === activeSession;
              return (
                <button
                  key={session.session}
                  onClick={() => setActiveSession(session.session)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white dark:bg-[#181F2A] border-gray-200 dark:border-[#232B3E] text-gray-700 dark:text-gray-300 hover:border-primary"
                  }`}
                >
                  {session.session}
                </button>
              );
            })}
          </div>
        )}

        {sessions.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-200 dark:border-[#232B3E] p-10 text-center text-gray-500 dark:text-gray-300">
            Executive committee data is not available yet.
          </div>
        )}

        {sessions.length > 0 && leaders.length === 0 && (
          <div className="rounded-2xl border border-gray-100 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-10 text-center text-gray-600 dark:text-gray-300">
            No executive members found for the <span className="font-semibold">{activeSession}</span> session.
          </div>
        )}

        {leaders.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {leaders.map((m, idx) => (
              <MemberCard key={`${m.name}-${m.role}-${idx}`} {...m} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

