import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const cards = [
  {
    icon: <FaPhoneAlt className="text-3xl text-blue-600" />,
    title: "Hotline",
    value: "+8801780667954",
  },
  {
    icon: <FaEnvelope className="text-3xl text-blue-600" />,
    title: "Email Us",
    value: "support@flexohost.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-blue-600" />,
    title: "Address",
    value: "Mymensingh, Bangladesh",
  },
];

export default function ContactInfoCards() {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16 z-20 relative">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-500 hover:scale-105 hover:shadow-2xl transition-transform"
        >
          <div className="mb-4">{card.icon}</div>
          <div className="font-bold text-lg mb-1 text-[#0B1437]">
            {card.title}
          </div>
          <div className="text-gray-600">{card.value}</div>
        </div>
      ))}
    </div>
  );
}
