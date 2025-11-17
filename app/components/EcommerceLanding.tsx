import React from "react";
import Image from "next/image";

const solutions = [
  { name: "WordPress", icon: "/service1.svg" },
  { name: "MERN", icon: "/service2.svg" },
  { name: "Laravel", icon: "/service3.svg" },
  { name: "Shopify", icon: "/service4.svg" },
];

const packages = [
  {
    title: "Starter Package",
    price: "৳ 7,500 BDT",
    features: [
      "ডোমেইন ও হোস্টিং ফ্রি, ১ বছর",
      "ডিজাইন: রেডিমেড/কাস্টম",
      "পণ্য সংখ্যা: ৫০টি পর্যন্ত",
      "অর্ডার ম্যানেজমেন্ট",
      "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
      "ডেলিভারি চার্জ সেটআপ",
      "কাস্টমার রেজিস্ট্রেশন",
      "ডিসকাউন্ট/কুপন সিস্টেম",
      "বেসিক এসইও",
      "ফেসবুক পিক্সেল/গুগল অ্যানালিটিক্স",
      "ফ্রি ট্রেনিং",
    ],
    cta: "Get Started",
    badge: "Save 10%",
  },
  {
    title: "Launch Package",
    price: "৳ 10,500 BDT",
    features: [
      "স্টার্টার প্যাকেজের সব সুবিধা",
      "পণ্য সংখ্যা: ২০০টি পর্যন্ত",
      "অ্যাডভান্সড ডিজাইন",
      "ব্লগ/নিউজ সেকশন",
      "ইনভেন্টরি ম্যানেজমেন্ট",
      "অ্যাফিলিয়েট/রেফারেল সিস্টেম",
      "ইমেইল মার্কেটিং ইন্টিগ্রেশন",
      "লাইভ চ্যাট ইন্টিগ্রেশন",
    ],
    cta: "Get Started",
    badge: "Best Seller",
  },
  {
    title: "Scale Package",
    price: "৳ 15,999 BDT",
    features: [
      "লঞ্চ প্যাকেজের সব সুবিধা",
      "পণ্য সংখ্যা: আনলিমিটেড",
      "কাস্টম ফিচার ডেভেলপমেন্ট",
      "মাল্টি-ভেন্ডর সাপোর্ট",
      "অ্যাডভান্সড রিপোর্টিং",
      "অ্যাপ ইন্টিগ্রেশন",
      "২৪/৭ সাপোর্ট",
    ],
    cta: "Get Started",
    badge: "Save 13.67%",
  },
];

const videoTestimonials = [
  {
    name: "Ikram BD",
    videoUrl: "https://www.youtube.com/embed/hciLjKW_5Kc",
  },
  {
    name: "Aizas World",
    videoUrl: "https://www.youtube.com/embed/0jLahH5FfDY",
  },
  {
    name: "One Self BD",
    videoUrl: "https://www.youtube.com/embed/T0omySV7ZWY",
  },
  {
    name: "Tsamsa",
    videoUrl: "https://www.youtube.com/embed/7DFzZVx4zBo",
  },
];

const clientLogos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo10.png",
  "/logo11.png",
  "/logo12.png",
  "/logo13.png",
  "/logo14.png",
  "/logo15.png",
  "/logo16.png",
  "/logo17.png",
  "/logo18.png",
];

