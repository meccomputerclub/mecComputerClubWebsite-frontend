"use client";
import React, { useEffect, useState } from "react";
import PageHero from "@/components/ui/PageHero";
import EventCard from "@/components/events/EventCard";
import { FaSearch, FaFilter } from "react-icons/fa";

type Event = {
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
};

export default function UpcomingEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetch("/json/events.json")
      .then((r) => r.json())
      .then((data: Event[]) => {
        const upcoming = data.filter((e) => e.status === "upcoming").sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setEvents(upcoming);
        setFilteredEvents(upcoming);
      })
      .catch(() => {
        setEvents([]);
        setFilteredEvents([]);
      });
  }, []);

  useEffect(() => {
    let filtered = events;
    
    if (searchQuery) {
      filtered = filtered.filter(
        (e) =>
          e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((e) => e.category === selectedCategory);
    }

    setFilteredEvents(filtered);
  }, [searchQuery, selectedCategory, events]);

  const categories = Array.from(new Set(events.map((e) => e.category)));

  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] min-h-screen">
      <PageHero title="Upcoming Events" crumbs={[{ label: "Home", href: "/" }, { label: "Events" }, { label: "Upcoming" }]} />

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] text-[#0B1437] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 rounded-lg border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] text-[#0B1437] dark:text-white hover:bg-gray-50 dark:hover:bg-[#232B3E] transition-colors flex items-center gap-2"
            >
              <FaFilter />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-white dark:bg-[#181F2A] text-[#0B1437] dark:text-white border border-gray-200 dark:border-[#232B3E]"
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-white dark:bg-[#181F2A] text-[#0B1437] dark:text-white border border-gray-200 dark:border-[#232B3E]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300">
            {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"} found
          </p>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, idx) => (
              <div key={event.id} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${idx * 50}ms` }}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-[#0B1437] dark:text-white mb-2">No upcoming events found</h3>
            <p className="text-gray-700 dark:text-gray-300">Try adjusting your search or filters</p>
          </div>
        )}
      </section>
    </main>
  );
}

