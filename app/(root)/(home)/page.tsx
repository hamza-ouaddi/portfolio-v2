"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import SelectedProjects from "@/components/SelectedProjects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/ui/SectionDivider";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 200);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    }
  }, [isLoading]);

  return (
    <main className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <SectionDivider />
      <About />
      <SelectedProjects />
      <Skills />
      <Contact />
    </main>
  );
}
