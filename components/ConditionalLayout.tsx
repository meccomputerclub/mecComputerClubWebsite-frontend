"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import TopBar from "@/components/ui/TopBar";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && (
        <>
          <TopBar />
          <Header />
        </>
      )}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
