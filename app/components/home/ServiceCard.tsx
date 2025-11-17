import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  ctaLabel,
  ctaHref,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-[#181F2A] rounded-xl shadow p-8 gap-4 text-center border border-gray-100 dark:border-[#232B3E] transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 hover:border-[#009FFF] dark:hover:border-[#4F6DF5] cursor-pointer">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#F7FAFF] via-[#E0ECFF] to-[#D1D8FF] dark:from-[#232B3E] dark:via-[#232B3E] dark:to-[#4F6DF5]/20 mb-2 transition-transform duration-300 group-hover:scale-110">
        <span className="flex items-center justify-center w-32 h-32 ">
          {icon}
        </span>
      </div>
      <div className="font-bold text-lg text-[#0B1437] dark:text-white">
        {title}
      </div>
      <div className="text-gray-500 dark:text-gray-300 text-sm mb-2">
        {description}
      </div>
      <a
        href={ctaHref}
        className="text-[#009FFF] dark:text-[#4F6DF5] font-semibold hover:underline"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
