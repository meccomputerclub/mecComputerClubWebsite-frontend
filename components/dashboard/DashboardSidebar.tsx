"use client";
import React from "react";
import type { MenuItem } from "@/lib/constants/dashboard";
import Image from "next/image";
import { useDarkMode } from "@/lib/DarkModeContext";
import logoLight from "@/public/img/mecHorizontalDark.png";
import logoDark from "@/public/img/mecHorizontalLight128.png";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";
import { AuthUser } from "@/lib/types";

interface DashboardSidebarProps {
  menu: MenuItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  role: AuthUser["role"];
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  menu,
  activeTab,
  onTabChange,
  role,
}) => {
  const { isDark } = useDarkMode();
  const { logout } = useAuth();
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-30">
      {/* Logo */}
      <div className="p-6 flex items-center border-b border-gray-200 dark:border-gray-700">
        <Link href="/">
          <Image
            alt="MEC Computer Club Logo"
            src={isDark ? logoDark : logoLight}
            width={180}
            height={60}
          ></Image>
        </Link>
        <span
          className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
            role === "admin"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
          }`}
        >
          {role}
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
        {menu.map((item) => {
          const isActive = item.key === activeTab;
          return (
            <button
              key={item.key}
              onClick={() => onTabChange(item.key)}
              className={`
                flex items-center w-full px-4 py-2 rounded-lg transition 
                ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          className="flex items-center w-full px-4 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 transition"
          onClick={() => logout()}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
};
