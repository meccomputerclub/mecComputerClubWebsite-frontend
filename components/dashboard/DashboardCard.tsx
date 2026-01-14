"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  colorClass: string;
  link?: string;
  onClick?: () => void;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  colorClass,
  link,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      alert(`Navigating to ${link}`);
    }
  };

  return (
    <div
      className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition hover:shadow-xl cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
    </div>
  );
};
