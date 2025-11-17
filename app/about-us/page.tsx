"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] transition-colors min-h-screen pb-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-95 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground tracking-tight drop-shadow-lg animate-in fade-in zoom-in duration-800 mb-5 text-center">
            About MEC Computer Club
          </h1>
          <p className="max-w-3xl mx-auto text-primary-foreground/90 text-lg md:text-2xl font-medium animate-in fade-in slide-in-from-bottom-2 duration-800 mb-8 text-center text-justify">
            We are a student-led community advancing coding, robotics, AI, and technology culture at MEC.
          </p>
          <div className="flex flex-col gap-3 items-center sm:flex-row sm:gap-6 justify-center mt-4 w-full">
            <Link
              href="/join"
              className="bg-white text-[#0B1437] hover:bg-gray-100 font-semibold px-7 py-3 rounded-lg shadow transition-colors min-w-[180px] text-center animate-in fade-in slide-in-from-bottom-4"
            >
              Join the Club
            </Link>
            <Link
              href="/events/upcoming"
              className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-7 py-3 rounded-lg shadow transition-colors min-w-[180px] text-center animate-in fade-in slide-in-from-bottom-4"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / What We Do */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              desc: "Empower students to build real-world tech projects and excel in competitions.",
              icon: "/img/svg/launch.svg",
            },
            {
              title: "Our Vision",
              desc: "A vibrant community where learning-by-doing drives innovation and leadership.",
              icon: "/img/svg/vision.svg",
            },
            {
              title: "What We Do",
              desc: "Workshops, study circles, hackathons, mentorship, and open-source projects.",
              icon: "/img/svg/workshop.svg",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] px-8 py-10 flex flex-col items-center text-center gap-2 hover:shadow-lg transition-shadow animate-in fade-in slide-in-from-bottom-2 w-full"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                <Image src={c.icon} alt={c.title} width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1437] dark:text-white mb-1">{c.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base text-justify">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Club Highlight Block: Responsive Row Layout */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row gap-12 items-center">
        {/* Text Block */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-5">
            Learn • Build • Share
          </h2>
          <div className="mb-7 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-4 text-justify">
            <p>
              <b>MEC Computer Club</b> is the official student-driven computing community of the Department of Computer Science &amp; Engineering, Mymensingh Engineering College. Founded with the goal of empowering students through technology, problem-solving, and collaboration, the club has grown into a vibrant hub for learners, innovators, and future tech leaders.
            </p>
            <p className="font-semibold text-primary text-justify">
              We organize a variety of academic and skill-building activities:
            </p>
            <ul className="list-inside list-disc pl-4 mb-2 text-gray-800 dark:text-gray-200 text-base text-justify">
              <li>💻 Competitive Programming Sessions &amp; Contests</li>
              <li>🎓 Career Guidance Sessions with Alumni &amp; Industry Experts</li>
              <li>📘 Workshops on Programming, Algorithms, and Tech Skills</li>
              <li>🤝 Collaboration Events with Departmental Committees</li>
              <li>📝 Resource Sharing, Mentorship, and Upsolving Sessions</li>
            </ul>
            <p>
              Our mission: <span className="font-medium">Help students grow in programming, research, and software development,</span> while sustaining a supportive environment for everyone—beginners to advanced programmers—to learn and thrive.
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mb-8 lg:mb-0 gap-4">
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 dark:border-[#232B3E] shadow-md aspect-[5/3] w-full max-w-xl min-h-[220px]">
            <Image
              src="/img/events/contest-nov2024/1.jpg"
              alt="MEC Computer Club Activity"
              fill
              style={{ objectFit: "cover" }}
              className="transition-all duration-500"
              sizes="(min-width: 1024px) 600px, 90vw"
            />
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center px-6 text-justify">
            The club also proudly represents MEC at nationally recognized platforms like ICPC & IUPC, promoting teamwork, discipline, and a passion for learning.<br /><br />
            We believe in community, consistency, and continuous improvement. Together, we build the future of MEC.
          </p>
        </div>
      </section>
    </main>
  );
}
