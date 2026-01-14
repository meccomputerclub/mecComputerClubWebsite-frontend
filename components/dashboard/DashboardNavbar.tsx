"use client";
import React, { useState } from "react";
import { Code, User, ChevronDown, LogOut } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";
import { AuthUser } from "@/lib/types";

interface DashboardNavbarProps {
  role: AuthUser["role"];
  onRoleChange: (role: "admin" | "member") => void;
  user: AuthUser | null;
}

export const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ role, onRoleChange, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout, user: authUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Mobile */}
          <div className="flex items-center lg:hidden">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              MEC Computer Club
            </span>
          </div>

          {/* Right side - User menu */}
          <div className="ml-auto relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <User className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-2" />
              <span className="font-medium text-gray-800 dark:text-gray-200 hidden sm:inline">
                {user?.fullName || "User"}
              </span>
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30">
                <div className="p-2 space-y-1">
                  {/* User Info */}
                  <div className="px-4 py-2 border-b dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {user?.fullName || "User"}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {role}
                    </span>
                  </div>

                  {/* Role Switch (Only for admins in development) */}
                  {authUser?.role === "admin" && process.env.NODE_ENV === "development" && (
                    <button
                      onClick={() => {
                        const newRole = role === "admin" ? "member" : "admin";
                        onRoleChange(newRole);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition"
                    >
                      Switch to {role === "admin" ? "Member" : "Admin"} View
                    </button>
                  )}

                  {/* Profile Link */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      // Navigate to profile page
                      window.location.href = "/dashboard/profile";
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition"
                  >
                    Profile Settings
                  </button>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
