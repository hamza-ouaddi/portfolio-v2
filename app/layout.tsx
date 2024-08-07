import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";

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
        {/* <div className="absolute bg-[#fbe2e3] dark:bg-[#946263] top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div className="absolute bg-[#dbd7fb] dark:bg-[#676394] top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div> */}

        {/* <div
          className="absolute bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] -z-10"
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"
        ></div> */}

        {/* <div className="absolute bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div className="absolute bg-gradient-to-r from-red-200 via-pink-300 to-yellow-200 top-[-1rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[8rem] lg:right-[6rem] xl:right-[5rem] 2xl:right-[4rem] -z-10"></div> */}

        <div className="absolute bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 top-[-20rem] left-[36rem] h-[28rem] w-[40rem] rounded-full blur-[12rem] sm:w-[36rem] -z-10"></div>
        <div className=" absolute bg-gradient-to-r from-red-200 via-pink-300 to-yellow-200 top-[-20rem] right-[1rem] h-[26.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[32.75rem] md:right-[8rem] lg:right-[6rem] xl:right-[5rem] 2xl:right-[34rem] -z-10"></div>

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
