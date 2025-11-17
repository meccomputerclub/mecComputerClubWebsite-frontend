"use client";

import React, { useEffect, useState } from "react";
import { Clock, Gift, Zap } from "lucide-react";

const BlackFridayBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(true);

  // Calculate time until next Friday midnight
  useEffect(() => {
    const calculateTimeToNextFriday = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 = Sunday, 5 = Friday
      
      // Calculate days until next Friday
      let daysUntilFriday;
      if (dayOfWeek <= 5) {
        daysUntilFriday = 5 - dayOfWeek; // Friday is day 5
      } else {
        daysUntilFriday = 7 - dayOfWeek + 5; // Next week's Friday
      }
      
      // If it's already Friday, check if it's before midnight
      if (dayOfWeek === 5 && now.getHours() < 23) {
        daysUntilFriday = 0;
      }
      
      const target = new Date(now);
      target.setDate(now.getDate() + daysUntilFriday);
      target.setHours(23, 59, 59, 999);
      
      return target;
    };

    const updateCountdown = () => {
      const target = calculateTimeToNextFriday();
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsVisible(false); // Hide the bar when countdown ends
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);
      
      // Debug log to verify calculation
      console.log('Countdown:', { days, hours, minutes, seconds, distance });
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Calculate initial countdown immediately
    updateCountdown();

    // Then update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleFridayDealClick = () => {
    // Navigate to Black Friday deals page
    window.location.href = "/offer/blackfriday";
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg border-b border-white/10">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          {/* Left Section - Announcement */}
          <div className="flex items-center gap-2 text-center lg:text-left">
            <div className="flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-yellow-300 animate-bounce" />
              <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5">
              <span className="font-bold text-sm sm:text-base">
                🏆 Intra MEC Programing Contest 2025
              </span>
            </div>
          </div>

          {/* Center Section - Countdown Timer */}
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
            <Clock className="w-4 h-4 text-yellow-300" />
            <div className="flex items-center gap-1 font-mono text-xs sm:text-sm">
              <div className="bg-white/20 rounded px-1.5 py-1 min-w-[1.75rem] text-center">
                {String(timeLeft.days || 0).padStart(2, "0")}
              </div>
              <span className="text-yellow-300 font-bold text-xs">d</span>
              <div className="bg-white/20 rounded px-1.5 py-1 min-w-[1.75rem] text-center">
                {String(timeLeft.hours || 0).padStart(2, "0")}
              </div>
              <span className="text-yellow-300 font-bold text-xs">h</span>
              <div className="bg-white/20 rounded px-1.5 py-1 min-w-[1.75rem] text-center">
                {String(timeLeft.minutes || 0).padStart(2, "0")}
              </div>
              <span className="text-yellow-300 font-bold text-xs">m</span>
              <div className="bg-white/20 rounded px-1.5 py-1 min-w-[1.75rem] text-center animate-pulse">
                {String(timeLeft.seconds || 0).padStart(2, "0")}
              </div>
              <span className="text-yellow-300 font-bold text-xs">s</span>
            </div>
            <span className="text-xs text-white ml-1 hidden sm:block">left</span>
          </div>

          {/* Right Section - Coupon Code & Button */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            {/* Coupon Code Box */}
           

            {/* Friday Deal Button */}
            <button 
              onClick={handleFridayDealClick}
              className="bg-primary hover:bg-secondary text-primary-foreground font-bold px-5 py-1.5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-1.5"
            >
              <span className="text-xs sm:text-sm">Details of Contexts</span>
              <Zap className="w-3 h-3" />
            </button>
          </div>
        </div>

       
      </div>

    </div>
  );
};

export default BlackFridayBar;
