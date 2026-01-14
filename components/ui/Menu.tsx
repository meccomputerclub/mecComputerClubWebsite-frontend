"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { isExternalUrl } from "@/lib/utils";

export interface SubmenuItem {
  label: string;
  route: string;
  icon?: React.ReactNode;
  description?: string;
  iconBgColor?: string; // 1. ADDED: Optional onClick handler for actions like Logout
  onClick?: () => void;
}

interface MenuProps {
  label: string | React.ReactNode;
  route?: string;
  submenu?: SubmenuItem[];
  isCustomTrigger?: boolean;
}

export default function Menu({ label, route, submenu }: MenuProps) {
  const [open, setOpen] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => setOpen(false), 200);
  }; // 2. ADDED: Function to handle submenu item click, including closing the menu

  const handleSubmenuClick = (action?: () => void) => {
    // Execute the custom action (e.g., logout)
    if (action) {
      action();
    } // Close the dropdown menu regardless of whether an action was run
    setOpen(false);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      {" "}
      <div>
        {/* ... (Trigger rendering logic remains the same) ... */}{" "}
        {route ? (
          isExternalUrl(route) ? (
            <a
              href={route}
              className="flex items-center gap-1 text-[#00205B] dark:text-white font-medium hover:text-[#00AEEF] dark:hover:text-[#4F6DF5] focus:outline-none cursor-pointer transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}{" "}
            </a>
          ) : (
            <Link
              href={route}
              className="flex items-center gap-1 text-[#00205B] dark:text-white font-medium hover:text-[#00AEEF] dark:hover:text-[#4F6DF5] focus:outline-none cursor-pointer transition-colors"
            >
              {label}{" "}
              {/* NOTE: If label is a ReactNode (like the profile image), the arrow will be missing here 
        if 'route' is present. For the profile dropdown, 'route' should be undefined 
        and the trigger logic should fall through to the <button> or simply render {label}. 
        The current Header component setup correctly falls to the button/no-route logic. */}{" "}
            </Link>
          )
        ) : typeof label === "string" ? ( // Check if label is a string for the default button behavior
          <button
            className="flex items-center gap-1 text-[#00205B] dark:text-white font-medium hover:text-[#00AEEF] dark:hover:text-[#4F6DF5] focus:outline-none cursor-pointer transition-colors"
            tabIndex={-1}
            type="button"
          >
            {label}{" "}
            {submenu && (
              <svg
                className="w-3 h-3 ml-1 stroke-current"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />{" "}
              </svg>
            )}{" "}
          </button>
        ) : (
          // This block handles the custom trigger (e.g., Profile Image + Icon)
          <span className="cursor-pointer" tabIndex={-1} role="button">
            {label}{" "}
          </span>
        )}{" "}
      </div>{" "}
      {submenu && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-10 md:top-8 w-64 dark:bg-[#232B3E] dark:border-[#232B3E] bg-white rounded-lg shadow-xl border border-gray-100 p-2 z-50 transition-all duration-200 ease-out transform ${
            open
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform, opacity" }}
        >
          {" "}
          <div className="flex flex-col gap-0.5">
            {" "}
            {submenu.map((item) => {
              // 3. MODIFIED: Check if the item has a custom action (onClick)
              const isActionItem = !!item.onClick;

              const commonClasses =
                "flex gap-2 items-center py-2 px-2 rounded-md transition-all duration-200 group hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer text-[#00205B] dark:text-white group/item";

              const content = (
                <>
                  {" "}
                  {item.icon && (
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center ${
                        item.iconBgColor || "bg-blue-50 dark:bg-blue-900/30"
                      }`}
                    >
                      <div className="text-lg">{item.icon}</div>{" "}
                    </div>
                  )}{" "}
                  <div className="flex-1 flex flex-col min-w-0">
                    {" "}
                    <span className="font-semibold text-sm leading-tight transition-all duration-200 group-hover/item:text-[#00AEEF] dark:group-hover/item:text-[#4F6DF5]">
                      {item.label}{" "}
                    </span>{" "}
                    {item.description && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                        {item.description}{" "}
                      </span>
                    )}{" "}
                  </div>{" "}
                </>
              );

              if (isActionItem) {
                // 4. RENDER BUTTON: For Logout/Action items
                return (
                  <button
                    key={item.label}
                    onClick={() => handleSubmenuClick(item.onClick)}
                    className={commonClasses + " w-full text-left"} // Added w-full and text-left for button styling
                  >
                    {content}{" "}
                  </button>
                );
              } else if (isExternalUrl(item.route)) {
                // 5. RENDER <a>: For external links
                return (
                  <a
                    href={item.route}
                    key={item.label}
                    className={commonClasses}
                    style={{ willChange: "transform, background" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSubmenuClick()} // Close menu on click
                  >
                    {content}{" "}
                  </a>
                );
              } else {
                // 6. RENDER <Link>: For internal links
                return (
                  <Link
                    href={item.route}
                    key={item.label}
                    className={commonClasses}
                    style={{ willChange: "transform, background" }}
                    onClick={() => handleSubmenuClick()} // Close menu on click
                  >
                    {content}{" "}
                  </Link>
                );
              }
            })}{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
}
