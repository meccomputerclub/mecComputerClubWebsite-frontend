"use client";
import HomeHeroSection from "./components/home/HomeHeroSection";
import AboutClub from "./components/home/AboutClub";

import EventsCarousel from "./components/home/EventsCarousel";
import UpcomingEvent from "./components/home/UpcomingEvent";

import GalleryPreview from "./components/home/GalleryPreview";
import ContactCTA from "./components/home/ContactCTA";
import BlogPreview from "./components/home/BlogPreview";
import SponsorsCarousel from "./components/home/SponsorsCarousel";

export default function Home() {
  return (
    <>
    
    <main className="bg-[#F7FAFF] dark:bg-[#101624] transition-colors">
      
        <HomeHeroSection />
        <UpcomingEvent />
        <AboutClub />
        <SponsorsCarousel />
        <EventsCarousel />
      

      
        <GalleryPreview />
        <BlogPreview />
        <ContactCTA />
 
    </main>
    
    </>
   
  );
}
