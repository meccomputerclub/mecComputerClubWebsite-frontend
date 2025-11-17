import React from "react";
import Link from "next/link";
import logoDark from "@/public/img/mecHorizontalDark.png";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground mt-0 pt-12 pb-6 px-4 md:px-0 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6">
        {/* About & Social */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-2">
            {/* Replace src with your logo image */}

            <Image src={logoDark} width={120} height={120} alt="Logo" />
          </div>
          <p className="text-base text-white/90 dark:text-gray-300 mt-3 mb-4 max-w-xs">
            MEC Computer Club is a student community for coding, robotics, AI,
            competitions, workshops, and real-world projects at MEC.
          </p>
          <div className="font-semibold mb-2">Follow us on</div>
          <div className="flex gap-3">
            {/* Replace with your social icons */}
            <a
              href="https://www.facebook.com/"
              className="bg-white/15 hover:bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors cursor-pointer"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="bg-white/15 hover:bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="bg-white/15 hover:bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Explore */}
        <div>
          <div className="font-bold text-xl mb-3">Explore</div>
          <ul className="space-y-2">
            <li>
              <Link href="/events/upcoming" className="cursor-pointer">
                Events
              </Link>
            </li>
            <li>
              {/* Projects link removed */}
            </li>
            <li>
              <Link href="/resources/tutorials" className="cursor-pointer">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="/gallery/photos" className="cursor-pointer">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="cursor-pointer">
                Blog & News
              </Link>
            </li>
            <li>
              <Link href="/join" className="cursor-pointer">
                Join the Club
              </Link>
            </li>
          </ul>
        </div>
        {/* Quick Link */}
        <div>
          <div className="font-bold text-xl mb-3">Resources</div>
          <ul className="space-y-2">
            <li>
              <Link href="/resources/tutorials" className="cursor-pointer">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="/blog" className="cursor-pointer">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Club */}
        <div>
          <div className="font-bold text-xl mb-3">Club</div>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="cursor-pointer">
                Executive Committee
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="cursor-pointer">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-condition" className="cursor-pointer">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link href="/constitution" className="cursor-pointer">
                Constitution
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-white/80 dark:text-gray-300 text-base mt-4">
        © 2021–2025 MEC Computer Club. All rights reserved.
      </div>
    </footer>
  );
}
