"use client";
import React from "react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Users, Calendar, FileText, ClipboardCheck } from "lucide-react";
import { MOCK_METRICS } from "@/lib/data/mockData";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-3 border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Welcome to MEC Club Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your club activities, events, and member engagement from here.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Members"
          value={MOCK_METRICS.totalMembers.toLocaleString()}
          icon={Users}
          colorClass="text-blue-500"
          link="member-management"
        />
        <DashboardCard
          title="Pending Applications"
          value={MOCK_METRICS.pendingApplications.toString()}
          icon={ClipboardCheck}
          colorClass="text-red-500"
          link="member-management"
        />
        <DashboardCard
          title="Upcoming Events"
          value={MOCK_METRICS.upcomingEvents.toString()}
          icon={Calendar}
          colorClass="text-green-500"
          link="events-management"
        />
        <DashboardCard
          title="Total Certificates"
          value={MOCK_METRICS.totalCertificatesIssued.toLocaleString()}
          icon={FileText}
          colorClass="text-yellow-500"
        />
      </div>

      {/* Quick Info Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Getting Started</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Use the sidebar navigation to explore different sections of the dashboard. You can manage
          members, create events, track assets, and much more.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Create New Event
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            View All Members
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}
