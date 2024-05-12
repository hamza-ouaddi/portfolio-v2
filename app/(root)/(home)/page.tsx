import About from "@/components/About";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/ui/SectionDivider";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
    </main>
  );
}
