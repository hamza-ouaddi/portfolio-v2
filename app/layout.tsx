import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";
import Image from "next/image";
import heroBackground from "@/public/assets/images/layout-background.png";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} relative bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50 pt-28 sm:pt-36`}
      >
        <div className="absolute flex justify-center top-0 inset-x-0 -z-10 w-full h-[640px] overflow-hidden ">
          <div className="w-[1440px] h-full flex-shrink-0">
            <Image
              src={heroBackground}
              alt="Gradient background"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