export default function EcommerceLanding() {
  return (
    <div
      className={`max-w-7xl mx-auto bg-white`}
      style={{
        fontFamily:
          "'Hind Siliguri', 'Noto Sans Bengali', 'SolaimanLipi', 'Bangla', sans-serif",
      }}
    >
      {/* Hero Section */}
      <section className="bg-[#0B1437] rounded-b-3xl px-4 pt-8 pb-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-white space-y-6">
          <h1
            className="text-3xl md:text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "inherit" }}
          >
            দেশি ইকমার্স অটোমেশন ওয়েবসাইট
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            আমাদের থেকে পেয়ে যান: WORDPRESS, MERN (React, Node Js), Laravel দিয়ে
            ডেভেলপড অটোমেশন ইকমার্স ওয়েবসাইট। অর্ডার ও ইনভেন্টরি ম্যানেজমেন্ট,
            পেমেন্ট গেটওয়ে, ডেলিভারি চার্জ, কাস্টমার রেজিস্ট্রেশন,
            ডিসকাউন্ট/কুপন, বেসিক এসইও সহ ফুল ফিচারড ই-কমার্স সলিউশন।
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#4F6DF5] to-[#FF267E] text-white font-bold px-8 py-3 rounded-lg shadow hover:from-[#22306a] hover:to-[#4F6DF5] transition-all text-lg"
          >
            প্যাকেজসমূহ দেখুন
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <Image
              src="/img/hero-banner.png"
              alt="ইকমার্স অটোমেশন"
              width={400}
              height={400}
              className="rounded-2xl w-full h-auto"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 px-4">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          style={{ fontFamily: "inherit" }}
        >
          কি কি <span className="text-[#2346e6]">ইকমার্স</span> সলিউশন ?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mb-3 relative">
                <Image
                  src={sol.icon}
                  alt={sol.name}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                className="text-lg font-semibold"
                style={{ fontFamily: "inherit" }}
              >
                {sol.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Banner */}
      <section className="py-8 px-4">
        <div className="bg-gradient-to-r from-[#4F6DF5] to-[#FF267E] rounded-2xl flex flex-col md:flex-row items-center justify-between p-8 gap-6 shadow-lg">
          <div
            className="flex-1 text-white text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "inherit" }}
          >
            আমাদের থেকে কেন নিবেন ?
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-xl shadow w-full max-w-xs overflow-hidden">
              <Image
                src="/img/why-us-banner.png"
                alt="কেন নিবেন"
                width={300}
                height={200}
                className="rounded-xl w-full h-auto"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 px-4 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 bg-[#eaf3ff] rounded-xl p-6 flex flex-col items-center md:items-start">
          <div className="text-lg font-bold mb-2">প্রয়োজনে কল করুন</div>
          <div className="text-2xl font-extrabold text-[#2346e6] mb-2">
            +8801780667954
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-bold mb-2">যেকোনো প্রশ্ন থাকলে ?</div>
          <a
            href="https://wa.me/8801780667954"
            className="inline-block bg-[#25D366] text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-[#128C7E] transition-all text-lg"
          >
            WhatsApp / Call
          </a>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 px-4">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ fontFamily: "inherit" }}
        >
          দেশি ইকমার্স অটোমেশন
          <span className="text-[#2346e6]"> প্যাকেজগুলো</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          দেশি ইকমার্স অটোমেশন ওয়েবসাইটের জন্য আমাদের রয়েছে বিভিন্ন ধরনের
          প্যাকেজ। আপনার ব্যবসার ধরন ও চাহিদা অনুযায়ী বেছে নিন সেরা প্যাকেজটি।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col items-start relative"
            >
              {pkg.badge && (
                <span className="absolute top-4 right-4 bg-[#FF267E] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {pkg.badge}
                </span>
              )}
              <div
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "inherit" }}
              >
                {pkg.title}
              </div>
              <div className="text-2xl font-extrabold text-[#2346e6] mb-4">
                {pkg.price}
              </div>
              <ul className="mb-6 space-y-2 text-gray-700">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#4F6DF5]">•</span> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-auto inline-block bg-gradient-to-r from-[#4F6DF5] to-[#FF267E] text-white font-bold px-6 py-2 rounded-lg shadow hover:from-[#22306a] hover:to-[#4F6DF5] transition-all"
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 px-4">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          style={{ fontFamily: "inherit" }}
        >
          ইকমার্স এর ক্লায়েন্টদের{" "}
          <span className="text-[#FFB800]">ফিডব্যাক</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videoTestimonials.map((video, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <iframe
                width="100%"
                height="220"
                src={video.videoUrl}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[220px]"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 px-4">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          style={{ fontFamily: "inherit" }}
        >
          ক্লায়েন্টের <span className="text-[#2346e6]">ইকমার্স ওয়েবসাইট</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center max-w-5xl mx-auto">
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-2 bg-white rounded-lg shadow border border-gray-100"
            >
              <div className="relative h-12 w-full flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={80}
                  height={48}
                  className="h-12 object-contain w-auto"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
