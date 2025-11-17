import React from "react";
import Image from "next/image";

interface TutorialCardProps {
  thumbnail: string;
  title: string;
  href: string;
}

export default function TutorialCard({
  thumbnail,
  title,
  href,
}: TutorialCardProps) {
  return (
    <a
      href={href}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition p-2"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="rounded-lg w-full h-28 object-cover mb-2"
        width={400}
        height={112}
        style={{ width: "100%", height: "7rem", objectFit: "cover" }}
      />
      <div className="font-semibold text-[#0B1437] text-sm text-center">
        {title}
      </div>
    </a>
  );
}
