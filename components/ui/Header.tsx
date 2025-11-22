"use client";
import logoLight from "@/public/img/mecHorizontalDark.png";
import logoDark from "@/public/img/mecHorizontalLight128.png";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu, { SubmenuItem } from "./Menu";
import { useDarkMode } from "@/lib/DarkModeContext";
import { isExternalUrl } from "@/lib/utils";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaTicketAlt,
  FaPhoneSquareAlt,
  FaGlobe,
  FaUsers,
  FaFileAlt,
  FaHandshake,
  FaVideo,
  FaBlog,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa";

const aboutMegaMenu = [
  {
    label: "About Us",
    route: "/about-us",
    icon: <FaBuilding className="text-blue-600" />,
    description: "Learn more about us",
    iconBgColor: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    label: "Contact Us",
    route: "/contact-us",
    icon: <FaEnvelope className="text-green-600" />,
    description: "Get in touch with us",
    iconBgColor: "bg-green-50 dark:bg-green-900/30",
  },
  {
    label: "Constitution",
    route: "/constitution",
    icon: <FaFileAlt className="text-orange-600" />,
    description: "Club rules and bylaws",
    iconBgColor: "bg-orange-50 dark:bg-orange-900/30",
  },
];

const eventsMegaMenu = [
  {
    label: "Upcoming Events",
    route: "/events/upcoming",
    icon: <FaTicketAlt className="text-indigo-600" />,
    description: "Hackathons, workshops, seminars",
    iconBgColor: "bg-indigo-50 dark:bg-indigo-900/30",
  },
  {
    label: "Past Events",
    route: "/events/past",
    icon: <FaVideo className="text-red-500" />,
    description: "Recaps and resources",
    iconBgColor: "bg-red-50 dark:bg-red-900/30",
  },
  {
    label: "Event Calendar",
    route: "/events/calendar",
    icon: <FaGlobe className="text-purple-600" />,
    description: "Stay up to date",
    iconBgColor: "bg-purple-50 dark:bg-purple-900/30",
  },
];

// removed Projects menu

const resourcesMegaMenu = [
  {
    label: "Tutorials",
    route: "/tutorials",
    icon: <FaVideo className="text-red-600" />,
    description: "Learn with guides",
    iconBgColor: "bg-red-50 dark:bg-red-900/30",
  },
  {
    label: "Blog & News",
    route: "/blog",
    icon: <FaBlog className="text-purple-600" />,
    description: "Latest updates",
    iconBgColor: "bg-purple-50 dark:bg-purple-900/30",
  },
  // {
  //   label: "Repositories",
  //   route: "https://github.com/meccomputerclub",
  //   icon: <FaGlobe className="text-green-600" />,
  //   description: "Code and resources",
  //   iconBgColor: "bg-green-50 dark:bg-green-900/30",
  // },
];

const galleryMegaMenu = [
  {
    label: "Photos",
    route: "/gallery/photos",
    icon: <FaGlobe className="text-blue-600" />,
    description: "Event and activity photos",
    iconBgColor: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    label: "Videos",
    route: "/gallery/videos",
    icon: <FaVideo className="text-red-600" />,
    description: "Talks and highlights",
    iconBgColor: "bg-red-50 dark:bg-red-900/30",
  },
];

const getInvolvedSubMenu = [
  {
    label: "Join Us",
    route: "/join",
    icon: <FaHandshake className="text-indigo-600" />,
    description: "Become a member",
    iconBgColor: "bg-indigo-50 dark:bg-indigo-900/30",
  },
  {
    label: "Be Sponsor",
    route: "/be-sponsor",
    icon: <FaHandshake className="text-orange-600" />,
    description: "Support our club initiatives",
    iconBgColor: "bg-orange-50 dark:bg-orange-900/30",
  },
];

// legacy names replaced by club menus

type MenuItem = 
  | { label: string; submenu: SubmenuItem[] }
  | { label: string; route: string };

function hasSubmenu(item: MenuItem): item is { label: string; submenu: SubmenuItem[] } {
  return 'submenu' in item;
}

