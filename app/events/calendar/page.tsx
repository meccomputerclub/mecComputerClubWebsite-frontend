"use client";
import React, { useEffect, useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";

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
};

export default function EventsCalendarPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventsOnSelectedDate, setEventsOnSelectedDate] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/json/events.json")
      .then((r) => r.json())
      .then((data: Event[]) => setEvents(data))
      .catch(() => setEvents([]));
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const filtered = events.filter((e) => {
        const eventDate = new Date(e.date);
        return (
          eventDate.getDate() === selectedDate.getDate() &&
          eventDate.getMonth() === selectedDate.getMonth() &&
          eventDate.getFullYear() === selectedDate.getFullYear()
        );
      });
      setEventsOnSelectedDate(filtered);
    } else {
      setEventsOnSelectedDate([]);
    }
  }, [selectedDate, events]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const getEventsForDate = (date: Date | null) => {
    if (!date) return [];
    return events.filter((e) => {
      const eventDate = new Date(e.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const days = getDaysInMonth(currentMonth);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] min-h-screen">
      <PageHero title="Events Calendar" crumbs={[{ label: "Home", href: "/" }, { label: "Events" }, { label: "Calendar" }]} />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={previousMonth}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232B3E] transition-colors"
                >
                  <FaChevronLeft className="text-[#0B1437] dark:text-white" />
                </button>
                <h2 className="text-2xl font-bold text-[#0B1437] dark:text-white">{monthName}</h2>
                <button
                  onClick={nextMonth}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232B3E] transition-colors"
                >
                  <FaChevronRight className="text-[#0B1437] dark:text-white" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Weekday headers */}
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 py-2">
                    {day}
                  </div>
                ))}

                {/* Calendar days */}
                {days.map((date, idx) => {
                  if (!date) {
                    return <div key={`empty-${idx}`} className="aspect-square" />;
                  }

                  const dateEvents = getEventsForDate(date);
                  const isToday =
                    date.toDateString() === new Date().toDateString();
                  const isSelected =
                    selectedDate && date.toDateString() === selectedDate.toDateString();

                  return (
                    <button
                      key={date.getTime()}
                      onClick={() => setSelectedDate(date)}
                      className={`aspect-square rounded-lg border-2 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : isToday
                          ? "border-secondary bg-secondary/10"
                          : "border-transparent hover:border-gray-200 dark:hover:border-[#232B3E] hover:bg-gray-50 dark:hover:bg-[#232B3E]"
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center h-full p-1">
                        <span
                          className={`text-sm font-semibold ${
                            isSelected || isToday
                              ? "text-primary"
                              : "text-[#0B1437] dark:text-white"
                          }`}
                        >
                          {date.getDate()}
                        </span>
                        {dateEvents.length > 0 && (
                          <div className="flex gap-0.5 mt-1">
                            {dateEvents.slice(0, 3).map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 rounded-full bg-primary"
                              />
                            ))}
                            {dateEvents.length > 3 && (
                              <div className="w-1 h-1 rounded-full bg-gray-400" />
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-[#232B3E] flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded border-2 border-secondary bg-secondary/10" />
                  <span className="text-gray-700 dark:text-gray-300">Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded border-2 border-primary bg-primary/10" />
                  <span className="text-gray-700 dark:text-gray-300">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Has events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Date Events */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              {selectedDate ? (
                <div className="rounded-2xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FaCalendarAlt className="text-primary" />
                    <h3 className="text-xl font-bold text-[#0B1437] dark:text-white">
                      {selectedDate.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </h3>
                  </div>
                  {eventsOnSelectedDate.length > 0 ? (
                    <div className="space-y-4">
                      {eventsOnSelectedDate.map((event) => (
                        <div
                          key={event.id}
                          className="p-4 rounded-lg bg-gray-50 dark:bg-[#232B3E] border border-gray-200 dark:border-[#232B3E] hover:shadow transition-all cursor-pointer"
                          onClick={() => window.location.href = event.href}
                        >
                          <div className="text-xs text-primary font-semibold mb-1">{event.category}</div>
                          <h4 className="text-sm font-bold text-[#0B1437] dark:text-white mb-1 line-clamp-2">
                            {event.title}
                          </h4>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{event.time}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 text-sm">No events scheduled for this date</p>
                  )}
                </div>
              ) : (
                <div className="rounded-2xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] p-6 text-center">
                  <FaCalendarAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-700 dark:text-gray-300">Click on a date to view events</p>
                </div>
              )}

              {/* Quick Stats */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
                <h4 className="font-bold mb-4">This Month</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Upcoming:</span>
                    <span className="font-semibold">
                      {events.filter((e) => {
                        const eventDate = new Date(e.date);
                        return (
                          e.status === "upcoming" &&
                          eventDate.getMonth() === currentMonth.getMonth() &&
                          eventDate.getFullYear() === currentMonth.getFullYear()
                        );
                      }).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Events:</span>
                    <span className="font-semibold">
                      {events.filter((e) => {
                        const eventDate = new Date(e.date);
                        return (
                          eventDate.getMonth() === currentMonth.getMonth() &&
                          eventDate.getFullYear() === currentMonth.getFullYear()
                        );
                      }).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

