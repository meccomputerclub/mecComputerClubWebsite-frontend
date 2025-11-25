"use client";
import React from "react";
import { Calendar } from "lucide-react";
import { MOCK_EVENTS } from "@/lib/data/mockData";

export default function EventsManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b pb-3 border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Event and Content Management
        </h2>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition flex items-center">
          <Calendar className="w-5 h-5 mr-2" /> New Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_EVENTS.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
              {event.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Date: {event.date}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Attendees:{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {event.attendees}
              </span>
            </p>

            <div className="mt-4 flex space-x-3">
              <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
              <button className="text-sm border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                Manage Attendance
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white pt-4 border-t border-gray-200 dark:border-gray-700">
        Media & Tutorials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            Manage Tutorials & Announcements
          </p>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
            Go to CMS
          </button>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <p className="text-lg font-medium text-gray-900 dark:text-white">Media Gallery Uploads</p>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
            Upload Media
          </button>
        </div>
      </div>
    </div>
  );
}
