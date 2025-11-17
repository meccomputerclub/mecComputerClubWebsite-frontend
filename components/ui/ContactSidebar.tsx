"use client";

import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaTicketAlt,
  FaPhoneSquareAlt,
} from "react-icons/fa";

// Smaller, classic, rounded-md, simple sidebar
const sidebarStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: 0,
  transform: "translateY(-50%)",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  background: "#fff",
  borderRadius: "0 0.375rem 0.375rem 0", // rounded-md
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  padding: "0.5rem 0.25rem",
  border: "1px solid #e5e7eb",
  minWidth: "48px",
  maxWidth: "56px",
  alignItems: "center",
  transition: "background 0.2s",
};

const sidebarStyleDark: React.CSSProperties = {
  ...sidebarStyle,
  background: "#232B3E",
  border: "1px solid #232B3E",
};

const buttonStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.35rem",
  borderRadius: "0.375rem",
  width: "36px",
  height: "36px",
  transition: "background 0.15s",
  position: "relative",
  outline: "none",
};

const tooltipStyle: React.CSSProperties = {
  visibility: "hidden",
  opacity: 0,
  background: "#333",
  color: "#fff",
  textAlign: "center",
  borderRadius: "0.375rem",
  padding: "2px 8px",
  position: "absolute",
  left: "110%",
  top: "50%",
  transform: "translateY(-50%)",
  whiteSpace: "nowrap",
  zIndex: 1001,
  fontSize: "0.85rem",
  transition: "opacity 0.18s, visibility 0.18s, left 0.18s",
  pointerEvents: "none",
};

const buttonWrapperStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

function SidebarButton({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={buttonWrapperStyle}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <button
        onClick={onClick}
        style={{
          ...buttonStyle,
          background: hovered ? "#f3f4f6" : "none",
        }}
        className="transition-transform duration-200 dark:hover:bg-[#1a2233]"
        aria-label={title}
      >
        <span
          style={{
            display: "inline-flex",
            transition: "transform 0.18s cubic-bezier(.4,2,.6,1), color 0.15s",
            transform: hovered ? "scale(1.13) rotate(-8deg)" : "none",
          }}
        >
          {icon}
        </span>
      </button>
      <span
        className="sidebar-tooltip"
        style={{
          ...tooltipStyle,
          visibility: hovered ? "visible" : "hidden",
          opacity: hovered ? 1 : 0,
          left: hovered ? "120%" : "110%",
        }}
      >
        {title}
      </span>
    </div>
  );
}

function WhatsAppButton() {
  return (
    <SidebarButton
      icon={<FaWhatsapp color="#25D366" />}
      title="WhatsApp"
      onClick={() => window.open("https://wa.me/8801780667954", "_blank")}
    />
  );
}

function PhoneCallButton() {
  return (
    <SidebarButton
      icon={<FaPhoneAlt color="#007bff" />}
      title="Direct Phone Call"
      onClick={() => window.open("tel:+8801780667954", "_self")}
    />
  );
}

function TicketButton() {
  return (
    <SidebarButton
      icon={<FaTicketAlt color="#ff9800" />}
      title="Ticket"
      onClick={() =>
        window.open(
          "https://client.flexohost.com/submitticket.php?step=2&deptid=1",
          "_blank"
        )
      }
    />
  );
}

function RequestCallButton() {
  return (
    <SidebarButton
      icon={<FaPhoneSquareAlt color="#4caf50" />}
      title="Request Call"
      onClick={() => (window.location.href = "/contact-us")}
    />
  );
}

const ContactSidebar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simple dark mode detection
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Don't render on server side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  // Hide the sidebar on mobile view (show only on lg and up)
  return (
    <div className="hidden lg:block">
      <aside style={isDark ? sidebarStyleDark : sidebarStyle}>
        <WhatsAppButton />
        <PhoneCallButton />
        <TicketButton />
        <RequestCallButton />
      </aside>
    </div>
  );
};

export default ContactSidebar;
