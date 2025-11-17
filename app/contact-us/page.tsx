"use client";
import React, { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      // TODO: Implement /api/contact endpoint with nodemailer
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <main className="bg-[#F7FAFF] dark:bg-[#101624] min-h-screen w-full ">
      <PageHero title="Contact Us" crumbs={[{ label: "Home" }, { label: "Contact" }]} />

      {/* Info + Form Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Contact Cards */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hotline</div>
                <a href="tel:+8801780667954" className="text-lg font-semibold text-[#0B1437] dark:text-white hover:text-primary transition-colors">
                  +8801780667954
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Email</div>
                <a href="mailto:support@meccomputerclub.org" className="text-lg font-semibold text-[#0B1437] dark:text-white hover:text-primary transition-colors">
                  support@meccomputerclub.org
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Address</div>
                <div className="text-lg font-semibold text-[#0B1437] dark:text-white">
                  Mymensingh, Bangladesh
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Office Hours</div>
                <div className="text-lg font-semibold text-[#0B1437] dark:text-white">
                  Sat–Thu: 10:00–18:00
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                <div className="text-lg font-semibold text-[#0B1437] dark:text-white">
                  WhatsApp: +8801780667954
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form (span 2) */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1437] dark:text-white mb-2">
              We’re ready to help
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Send us a message and we’ll get back within 24 hours.
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-400">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="+8801XXXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm text-gray-600 dark:text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-1 px-8 py-3 bg-primary hover:bg-secondary text-primary-foreground rounded-lg font-semibold shadow hover:shadow-lg transition disabled:opacity-60 text-lg flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 18l6-6-6-6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {status && (
                <div className="mt-1 text-center text-sm text-primary">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Card */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-[#232B3E] shadow-2xl">
          <div className="relative h-[360px]">
            <iframe
              title="MEC Computer Club Location"
              src="https://www.google.com/maps?q=Mymensingh%20Engineering%20College&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
