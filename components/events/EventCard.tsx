"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaTag } from "react-icons/fa";

type EventCardProps = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  href: string;
  status: "upcoming" | "past";
  registrationOpen?: boolean;
  maxParticipants?: number;
  participants?: number;
  className?: string;
};

export default function EventCard({
  title,
  description,
  date,
  time,
  location,
  category,
  image,
  href,
  status,
  registrationOpen,
  maxParticipants,
  participants,
  className = "",
}: EventCardProps) {
  const isUpcoming = status === "upcoming";
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className={`rounded-2xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} className="group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
            <FaTag className="text-xs" />
            {category}
          </span>
        </div>
        {isUpcoming && registrationOpen && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold backdrop-blur-sm">
              Open
            </span>
          </div>
        )}
        {isUpcoming && !registrationOpen && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex px-3 py-1 rounded-full bg-gray-500 text-white text-xs font-semibold backdrop-blur-sm">
              Closed
            </span>
          </div>
        )}
        {!isUpcoming && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold backdrop-blur-sm">
              Completed
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0B1437] dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaCalendarAlt className="text-primary flex-shrink-0" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaClock className="text-primary flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaMapMarkerAlt className="text-primary flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
          {isUpcoming && maxParticipants && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FaUsers className="text-primary flex-shrink-0" />
              <span>Max {maxParticipants} participants</span>
            </div>
          )}
          {!isUpcoming && participants !== undefined && (
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <FaUsers className="flex-shrink-0" />
              <span>{participants} participants</span>
            </div>
          )}
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-primary-foreground px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
        >
          {isUpcoming ? "View Details" : "View Recap"}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}

