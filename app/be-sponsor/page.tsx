"use client";
import React, { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { FaHandshake, FaTrophy, FaUsers, FaBullhorn, FaChartLine, FaHeart, FaCheckCircle, FaArrowRight, FaEnvelope, FaPhone, FaClock, FaStar } from "react-icons/fa";
import SponsorsCarousel from "../components/home/SponsorsCarousel";

export default function BeSponsorPage() {
  const [activeStep, setActiveStep] = useState(0);

  const benefits = [
    {
      icon: <FaBullhorn className="text-3xl" />,
      title: "Brand Visibility",
      desc: "Get your brand showcased across our events, website, and social media platforms.",
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Talent Acquisition",
      desc: "Connect with top tech talent from MEC Computer Club for internships and full-time roles.",
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "CSR Impact",
      desc: "Demonstrate your commitment to education and youth development in Bangladesh.",
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Community Engagement",
      desc: "Build meaningful relationships with students, alumni, and the tech community.",
      color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
    },
  ];

  const sponsorshipTiers = [
    {
      name: "Bronze",
      amount: "৳ 10,000 - ৳ 25,000",
      features: [
        "Logo on event banners",
        "Social media mentions",
        "Thank you certificate",
        "Event invitation",
      ],
      color: "border-orange-300 dark:border-orange-700",
      bgColor: "bg-orange-50 dark:bg-orange-900/10",
    },
    {
      name: "Silver",
      amount: "৳ 25,000 - ৳ 50,000",
      features: [
        "All Bronze benefits",
        "Logo on website sponsors page",
        "Booth/table at events",
        "Speaking opportunity (5 min)",
        "Featured in newsletters",
      ],
      color: "border-gray-300 dark:border-gray-600",
      bgColor: "bg-gray-50 dark:bg-gray-900/10",
    },
    {
      name: "Gold",
      amount: "৳ 50,000 - ৳ 100,000",
      features: [
        "All Silver benefits",
        "Premier logo placement",
        "Workshop sponsorship",
        "Keynote speaking (15 min)",
        "Branded swag distribution",
        "Annual recognition plaque",
      ],
      color: "border-yellow-400 dark:border-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/10",
    },
    {
      name: "Platinum",
      amount: "৳ 100,000+",
      features: [
        "All Gold benefits",
        "Event naming rights",
        "Dedicated workshop series",
        "Long-term partnership",
        "Exclusive recruitment access",
        "Custom collaboration opportunities",
      ],
      color: "border-primary dark:border-primary/50",
      bgColor: "bg-primary/5 dark:bg-primary/10",
    },
  ];

  const workflowSteps = [
    {
      title: "Reach Out",
      desc: "Contact us via email or phone to express your interest in sponsoring.",
      icon: <FaEnvelope />,
      action: "Send us an email",
    },
    {
      title: "Discuss & Plan",
      desc: "We'll schedule a meeting to understand your goals and customize a sponsorship package.",
      icon: <FaPhone />,
      action: "Schedule a call",
    },
    {
      title: "Agreement",
      desc: "Sign a sponsorship agreement detailing benefits, timeline, and deliverables.",
      icon: <FaHandshake />,
      action: "Review terms",
    },
    {
      title: "Launch",
      desc: "We'll activate your sponsorship benefits and keep you updated on impact.",
      icon: <FaStar />,
      action: "Get started",
    },
  ];

  const testimonials = [
    {
      name: "Tech Solutions BD",
      role: "Gold Sponsor 2024",
      quote: "Sponsoring MEC Computer Club gave us access to exceptional talent and meaningful community engagement.",
      rating: 5,
    },
    {
      name: "Digital Innovations Ltd",
      role: "Silver Sponsor 2024",
      quote: "The workshops and events provided great brand visibility. Highly recommend!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "What types of events can we sponsor?",
      a: "You can sponsor hackathons, workshops, seminars, competitions, study circles, and our annual programming contest.",
    },
    {
      q: "How long does the sponsorship process take?",
      a: "Typically 1-2 weeks from initial contact to agreement signing, depending on customization needs.",
    },
    {
      q: "Can we customize sponsorship packages?",
      a: "Yes! We work with sponsors to create tailored packages that align with your goals and budget.",
    },
    {
      q: "What materials do you need from sponsors?",
      a: "Logo files (high-resolution), brand guidelines (optional), and brief company information for promotion.",
    },
    {
      q: "Do you provide sponsorship receipts for tax purposes?",
      a: "Yes, we provide official receipts and certificates that can be used for CSR reporting and tax benefits.",
    },
  ];

  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] transition-colors min-h-screen">
      <PageHero title="Become a Sponsor" crumbs={[{ label: "Home" }, { label: "Be a Sponsor" }]} />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-in fade-in slide-in-from-left-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Partner With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1437] dark:text-white mb-4">
              Empower the Next Generation of Tech Leaders
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Join us in shaping the future of technology in Bangladesh. Your sponsorship helps students develop skills, build projects, and compete at national and international levels.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Become a Sponsor
                <FaArrowRight />
              </Link>
              <Link
                href="/sponsors"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
              >
                View Current Sponsors
              </Link>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right-4">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-[#232B3E] shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <FaHandshake className="text-8xl text-white/80" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#181F2A] rounded-xl shadow-lg p-4 border border-gray-200 dark:border-[#232B3E] animate-in fade-in zoom-in delay-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaTrophy className="text-primary text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0B1437] dark:text-white">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Sponsors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SponsorsCarousel />
      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-4">
            Why Sponsor MEC Computer Club?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Your investment in our community delivers tangible returns and meaningful impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1437] dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-4">
            Sponsorship Tiers
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Choose a tier that fits your budget and goals. Custom packages are also available.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorshipTiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`rounded-2xl border-2 ${tier.color} ${tier.bgColor} p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative animate-in fade-in slide-in-from-bottom-4`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {idx === sponsorshipTiers.length - 1 && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#0B1437] dark:text-white mb-2">{tier.name}</h3>
              <div className="text-primary dark:text-secondary text-2xl font-bold mb-6">{tier.amount}</div>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary dark:text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 rounded-lg font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A simple, transparent process to become our partner.
          </p>
        </div>
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.title}
                className="relative animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div
                  className={`relative bg-white dark:bg-[#181F2A] rounded-2xl border-2 ${
                    activeStep === idx ? "border-primary shadow-xl scale-105" : "border-gray-200 dark:border-[#232B3E]"
                  } p-6 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl shadow-lg">
                    {idx + 1}
                  </div>
                  <div className="mt-6 mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1437] dark:text-white mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm text-center mb-4">{step.desc}</p>
                  <div className="text-center">
                    <span className="text-primary dark:text-secondary text-sm font-semibold">{step.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-4">
            What Our Sponsors Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] p-6 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-secondary text-lg" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <div>
                <div className="font-bold text-[#0B1437] dark:text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "150+", label: "Active Members" },
              { value: "20+", label: "Events Annually" },
              { value: "15+", label: "Sponsors" },
              { value: "500+", label: "Participants" },
            ].map((stat, idx) => (
              <div key={stat.label} className="text-center animate-in fade-in zoom-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</div>
                <div className="text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1437] dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white dark:bg-[#181F2A] border border-gray-100 dark:border-[#232B3E] p-6 hover:shadow-lg transition-all animate-in fade-in slide-in-from-bottom-2"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <h3 className="text-lg font-bold text-[#0B1437] dark:text-white mb-2">{faq.q}</h3>
              <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-center animate-in fade-in zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can create a sponsorship package that aligns with your goals and helps shape the future of tech education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:sponsors@meccomputerclub.org"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              Email Us
            </Link>
            <Link
              href="tel:+8801780667954"
              className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-3 rounded-lg font-semibold border-2 border-primary-foreground/30 transition-all inline-flex items-center justify-center gap-2"
            >
              <FaPhone />
              Call Us
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <FaClock />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <span>Flexible packages</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

