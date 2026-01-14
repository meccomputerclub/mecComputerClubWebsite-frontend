"use client";
import React, { useState, useMemo, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DASHBOARD_MENU } from "@/lib/constants/dashboard";
import { useAuth } from "@/lib/context/AuthContext";
import UnauthorizedPage from "@/components/ui/shared/Unauthorized";
import { AuthUser } from "@/lib/types";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoading, isAuthenticated, setCustomRole } = useAuth();
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState("activity");
  const [role, setRole] = useState<AuthUser["role"]>(user?.role || "member");

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  // Set initial active tab based on user role
  useEffect(() => {
    if (user) {
      setRole(user.role);
      setActiveTab(user.role === "admin" ? "overview" : "activity");
    }
  }, [user]);

  // Function to handle role switch (for testing/admin purposes only)
  const handleSetRole = async (newRole: "admin" | "member") => {
    if (user?.role !== "admin") {
      alert("Only admins can switch roles");
      return;
    }
    setRole(newRole);
    setCustomRole(newRole);
    setActiveTab(newRole === "admin" ? "overview" : "activity");
    router.push("/dashboard");
  };

  // Memos to dynamically select the correct menu based on role
  const currentMenu = useMemo(() => {
    if (!user) return [];
    return DASHBOARD_MENU[role || user.role];
  }, [user, role]);

  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
    startTransition(() => {
      router.push(`/dashboard/${tabKey}`);
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <UnauthorizedPage></UnauthorizedPage>;
  }

  const renderContent = () => {
    if (isPending) {
      return (
        <div className="flex-1 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading content...</p>
          </div>
        </div>
      );
    }
    // Render children when content is not loading
    return (
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    );
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      {/* Sidebar (visible on lg screens and up) */}
      <DashboardSidebar
        menu={currentMenu}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        role={role}
      />

      <div className="flex flex-col flex-1 lg:ml-64">
        {/* Dashboard Navbar */}
        <DashboardNavbar role={role} onRoleChange={handleSetRole} user={user} />

        {/* Main Content Area */}
        {renderContent()}
      </div>
    </div>
  );
}