const mobileMenus: MenuItem[] = [
  { label: "About", submenu: aboutMegaMenu },
  { label: "Events", submenu: eventsMegaMenu },
  { label: "Members", submenu: [
      {
        label: "Membership",
        route: "/membership",
        icon: <FaUsers className="text-blue-600" />,
        description: "Benefits and eligibility",
        iconBgColor: "bg-blue-50 dark:bg-blue-900/30",
      },
      {
        label: "Executive Committee",
        route: "/leadership",
        icon: <FaUsers className="text-indigo-600" />,
        description: "Club leadership",
        iconBgColor: "bg-indigo-50 dark:bg-indigo-900/30",
      },
      {
        label: "Alumni",
        route: "/alumni",
        icon: <FaUsers className="text-purple-600" />,
        description: "Past members & mentors",
        iconBgColor: "bg-purple-50 dark:bg-purple-900/30",
      },
    ] },
  { label: "Resources", submenu: resourcesMegaMenu },
  { label: "Gallery", submenu: galleryMegaMenu },
  { label: "Get Involved", submenu: getInvolvedSubMenu },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useDarkMode();
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<{
    [key: string]: boolean;
  }>({});

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Clean up hover timeout on unmount
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (hoverTimeout.current) clearTimeout(hoverTimeout?.current);
    };
  }, []);

  return (
    <header className="w-full  bg-white dark:bg-[#181F2A] dark:text-white shadow-sm z-50 sticky top-0 left-0 p-1.5 md:p-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 ">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Link href="/">
              <Image
                alt="FlexoHost Logo"
              src={isDark ? logoDark : logoLight}
              width={180}
              height={60}
              ></Image>
          </Link>
        </div>
        {/* Dark mode toggle */}

        <button
          className="md:hidden ml-auto focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              stroke="#00205B"
              className="dark:stroke-white"
              strokeWidth="2"
              strokeLinecap="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8 md:ml-12 w-full md:w-auto">
          <ul className="flex flex-row gap-8 px-0 py-0">
            {[
              {
                label: "About",
                submenu: aboutMegaMenu,
              },
              {
                label: "Events",
                submenu: eventsMegaMenu,
              },
              { label: "Members", submenu: [
                {
                  label: "Membership",
                  route: "/membership",
                  icon: <FaUsers className="text-blue-600" />,
                  description: "Benefits and eligibility",
                  iconBgColor: "bg-blue-50 dark:bg-blue-900/30",
                },
                {
                  label: "Executive Committee",
                  route: "/leadership",
                  icon: <FaUsers className="text-indigo-600" />,
                  description: "Club leadership",
                  iconBgColor: "bg-indigo-50 dark:bg-indigo-900/30",
                },
                {
                  label: "Alumni",
                  route: "/alumni",
                  icon: <FaUsers className="text-purple-600" />,
                  description: "Past members & mentors",
                  iconBgColor: "bg-purple-50 dark:bg-purple-900/30",
                },
              ] },
              { label: "Resources", submenu: resourcesMegaMenu },
              { label: "Gallery", submenu: galleryMegaMenu },
              { label: "Get Involved", submenu: getInvolvedSubMenu },
            ].map((item) => (
              <li key={item.label}>
                <Menu {...item} />
              </li>
            ))}
          </ul>
        </nav>
        {/* CTA Button */}
        <div className="hidden md:flex items-center ml-6 gap-2 ">
          <Link href="/join">
            <span className="inline-block px-6 py-2 rounded-lg font-bold text-primary-foreground bg-primary shadow hover:bg-secondary transition-colors">
              Join the Club
            </span>
          </Link>
        </div>
      </div>
      {/* Mobile Overlay */}
      {menuOpen && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" />}
      {/* Mobile Navigation (slide-in) */}
      <div
        ref={mobileNavRef}
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white dark:bg-[#181F2A] shadow-lg transform transition-transform duration-300 md:hidden overflow-y-auto max-h-screen
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ willChange: "transform" }}
      >
        <div className="flex  items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-[#232B3E]">
          <div className="flex items-center gap-2 p-3">
            <Link href="/">
              <Image
                alt="FlexoHost Logo"
                src={isDark ? logoDark : logoLight}
                width={130}
                height={45}
              ></Image>
            </Link>
          </div>
          <button
            className="text-[#00205B] dark:text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#00205B"
                className="dark:stroke-white"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-4 py-6">
          {mobileMenus.map((item) => {
            if (hasSubmenu(item)) {
              const open = !!mobileSubmenuOpen[item.label];
              return (
                <div key={item.label} className="mb-1">
                  <button
                    className="flex items-center w-full gap-2 py-2 px-2 text-[#00205B] dark:text-white font-medium hover:text-[#00AEEF] dark:hover:text-[#4F6DF5] focus:outline-none cursor-pointer transition-colors"
                    onClick={() =>
                      setMobileSubmenuOpen((prev) => ({
                        ...prev,
                        [item.label]: !prev[item.label],
                      }))
                    }
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 ml-1 stroke-current transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {open && (
                    <div className="ml-4 border-l border-gray-200 dark:border-[#232B3E] pl-2 py-1">
                      {item.submenu.map((sub) =>
                        isExternalUrl(sub.route) ? (
                          <a
                            key={sub.label}
                            href={sub.route}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 items-center py-1.5 text-[#00205B] dark:text-white hover:text-[#00AEEF] dark:hover:text-[#4F6DF5] font-normal text-sm transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.icon && (
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center ${
                                  sub.iconBgColor || "bg-blue-50 dark:bg-blue-900/30"
                                }`}
                              >
                                <div className="text-base">{sub.icon}</div>
                              </div>
                            )}
                            <div className="flex-1 flex flex-col min-w-0">
                              <span className="font-semibold text-sm">{sub.label}</span>
                              {sub.description && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {sub.description}
                                </span>
                              )}
                            </div>
                          </a>
                        ) : (
                          <Link
                            key={sub.label}
                            href={sub.route}
                            className="flex gap-2 items-center py-1.5 text-[#00205B] dark:text-white hover:text-[#00AEEF] dark:hover:text-[#4F6DF5] font-normal text-sm transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.icon && (
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center ${
                                  sub.iconBgColor || "bg-blue-50 dark:bg-blue-900/30"
                                }`}
                              >
                                <div className="text-base">{sub.icon}</div>
                              </div>
                            )}
                            <div className="flex-1 flex flex-col min-w-0">
                              <span className="font-semibold text-sm">{sub.label}</span>
                              {sub.description && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {sub.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            } else if ('route' in item) {
              return isExternalUrl(item.route) ? (
                <a
                  key={item.label}
                  href={item.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-2 text-[#00205B] dark:text-white font-medium hover:text-[#00AEEF] dark:hover:text-[#4F6DF5] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.route}
                  className="block py-2 px-2 text-[#00205B] dark:text-white font-medium hover:text-[#00AEEF] dark:hover:text-[#4F6DF5] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }
            return null;
          })}
          {/* Mobile CTA Button */}
          <div className="mt-6">
            <Link href="/join">
              <span className="block w-full text-center px-6 py-2 rounded-lg font-bold text-primary-foreground bg-primary shadow hover:bg-secondary transition-colors">
                Join the Club
              </span>
            </Link>
          </div>
          {/* Contact Buttons Row */}
          <div className="flex flex-row items-center justify-center gap-4 mt-6 mb-4">
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={28} color="#25D366" />
            </a>
            <a href="tel:+8801772065894" aria-label="Phone Call">
              <FaPhoneAlt size={26} color="#007bff" />
            </a>
            <a href="/support/ticket" aria-label="Ticket">
              <FaTicketAlt size={26} color="#ff9800" />
            </a>
            <a href="/request-call" aria-label="Request Call">
              <FaPhoneSquareAlt size={28} color="#4caf50" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
