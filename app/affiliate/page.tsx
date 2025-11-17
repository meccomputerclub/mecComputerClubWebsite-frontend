"use client";
import Image from "next/image";
import { useState } from "react";

const domainHostingBundle = [
  {
    name: "Domain Hosting Bundle Plan-A",
    price: "1,999 BDT",
    commission: "200 BDT",
  },
  {
    name: "Domain Hosting Bundle Plan-B",
    price: "2,550 BDT",
    commission: "250 BDT",
  },
  {
    name: "Domain Hosting Bundle Plan-C",
    price: "2,899 BDT",
    commission: "290 BDT",
  },
  {
    name: "Domain Hosting Bundle Plan-D",
    price: "3,299 BDT",
    commission: "320 BDT",
  },
  {
    name: "Domain Hosting Bundle Plan-E",
    price: "329 BDT",
    commission: "370 BDT",
  },
  {
    name: "Domain Hosting Bundle Plan-F",
    price: "4,250 BDT",
    commission: "430 BDT",
  },
  {
    name: "Domain Hosting Bundle Plan-G",
    price: "4,599 BDT",
    commission: "460 BDT",
  },
  {
    name: "Domain Hosting Bundle Plan-H",
    price: "4,999 BDT",
    commission: "500 BDT",
  },
];
const webHosting = [
  { name: "Starter Plan WH", price: "720 BDT", commission: "70 BDT" },
  { name: "Lite Plan WH", price: "1380 BDT", commission: "140 BDT" },
  { name: "Basic Plan WH", price: "2220 BDT", commission: "222 BDT" },
  { name: "Standard Plan WH", price: "2820 BDT", commission: "280 BDT" },
  { name: "Pro Plan WH", price: "3240 BDT", commission: "320 BDT" },
  { name: "Business Plan WH", price: "3720 BDT", commission: "370 BDT" },
  { name: "Premium Plan WH", price: "4440 BDT", commission: "450 BDT" },
  { name: "Elite Plan WH", price: "5280 BDT", commission: "530 BDT" },
  { name: "Ultimate Plan WH", price: "5640 BDT", commission: "570 BDT" },
  { name: "Supreme Plan WH", price: "6720 BDT", commission: "670 BDT" },
  { name: "Enterprise Plan WH", price: "7080 BDT", commission: "700 BDT" },
  { name: "Titan Plan WH", price: "8160 BDT", commission: "800 BDT" },
];
const premiumHosting = [
  { name: "Go Plan PH", price: "4,200 BDT", commission: "420 BDT" },
  { name: "Core Plan PH", price: "7,900 BDT", commission: "710 BDT" },
  { name: "Growth Plan PH", price: "9,480 BDT", commission: "950 BDT" },
  { name: "Edge Plan PH", price: "10,920 BDT", commission: "1100 BDT" },
  { name: "Boost Plan PH", price: "14,540 BDT", commission: "1450 BDT" },
  { name: "Scale Plan PH", price: "18,720 BDT", commission: "1800 BDT" },
  { name: "Power Plan PH", price: "21,000 BDT", commission: "2050 BDT" },
  { name: "Max Plan PH", price: "26,520 BDT", commission: "2450 BDT" },
];
const bdixHosting = [
  { name: "Starter Plan BDIX", price: "1,000 BDT", commission: "100 BDT" },
  { name: "Lite Plan BDIX", price: "1,740 BDT", commission: "170 BDT" },
  { name: "Basic Plan BDIX", price: "2,700 BDT", commission: "230 BDT" },
  { name: "Standard Plan BDIX", price: "3,300 BDT", commission: "330 BDT" },
  { name: "Pro Plan BDIX", price: "3,720 BDT", commission: "370 BDT" },
  { name: "Business Plan BDIX", price: "4,800 BDT", commission: "480 BDT" },
  { name: "Premium Plan BDIX", price: "5,280 BDT", commission: "530 BDT" },
  { name: "Elite Plan BDIX", price: "5,840 BDT", commission: "600 BDT" },
  { name: "Ultimate Plan BDIX", price: "6,340 BDT", commission: "680 BDT" },
  { name: "Supreme Plan BDIX", price: "7,320 BDT", commission: "760 BDT" },
  { name: "Enterprise Plan BDIX", price: "8,100 BDT", commission: "870 BDT" },
  { name: "Titan Plan BDIX", price: "9,000 BDT", commission: "900 BDT" },
];

