import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white dark:bg-[#181F2A] rounded-xl shadow p-6 gap-3 border border-gray-100 dark:border-[#232B3E] transition-colors">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="font-bold text-lg text-[#0B1437] dark:text-white">
        {title}
      </div>
      <div className="text-gray-500 dark:text-gray-300 text-sm">
        {description}
      </div>
    </div>
  );
}
