"use client";

import React, { useState } from "react";
import { useCurrency } from "@/lib/CurrencyContext";

// Domain pricing data (all prices in BDT)
const TLD_PRICING = [
  {
    tld: ".com",
    label: "offer",
    price: 1650,
    transfer: 1650,
    renewal: 1650,
  },

  {
    tld: ".net",
    label: "sale",
    price: 2050,
    transfer: 2050,
    renewal: 2050,
  },
  {
    tld: ".org",
    label: "offer",
    price: 1650,
    transfer: 1650,
    renewal: 1650,
  },
  {
    tld: ".info",
    label: "",
    price: 520,
    transfer: 5200,
    renewal: 5250,
  },

  {
    tld: ".shop",
    label: "New",
    price: 299,
    transfer: 5200,
    renewal: 5250,
  },
  {
    tld: ".xyz",
    label: "Sale",
    price: 360,
    transfer: 1750,
    renewal: 1750,
  },
];

const BDT_TO_USD = 0.008;

function formatPrice(value: number, currency: "BDT" | "USD") {
  if (currency === "BDT") {
    return `৳${value.toLocaleString()} BDT`;
  } else {
    return `$${(value * BDT_TO_USD).toFixed(2)} USD`;
  }
}

export default function DomainSearchSection() {
  const [query, setQuery] = useState("");
  const { currency } = useCurrency(); // global currency context

  // Map global currency to local format
  const localCurrency = currency === "usd" ? "USD" : "BDT";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      window.open(
        `https://client.flexohost.com/cart.php?a=add&domain=register&query=${encodeURIComponent(
          query
        )}`,
        "_blank"
      );
    }
  };

  return (
    <section className="w-full bg-[#23194d] py-20 flex flex-col items-center justify-center px-2 sm:px-4">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        Search for a domain name
      </h2>
      <p className="text-lg text-white/80 mb-10 text-center max-w-xl">
        Discover, buy and register your unique domain with our domain name
        search.
      </p>
      <form
        className="w-full max-w-2xl flex flex-row items-stretch mb-10 gap-0 px-0"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="flex-1 flex items-center bg-white rounded-l-2xl px-4 sm:px-6 py-3 text-lg shadow-lg border border-r-0 border-[#6c5dd3] relative">
          <span className="mr-3 text-gray-400 text-2xl">🔍</span>
          <input
            type="text"
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 pr-8"
            placeholder="Type the domain you want"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value.replace(/[^a-zA-Z0-9-.]/g, ""))
            }
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={() => setQuery("")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#f3f3f3" />
                <path
                  d="M7 7l6 6M13 7l-6 6"
                  stroke="#888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0B7CFF] to-[#0052D4] hover:from-[#0052D4] hover:to-[#0B7CFF] text-white font-semibold text-lg px-6 sm:px-8 py-3 rounded-r-2xl shadow-lg transition-colors border border-[#0B7CFF] border-l-0"
          style={{ minWidth: 120 }}
        >
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              d="M3 12h18M15 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Search
        </button>
      </form>
      {/* TLD Pricing Table */}
      <div
        className="
          w-full max-w-7xl
          grid grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-3
          sm:gap-4
          justify-center
          mb-6
          px-1 sm:px-0
        "
      >
        {TLD_PRICING.map(({ tld, label, price }, idx) => (
          <div
            key={tld + idx}
            className="
              bg-[#2d215a]
              rounded-xl
              px-2 py-3
              sm:px-8 sm:py-6
              flex flex-col items-center
              min-w-0
              w-full
              shadow
              border border-[#3a2a7a]
              h-full
            "
            style={{
              // Ensures all cards have the same height
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              minHeight: "140px", // You can adjust this value as needed
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white text-xl font-bold">{tld}</span>
              {label && (
                <span className="bg-[#0B7CFF] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {label}
                </span>
              )}
            </div>
            <div className="text-[#0B7CFF] text-lg font-bold mb-1">
              {formatPrice(price, localCurrency)}
            </div>
            <div className="text-white/80 text-xs">1 Year</div>
          </div>
        ))}
      </div>
    </section>
  );
}
