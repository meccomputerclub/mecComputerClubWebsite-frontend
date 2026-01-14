"use client";
import React from "react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { DollarSign, BarChart3, FileText } from "lucide-react";

export default function SponsorsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-b pb-3 border-gray-200 dark:border-gray-700">
        Sponsor and Financial Management
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Active Sponsors"
          value="5"
          icon={DollarSign}
          colorClass="text-green-500"
        />
        <DashboardCard
          title="Annual Budget"
          value="$50k"
          icon={BarChart3}
          colorClass="text-blue-500"
        />
        <DashboardCard
          title="Pending Invoices"
          value="2"
          icon={FileText}
          colorClass="text-yellow-500"
        />
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Sponsor Details</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Manage contact info, contribution tiers, and renewal dates for all club sponsors.
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
            Go to Sponsors List
          </a>
        </p>
      </div>
    </div>
  );
}
