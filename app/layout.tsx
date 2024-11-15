import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";
import Image from "next/image";
import heroBackground from "@/public/assets/images/layout-background.svg";
import ReactLenis from "lenis/react";
import "lenis/dist/lenis.css";

const inter = Inter({ subsets: ["latin"] });

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamza Ouaddi",
  description: "Hamza Ouaddi Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${manrope.className} relative bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50 overflow-x-hidden`}
      >
        <div className="absolute flex justify-center top-0 right-0 -z-10 h-[1080px] overflow-hidden layout-background">
          <div className="w-full h-full flex-shrink-0">
            <Image
              src={heroBackground}
              alt="Gradient background"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <ThemeContextProvider>
          <ReactLenis
            root
            options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
          >
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ReactLenis>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
