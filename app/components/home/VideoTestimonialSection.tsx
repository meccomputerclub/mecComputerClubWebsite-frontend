import React from "react";

const videoTestimonials = [
  {
    name: "Tsamsa",
    videoUrl: "https://www.youtube.com/embed/7DFzZVx4zBo",
  },
  {
    name: "Aizas World",
    videoUrl: "https://www.youtube.com/embed/0jLahH5FfDY",
  },
  {
    name: "Ikram BD",
    videoUrl: "https://www.youtube.com/embed/hciLjKW_5Kc",
  },
  {
    name: "One Self BD",
    videoUrl: "https://www.youtube.com/embed/T0omySV7ZWY",
  },
];

export default function VideoTestimonialSection() {
  return (
    <section className="w-full bg-[#f5f8fc] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left Side */}
        <div className=" w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-[#2346e6] font-semibold text-lg mb-2 flex items-center gap-2">
            <span className="inline-block w-6 h-0.5 bg-[#2346e6] mr-2" />
            Testimonial
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0B1437] dark:text-[#0B1437]">
            Read what our Customers Have to say about us.
          </h2>
          <a
            href="/client-feedback"
            className="mt-2 px-8 py-3 border-2 border-[#0B1437] text-[#0B1437] font-semibold rounded-lg hover:bg-[#2346e6] hover:text-white transition-colors text-lg"
          >
            More Success Stories
          </a>
        </div>
        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {videoTestimonials.map((video, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <iframe
                width="100%"
                height="220"
                src={video.videoUrl}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[220px]"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
