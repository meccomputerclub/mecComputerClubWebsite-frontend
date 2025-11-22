"use client";
import React from "react";
import Image from "next/image";

export default function EventDetailPage({ event }) {
  if (!event) return <div className="text-center py-20">Event not found.</div>;

  return (
    <main className="min-h-screen bg-[#F7FAFF] dark:bg-[#0B1221] py-10 px-4 transition-colors">
      <section className="max-w-5xl mx-auto bg-white dark:bg-[#101624] shadow-lg rounded-2xl p-6 md:p-10">
        {/* Banner Image */}
        <div className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden mb-8">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-4">
          {event.title}
        </h1>

        {/* Meta Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <InfoBox label="Date" value={event.date} />
          <InfoBox label="Time" value={event.time} />
          <InfoBox label="Location" value={event.location} />
          <InfoBox label="Category" value={event.category} />
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-10">
          {event.description}
        </p>

        {/* Extra Fields */}
        {event.participants && (
          <InfoList title="Participants" items={[`${event.participants} attendees`]} />
        )}

        {event.speakers && <InfoList title="Speakers" items={event.speakers} />}

        {event.winners && <InfoList title="Winners" items={event.winners} />}

        {/* Button */}
        {event.status === "upcoming" && event.registrationOpen && (
          <button className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
            Register Now
          </button>
        )}
      </section>
    </main>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="p-4 bg-[#EEF4FF] dark:bg-[#1A2342] rounded-xl shadow-sm">
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      <p className="text-lg font-semibold text-[#0B1437] dark:text-white">{value}</p>
    </div>
  );
}

function InfoList({ title, items }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-[#0B1437] dark:text-white mb-2">{title}</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
