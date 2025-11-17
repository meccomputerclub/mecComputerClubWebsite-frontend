"use client";
import { useState } from "react";
import Image from "next/image";

const videos = [
  {
    id: "1",
    youtubeId: "ihRgN76mn5o",
    title: "How to Setup Domain",
  },
  {
    id: "2",
    youtubeId: "QcV2VF785lc",
    title: "cPanel Basics",
  },
  {
    id: "3",
    youtubeId: "fPWHBnlzSGU",
    title: "WordPress Install",
  },
  {
    id: "4",
    youtubeId: "fPWHBnlzSGU",
    title: "SSL Setup",
  },
];

export default function VideoGallery() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#181F2A] transition"
          >
            <Image
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-56 object-cover"
              width={400}
              height={224}
              style={{ width: "100%", height: "14rem", objectFit: "cover" }}
              unoptimized
            />
            <button
              aria-label={`Play ${video.title}`}
              onClick={() => setOpenVideo(video.youtubeId)}
              className="absolute inset-0 flex items-center justify-center focus:outline-none"
            >
              <span className="relative z-10">
                <span className="block w-16 h-16 rounded-full bg-white/80 dark:bg-[#22223b]/80 shadow-lg items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    className="w-8 h-8 text-[#FF267E] drop-shadow-glow"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </span>
                {/* Glow effect */}
                <span
                  className="absolute inset-0 rounded-full blur-2xl opacity-70 pointer-events-none"
                  style={{
                    boxShadow: "0 0 32px 8px #FF267E, 0 0 64px 16px #FF267E",
                  }}
                ></span>
              </span>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
              <span className="text-white font-semibold text-lg">
                {video.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="relative bg-black rounded-lg shadow-lg max-w-5xl w-full mx-2 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
              onClick={() => setOpenVideo(null)}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={`https://www.youtube.com/embed/${openVideo}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-[60vw] max-h-[80vh] min-h-[300px] rounded-lg"
                style={{ minHeight: 300, maxHeight: "80vh" }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 16px #ff267e) drop-shadow(0 0 32px #ff267e);
        }
        @media (max-width: 768px) {
          .aspect-w-16.aspect-h-9 {
            aspect-ratio: 16/9;
          }
        }
      `}</style>
    </>
  );
}
