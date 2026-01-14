"use client";

import React, { useState } from "react";
import { Users, Mail } from "lucide-react";
import InvitationCodeContent from "@/components/dashboard/InvitationCodeContent";
import RolesManagement from "@/components/dashboard/RolesManagement";

// Reusable Tab Button
const TabButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}> = ({ isActive, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 text-lg font-medium rounded-t-lg transition-colors duration-200 ${
      isActive
        ? "text-blue-600 border-b-4 border-blue-600 dark:text-blue-400 dark:border-blue-400"
        : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    }`}
  >
    <Icon className="w-5 h-5 mr-2" />
    {label}
  </button>
);

// --- Main Page Component ---

export default function RolesAndInvitationCodePage() {
  const [activeTab, setActiveTab] = useState<"roles" | "invitation">("roles");

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white border-b pb-4 border-gray-200 dark:border-gray-700">
        Administration: Roles & Invitations
      </h1>

      {/* --- Tabs --- */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <TabButton
          isActive={activeTab === "roles"}
          onClick={() => setActiveTab("roles")}
          icon={Users}
          label="Role Management"
        />
        <TabButton
          isActive={activeTab === "invitation"}
          onClick={() => setActiveTab("invitation")}
          icon={Mail}
          label="Invitation Codes"
        />
      </div>

      {/* --- Content Area --- */}
      <div className="">
        {activeTab === "roles" && <RolesManagement />}
        {activeTab === "invitation" && <InvitationCodeContent />}
      </div>

      {/* You would integrate a global Toast container here */}
      {/* <Toaster /> */}
    </div>
  );
}
