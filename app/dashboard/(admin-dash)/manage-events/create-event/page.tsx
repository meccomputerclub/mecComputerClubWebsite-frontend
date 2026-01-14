"use client";

import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Tag,
  Link as LinkIcon,
  AlignLeft,
  Type,
  Clock,
  Save,
  PlusCircle,
} from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateEventForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category: "seminar",
    date: "",
    eventTime: "",
    location: "",
    description: "",
    registrationLink: "",
    status: "scheduled",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let res;
    try {
      console.log("formData : ", formData);
      res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`, formData, {
        withCredentials: true,
      });
      console.log("Event created successfully:", res.data);
      router.back();
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Create New Event</h1>
            <p className="mt-2 text-slate-600">
              Fill in the details below to publish a new event to the platform.
            </p>
          </div>
          <div className="bg-indigo-100 p-3 rounded-full">
            <PlusCircle className="text-indigo-600 h-8 w-8" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Information */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <Type className="w-5 h-5 text-indigo-500" />
              <h2 className="text-xl font-semibold text-slate-800">General Information</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Event Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Annual Tech Hackathon 2024"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      name="category"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-indigo-500 outline-none appearance-none transition-all"
                      onChange={handleChange}
                    >
                      {[
                        "workshop",
                        "seminar",
                        "contest",
                        "conference",
                        "hackathon",
                        "social",
                        "other",
                      ].map((cat) => (
                        <option key={cat} value={cat}>
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                  <select
                    name="status"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    onChange={handleChange}
                  >
                    {["scheduled", "ongoing", "completed", "cancelled", "postponed"].map((stat) => (
                      <option key={stat} value={stat}>
                        {stat.charAt(0).toUpperCase() + stat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <div className="relative">
                  <AlignLeft className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    name="description"
                    required
                    rows={4}
                    placeholder="Tell everyone what this event is about..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Logistics */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <h2 className="text-xl font-semibold text-slate-800">Date & Location</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Time / Duration
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="eventTime"
                    placeholder="e.g. 10:00 AM - 4:00 PM"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Physical address or Online Link"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Links */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <LinkIcon className="w-5 h-5 text-indigo-500" />
              <h2 className="text-xl font-semibold text-slate-800">Registration</h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Registration Link (Optional)
              </label>
              <input
                type="url"
                name="registrationLink"
                placeholder="https://example.com/register"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="px-6 py-2 rounded-lg text-slate-600 font-medium hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-2 bg-indigo-600 text-white rounded-lg font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all"
            >
              <Save className="w-4 h-4" />
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
