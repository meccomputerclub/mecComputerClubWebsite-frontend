import React from "react";
import Image from "next/image";

interface MultiChannelCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  contact: string;
  onClick?: () => void;
  href?: string;
}

export default function MultiChannelCard({
  iconSrc,
  iconAlt,
  title,
  contact,
  onClick,
  href,
}: MultiChannelCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white/5 rounded-2xl shadow-lg p-4 sm:p-6 border border-[#3A4ED9] transition-colors w-full group">
      <div className="flex items-center justify-center mb-4">
        <span className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#3A4ED9] bg-white/10">
          <span className="transition-transform duration-700 group-hover:rotate-[360deg]">
            <Image src={iconSrc} alt={iconAlt} width={48} height={48} className="w-8 h-8 sm:w-10 sm:h-10" />
          </span>
        </span>
      </div>
      <div className="font-bold text-lg sm:text-xl text-white mb-1">{title}</div>
      <div className="text-[#B6C6FF] text-sm sm:text-base mb-4">{contact}</div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 md:px-7 py-2 rounded-full font-semibold border border-transparent bg-gradient-to-r from-[#0FFFC1] to-[#3A4ED9] text-white transition-all duration-200 hover:bg-white hover:text-[#3A4ED9] hover:border-[#0FFFC1] hover:from-white hover:to-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0FFFC1] focus:ring-offset-2"
        >
          Get in Touch
        </a>
      ) : (
        <button
          onClick={onClick}
          className="inline-block px-4 md:px-7 py-2 rounded-full font-semibold border border-transparent bg-gradient-to-r from-[#0FFFC1] to-[#3A4ED9] text-white transition-all duration-200 hover:bg-white hover:text-[#3A4ED9] hover:border-[#0FFFC1] hover:from-white hover:to-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0FFFC1] focus:ring-offset-2"
        >
          Get in Touch
        </button>
      )}
    </div>
  );
}
