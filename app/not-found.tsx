import React from "react";
import Link from "next/link";
import { FaHome, FaEnvelope } from "react-icons/fa";

// Placeholder component for dark mode toggle (assuming you have one)
// import DarkModeToggle from './DarkModeToggle';

export default function NotFoundPage() {
  return (
    // Main container setup: full screen, centers content, applies dark mode background
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 text-gray-800 dark:text-gray-100">
      {/* Optional: Dark Mode Toggle can go here */}
      {/* <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div> */}

      <div className="max-w-md w-full text-center">
        {/* Large, Eye-Catching Error Code */}
        <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 opacity-90 transition-colors duration-300">
          404
        </h1>

        {/* Friendly Message */}
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3 leading-tight">
          Page Not Found 🥺
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Oops! It looks like you have followed a broken link or entered a URL that does not exist
          on our site.
        </p>

        {/* Dynamic Broken Link Illustration (Visual Interest) */}
        <div className="mb-10 flex justify-center">
          <svg
            className="w-16 h-16 text-indigo-500 dark:text-indigo-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Broken Chain/Link Icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13.828 10.172a4 4 0 00-5.656-5.656l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.148A5.002 5.002 0 0118 13.434l-1.897 1.897a2.25 2.25 0 01-3.182 0l-2.91-2.91a2.25 2.25 0 00-3.182 0l-.822.822m9.222 5.485a4 4 0 005.656-5.656l-4-4a4 4 0 10-5.656 5.656l-1.102 1.101"
            />
          </svg>
        </div>

        {/* Call-to-Action Buttons (Responsive Layout) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button: Go Home */}
          <Link href="/">
            <div className="flex items-center justify-center space-x-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg transition-all duration-200 w-full sm:w-auto transform hover:scale-[1.02]">
              <FaHome className="w-5 h-5" />
              <span>Go Back Home</span>
            </div>
          </Link>

          {/* Secondary Button: Contact Support */}
          <Link href="/contact-us">
            <div className="flex items-center justify-center space-x-2 px-6 py-3 border border-indigo-200 dark:border-gray-700 text-base font-medium rounded-lg text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-all duration-200 w-full sm:w-auto">
              <FaEnvelope className="w-5 h-5" />
              <span>Contact Support</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer Note */}
      <footer className="mt-12 text-sm text-gray-400 dark:text-gray-600">
        © {new Date().getFullYear()} MEC Computer Club. All Rights Reserved.
      </footer>
    </div>
  );
}
