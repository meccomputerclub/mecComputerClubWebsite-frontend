"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within <Carousel>");
  return context;
}

export function Carousel({
  opts,
  plugins,
  className,
  children,
}: {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  className?: string;
  children?: React.ReactNode;
}) {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);

  return (
    <CarouselContext.Provider value={{ carouselRef, api }}>
      <div className={cn("relative", className)}>
        <div className="overflow-hidden" ref={carouselRef}>
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-ml-4 flex", className)}
    {...props}
  />
));
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
    {...props}
  />
));
CarouselItem.displayName = "CarouselItem";

export function CarouselPrevious({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { api } = useCarousel();
  return (
    <button
      type="button"
      onClick={() => api?.scrollPrev()}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] text-primary hover:bg-primary hover:text-white transition-colors w-10 h-10",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  );
}

export function CarouselNext({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { api } = useCarousel();
  return (
    <button
      type="button"
      onClick={() => api?.scrollNext()}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-[#232B3E] bg-white dark:bg-[#181F2A] text-primary hover:bg-primary hover:text-white transition-colors w-10 h-10",
        className
      )}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

export type { CarouselApi, CarouselOptions, CarouselPlugin };


