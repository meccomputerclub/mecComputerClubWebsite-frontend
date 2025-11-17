"use client";
import Image from "next/image";
import React from "react";

export default function AboutClub() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-[#232B3E]">
          <Image
            src="/img/events/contest-nov2024/1.jpg"
            alt="MEC Computer Club activities"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute bottom-5 right-5 bg-gradient-to-br from-primary to-secondary rounded-2xl p-5 text-white shadow-lg hidden md:block">
            <div className="text-3xl font-bold mb-1">42</div>
            <div className="text-sm opacity-90">Active Members</div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary">
            Trusted Student Community
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1437] dark:text-white leading-tight">
            Your Reliable Tech Community at MEC
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-justify">
            MEC Computer Club is a vibrant, student-led community at Mymensingh Engineering College dedicated to advancing technical skills and fostering an inclusive tech culture. Our focus spans coding, robotics, AI/ML, electronics, and innovative product building. 

            We organize a diverse range of activities including hands-on workshops, peer-led study circles, hackathons, coding bootcamps, and mentorship programs–all designed to help members learn by doing and build lasting friendships. Our teams compete in programming contests, robotics challenges, and tech Olympiads at local and national levels.

            Alongside excelling in competitions, we encourage club members to collaborate on real-world projects and contribute to open-source initiatives, enabling them to gain practical experience and develop portfolios. 

          </p>
       
        </div>
      </div>
    </section>
  );
}


