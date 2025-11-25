"use client";

import React from "react";
import { Sun, Moon, Phone, Mail, MessageCircle, Facebook, Linkedin, Youtube } from "lucide-react";
import { useDarkMode } from "@/lib/DarkModeContext";
import Link from "next/link";

const TopBar: React.FC = () => {
  const { isDark, toggleDark } = useDarkMode();

  // Open Tawk.to support widget
  const openSupportWidget = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact-us';
    }
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left Section - Contact Info */}
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <Link href="tel:+8801780667954" className="flex items-center gap-1 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors" passHref>
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+8801780667954</span>
              <span className="sm:hidden">Call Us</span>
            </Link>
            <Link href="mailto:support@flexohost.com" className="flex items-center gap-1 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors" passHref>
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">meccomputerclub@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </Link>
        </div>

          {/* Right Section - Controls */}
          <div className="flex items-center gap-3">
           
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-2">
              <a href="https://facebook.com/mec.programmingclub" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Facebook className="w-4 h-4 dark:text-white" />
              </a>
              <a href="https://linkedin.com/mec-computer-club" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Linkedin className="w-4 h-4 dark:text-white" />
              </a>
              <a href="https://youtube.com/@meccomputerclub" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Youtube className="w-4 h-4 dark:text-white" />
              </a>
              
            </div>

            {/* Support Button */}
            <button 
              onClick={openSupportWidget}
              className="flex items-center gap-1 px-3 py-1.5 bg-primary hover:bg-secondary text-primary-foreground rounded-md text-xs transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span className="hidden sm:inline">Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
