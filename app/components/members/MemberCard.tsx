"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin, Facebook, Github, X as Twitter } from "lucide-react";

export type MemberSocials = {
  facebook?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
};

export type MemberCardProps = {
  name: string;
  role: string;
  batch?: string;
  email?: string;
  img?: string;
  bio?: string;
  socials?: MemberSocials;
};

export default function MemberCard(props: MemberCardProps) {
  const { name, role, batch, img, socials } = props;
  const [open, setOpen] = useState(false);
  const initials = name ? name.charAt(0).toUpperCase() : "M";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group w-full text-left rounded-2xl overflow-hidden border border-gray-100 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={`Open profile for ${name}`}
      >
        <div className="relative h-72 bg-gradient-to-br from-primary/10 to-secondary/10">
          {img ? (
            <Image
              src={img}
              alt={name}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                {initials}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-4">
          <div className="text-sm text-primary mb-1">{role}</div>
          <div className="text-lg font-semibold text-[#0B1437] dark:text-white">{name}</div>
          {batch && <div className="text-xs mt-0.5 text-gray-600 dark:text-gray-400">{batch}</div>}
          {/* Socials preview */}
          <div className="mt-3 flex items-center gap-2">
            {socials?.facebook && <IconLink href={socials.facebook} label="Facebook"><Facebook className="w-4 h-4" /></IconLink>}
            {socials?.linkedin && <IconLink href={socials.linkedin} label="LinkedIn"><Linkedin className="w-4 h-4" /></IconLink>}
            {socials?.github && <IconLink href={socials.github} label="GitHub"><Github className="w-4 h-4" /></IconLink>}
            {socials?.twitter && <IconLink href={socials.twitter} label="Twitter"><Twitter className="w-4 h-4" /></IconLink>}
          </div>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-[95%] md:w-[720px] rounded-2xl overflow-hidden border border-gray-100 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] shadow-2xl animate-in fade-in zoom-in">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-48 md:h-full md:col-span-1 bg-gradient-to-br from-primary/10 to-secondary/10">
                {img ? (
                  <Image src={img} alt={name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold">
                      {initials}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 md:col-span-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-primary mb-1">{role}</div>
                    <h3 className="text-2xl font-bold text-[#0B1437] dark:text-white">{name}</h3>
                    {batch && <div className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{batch}</div>}
                    {props.email && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${props.email}`} className="hover:text-primary transition-colors">{props.email}</a>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-1 text-sm bg-gray-100 dark:bg-[#232B3E] hover:bg-gray-200 dark:hover:bg-[#2b3650] transition-colors"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>
                {props.bio && (
                  <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {props.bio}
                  </p>
                )}
                <div className="mt-5 flex items-center gap-3">
                  {socials?.facebook && <IconLink href={socials.facebook} label="Facebook" big><Facebook className="w-5 h-5" /></IconLink>}
                  {socials?.linkedin && <IconLink href={socials.linkedin} label="LinkedIn" big><Linkedin className="w-5 h-5" /></IconLink>}
                  {socials?.github && <IconLink href={socials.github} label="GitHub" big><Github className="w-5 h-5" /></IconLink>}
                  {socials?.twitter && <IconLink href={socials.twitter} label="Twitter" big><Twitter className="w-5 h-5" /></IconLink>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function IconLink({
  href,
  label,
  children,
  big = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  big?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-md border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#101624] text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors ${big ? "w-9 h-9" : "w-7 h-7"}`}
    >
      {children}
    </a>
  );
}