function CommissionTable({
  title,
  data,
}: {
  title: string;
  data: { name: string; price: string; commission: string }[];
}) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#0B1437] to-[#009FFF] dark:from-[#4F6DF5] dark:to-[#FF267E] drop-shadow-lg tracking-tight">
        {title}
      </h2>
      <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white dark:bg-[#181F2A] border border-[#e0e7ff] dark:border-[#232B3E]">
        <table className="min-w-full text-left border-separate border-spacing-y-2 ">
          <thead className="sticky top-0 z-10 ">
            <tr className="bg-gradient-to-r from-[#0B1437] to-[#222222] text-white bg-green-300">
              <th className="py-4 px-6   font-semibold text-lg">Plan Name</th>
              <th className="py-4 px-6 font-semibold text-lg">Price /year</th>
              <th className="py-4 px-6 font-semibold text-lg">
                Commission (Onetime)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.name}
                className="hover:bg-[#F7FAFF] dark:hover:bg-[#232B3E] transition group"
              >
                <td className="py-3 px-6 text-[#0B1437] dark:text-white font-medium whitespace-nowrap border-b border-gray-100 dark:border-[#232B3E] group-hover:pl-8 transition-all duration-200">
                  {row.name}
                </td>
                <td className="py-3 px-6 text-[#009FFF] font-semibold whitespace-nowrap border-b border-gray-100 dark:border-[#232B3E]">
                  {row.price}
                </td>
                <td className="py-3 px-6 text-[#FF267E] font-semibold whitespace-nowrap border-b border-gray-100 dark:border-[#232B3E]">
                  {row.commission}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function AffiliatePage() {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <main className="min-h-screen bg-[#F7FAFF] dark:bg-[#101624] py-0 transition-colors">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#0B1437] to-[#009FFF] dark:from-[#181F2A] dark:to-[#4F6DF5] py-20 px-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="#fff"
              fillOpacity="0.04"
              d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 z-10">
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-xl tracking-tight">
              Earn Money By <span className="text-[#FFB800]">Affiliate</span>
            </h1>
            <p className="text-white/90 text-xl mb-8">
              Join our Affiliate Program and start earning today! Watch the
              video for details. Minimum withdrawal:{" "}
              <span className="font-bold text-[#FFB800]">600 BDT</span>. No
              other conditions!
            </p>
            <div className="flex gap-4 mb-8 flex-wrap">
              <a
                href="#"
                className="bg-gradient-to-r from-[#009FFF] to-[#4F6DF5] hover:from-[#0052D4] hover:to-[#22306a] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all cursor-pointer text-lg"
              >
                Join as Affiliate
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-[#FF267E] to-[#FFB800] hover:from-[#FF6A00] hover:to-[#FFB800] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all cursor-pointer text-lg"
              >
                Commission Rate
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md group">
              <Image
                src="https://img.youtube.com/vi/VZiX9sVsRVo/hqdefault.jpg"
                alt="Affiliate Program Video Thumbnail"
                width={400}
                height={256}
                className="w-full h-64 object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                style={{ width: "100%", height: "16rem" }}
                unoptimized
              />
              <button
                className="absolute inset-0 flex items-center justify-center group focus:outline-none"
                tabIndex={-1}
                aria-label="Play Affiliate Program Video"
                onClick={() => setOpenVideo(true)}
              >
                <span className="block w-24 h-24 rounded-full bg-white/80 shadow-xl items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    className="w-12 h-12 text-[#FF267E] drop-shadow-glow"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </span>
              </button>
            </div>
            <span className="mt-5 text-white font-semibold text-xl drop-shadow">
              Affiliate Program Video
            </span>
          </div>
        </div>
        {/* Video Modal */}
        {openVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setOpenVideo(false)}
          >
            <div
              className="relative bg-black rounded-2xl shadow-2xl max-w-5xl w-full mx-4 p-4 md:p-8 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
                onClick={() => setOpenVideo(false)}
                aria-label="Close video"
              >
                &times;
              </button>
              <div className="w-full" style={{ maxWidth: "900px" }}>
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    src="https://www.youtube.com/embed/VZiX9sVsRVo?autoplay=1"
                    title="Affiliate Program Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-[60vw] md:h-[500px] rounded-xl"
                    style={{ minHeight: 300, maxHeight: 600 }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* Commission Tables Sections */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <CommissionTable
          title="Domain-Hosting Bundle"
          data={domainHostingBundle}
        />
        <CommissionTable title="Web Hosting" data={webHosting} />
        <CommissionTable title="Premium Hosting" data={premiumHosting} />
        <CommissionTable title="BDIX Hosting" data={bdixHosting} />
      </section>
      <style jsx global>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 16px #ff267e) drop-shadow(0 0 32px #ff267e);
        }
      `}</style>
    </main>
  );
}
