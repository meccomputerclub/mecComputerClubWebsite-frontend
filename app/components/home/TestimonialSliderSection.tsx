"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFacebookF } from "react-icons/fa";
import { SiGoogle, SiTrustpilot } from "react-icons/si";

const testimonials = [
  {
    name: "Faisal Hossain",
    title: "Owner of RajkonnaTraders",
    rating: 5,
    avatar: "/img/client-avatars/faisal.png",
    text: "Bangladeshi best server, Abdullah vai very helpful and kind.Must recommended 🤩",
  },
  {
    name: "Tusar Hasan Hridoy",
    title: "Founder of Tushar Associate",
    rating: 5,
    avatar: "/img/client-avatars/tuhsar.png",
    text: "Recommend the best solutions",
  },
  {
    name: "Istyaq Ahmmed",
    title: "Software Engineer at User Teck Solutions",
    rating: 5,
    avatar: "/img/client-avatars/ishtiak.png",
    text: "Blazing fast speed, reliable uptime, and outstanding hosting performance! Recommend it. Keep it up",
  },
  {
    name: "Akash Ghosh",
    title: "Founder of SoftEngineLab",
    rating: 5,
    avatar: "/img/client-avatars/akash.png",
    text: "I am getting a great support from flexohost. My clients from  SoftEngineLab also buy their desired packages from flexohost.",
  },
  {
    name: "Ahtesham Sajid ",
    title: "Founder of InnovaTech",
    rating: 5,
    avatar: "/img/client-avatars/sazid.png",
    text: "We have been using VPS from FlexoHost, and the performance has been outstanding. The speed is excellent, and their support team is very responsive. Special thanks to Abdullah vai for always assisting us quickly whenever we face an issue.So far, our experience with FlexoHost has been reliable and smooth.",
  },
  {
    name: "হাবিবুর রহমান ",
    title: "সম্পাদক , নতুন দিগন্ত ২৪",
    rating: 4,
    avatar: "/img/client-avatars/habibur.png",
    text: "ওয়েবসাইট স্পিডের দিক থেকে Flexohost সত্যিই প্রশংসনীয়। পেজ লোড হয় খুব দ্রুত, কোনো ল্যাগ বা ডাউনটাইম প্রায় নেই। ছোট-বড় সব ধরনের প্রজেক্টের জন্য নির্ভরযোগ্য হোস্টিং সার্ভিস বলা যায়।",
  },
  {
    name: "মুহাম্মদ সাব্বির মাহমুদ ",
    title: "A Repeated Customer",
    rating: 5,
    avatar: "/img/client-avatars/sabbir.png",
    text: "Their service is good & super fast.",
  },
 
];

export default function TestimonialSliderSection() {
  const avatarPreview = testimonials.slice(0, 4);
  const extraCount = Math.max(testimonials.length - avatarPreview.length, 0);

  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 flex flex-col gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-slate-700 dark:text-slate-300 md:justify-start">
              Client Stories
            </span>
            <h2 className="text-2xl font-semibold text-[#0B1437] dark:text-white sm:text-5xl">
              What  <span className="text-[#2346e6]">Our Clients</span> Say
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300 md:mx-0 md:text-base">
              Teams building on FlexoHost enjoy faster performance, dependable uptime, and quick support. Hear directly from customers who trust us every day.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 md:items-end md:self-stretch">
            <div className="flex h-full w-full items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-5 shadow-sm transition-colors dark:border-slate-700/60 dark:bg-slate-900/70 ">
              <div className="flex flex-shrink-0 -space-x-3 pr-3">
                {avatarPreview.map((item, index) => (
                  <span
                    key={`${item.name}-${index}`}
                    className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-slate-200 dark:border-slate-900"
                  >
                    <Image
                      src={item.avatar || "/img/client-avatars/fallback.png"}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="rounded-full object-cover"
                    />
                  </span>
                ))}
                {extraCount > 0 && (
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-semibold text-slate-600 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-300">
                    +{extraCount}
                  </span>
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="mb-1 flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <FaFacebookF className="h-4 w-4 text-[#1877F2]" />
                  <SiGoogle className="h-4 w-4 text-[#EA4335]" />
                  <SiTrustpilot className="h-4 w-4 text-[#14B8A6]" />
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Happy Customers
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Join thousands of satisfied users
                </p>
                <Link
                  href="/client-feedback"
                  className="mt-2 inline-block text-xs font-semibold text-[#4F6DF5] hover:text-[#1d4ed8] dark:text-[#a5b4ff] dark:hover:text-[#c7d2fe]"
                >
                  View all reviews →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={`${testimonial.name}-${index}`}
                className="flex !h-auto items-stretch pb-16"
              >
                <div className="flex h-full w-full">
                  <TestimonialCard {...testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          bottom: 0;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(100, 116, 139, 0.35);
          opacity: 1;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #4f6df5;
          transform: scale(1.3);
        }
        .dark .testimonial-swiper .swiper-pagination-bullet {
          background: rgba(148, 163, 184, 0.4);
        }
        .dark .testimonial-swiper .swiper-pagination-bullet-active {
          background: #a78bfa;
        }
      `}</style>
    </section>
  );
}
