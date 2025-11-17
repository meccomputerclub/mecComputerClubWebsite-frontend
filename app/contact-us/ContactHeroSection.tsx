import React from "react";
import Image from "next/image";
import ContactHeroImg from "@/public/img/contact-heroimg.svg";

export default function ContactHeroSection() {
  return (
    <section className="relative w-full min-h-[340px] bg-gradient-to-r from-[#0B1437] to-[#009FFF] dark:from-[#181F2A] dark:to-[#4F6DF5] py-16 overflow-hidden transition-colors">
      {/* Full-width background gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1437]/80 to-[#009FFF]/80 dark:from-[#181F2A]/90 dark:to-[#4F6DF5]/80 pointer-events-none transition-colors" />
      </div>
      {/* Main content centered and max-w-7xl */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-16">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white dark:text-white">
            Contact us,
            <br />
            Feel free to contact
          </h1>
          <p className="mb-6 text-lg opacity-90 max-w-md text-white dark:text-gray-200">
            Easily accessible customer service is crucial in today&apos;s
            24-hour, online business environment. FlexoHost&apos;s experienced
            team Members.
          </p>
          <a
            href="https://wa.me/8801780667954"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#009FFF] font-semibold rounded-lg shadow hover:bg-blue-50 dark:bg-[#232B3E] dark:text-[#4F6DF5] dark:hover:bg-[#232B3E]/80 transition-colors"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A12 12 0 1 0 12 24a12 12 0 0 0 8.52-20.52zM12 22.2A10.2 10.2 0 1 1 22.2 12 10.21 10.21 0 0 1 12 22.2zm5.61-7.16c-.23-.12-1.36-.67-1.57-.75s-.36-.12-.51.12-.59.75-.72.91-.27.17-.5.06a8.36 8.36 0 0 1-2.46-1.52 9.23 9.23 0 0 1-1.7-2.1c-.18-.31 0-.47.13-.62.13-.13.29-.34.44-.51a.54.54 0 0 0 .09-.53c0-.12-.51-1.23-.7-1.68s-.37-.39-.51-.4-.28 0-.44 0a.85.85 0 0 0-.62.29 2.6 2.6 0 0 0-.82 2c0 1.18.85 2.32 1 2.48a10.94 10.94 0 0 0 4.13 3.36c.58.25 1.03.4 1.38.51a3.32 3.32 0 0 0 1.51.1 2.57 2.57 0 0 0 1.68-1.18 2.13 2.13 0 0 0 .15-1.18c-.06-.11-.21-.17-.44-.29z" />
            </svg>
            WhatsApp Support
          </a>
        </div>
        <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
          <Image
            src={ContactHeroImg}
            alt="Contact Illustration"
            width={340}
            height={220}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
