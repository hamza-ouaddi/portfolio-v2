import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


//To detect which section is in view
export function useSectionInView(sectionName: SectionName, threshold: number) {

    const { ref, inView } = useInView({
        threshold,
      });
      const { setActiveSection } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, sectionName]);

      return {
        ref
      }
}