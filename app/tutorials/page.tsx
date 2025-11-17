"use client";
import VideoGallery from "../components/home/VideoGallery";
import HeroSection from "../components/HeroSection";

export default function TutorialsPage() {
  return (
    <main className="min-h-screen bg-[#F7FAFF] dark:bg-[#101624] py-0 transition-colors">
      <HeroSection
        title="Video Tutorials"
        subtitle={
          "Explore our collection of helpful video Click any video to watch instantly!"
        }
        gradientFrom="#0B1437"
        gradientTo="#009FFF"
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <VideoGallery />
      </section>
    </main>
  );
}
