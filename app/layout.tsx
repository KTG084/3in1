import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particles from "@/components/Particles";
import Footer from "@/components/Footer";
import { lazy, Suspense } from "react";
import AnimatedContent from "@/components/AnimatedContent";

const LazyNavbar = lazy(() => import("@/components/Navbar"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3 in 1 Bot",
  description: "A bot that awakens curiosity and discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col 
        bg-gradient-to-b from-gray-950 via-black to-gray-800`}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 -z-100">
          <div
            className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-40 h-40 sm:w-96 sm:h-96 rounded-full blur-2xl sm:blur-3xl animate-pulse"
            style={{ backgroundColor: "#00FFFF20" }}
          />
          <div
            className="absolute bottom-0 right-0 w-32 h-32 sm:w-80 sm:h-80 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"
            style={{ backgroundColor: "#00FFFF33" }}
          />
        </div>

        {/* Navbar */}
        <Suspense fallback={null}>
          <AnimatedContent
            distance={80} // slightly less intense motion
            direction="vertical"
            reverse={true}
            duration={0.4} // slightly longer, smoother
            ease="easeOutCubic" // more natural easing
            initialOpacity={0}
            animateOpacity
            scale={1.05} // subtle, avoids "zoomy" feel
            threshold={0.1}
            delay={0.15}
          >
            <LazyNavbar />
          </AnimatedContent>
        </Suspense>

        {/* Main content */}
        <main className="flex-grow pt-16 sm:pt-24 px-3 sm:px-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Particles background */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <Particles
            particleColors={[
              "#00FFFF", // cyan
              "#40E0D0", // turquoise
              "#7FFFD4", // aquamarine
              "#00CED1", // dark turquoise
              "#20B2AA", // light sea green
            ]}
            particleCount={
              typeof window !== "undefined" && window.innerWidth < 640
                ? 2000
                : 6000
            }
            particleSpread={30}
            speed={0.05}
            particleBaseSize={250} // smaller for mobile
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>
      </body>
    </html>
  );
}
