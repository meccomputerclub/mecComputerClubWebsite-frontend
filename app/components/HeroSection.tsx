import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  gradientFrom = "#0B1437",
  gradientTo = "#009FFF",
}) => {
  return (
    <section
      className={`w-full bg-gradient-to-r pt-16 pb-8 px-0 mb-0`}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          {title}
        </h1>
        {subtitle && <nav className="text-white/80 text-sm">{subtitle}</nav>}
      </div>
    </section>
  );
};

export default HeroSection;
