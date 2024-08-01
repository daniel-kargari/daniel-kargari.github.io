import { useState, useEffect } from "react";

const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const middleOfViewport = window.innerHeight / 2;
      let newActiveSection = "";

      // Calculate the position of the scrollbar
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Check if scrollbar is at the bottom
      const isAtBottom =
        Math.ceil(scrollTop + windowHeight) >= (documentHeight * 95) / 100;

      if (isAtBottom) {
        // If at the bottom, activate the last section
        newActiveSection = sectionIds[sectionIds.length - 1];
      } else {
        // Otherwise, check which section is active based on middle of the viewport
        sectionIds.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top < middleOfViewport) {
              newActiveSection = sectionId;
            }
          }
        });
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the component mounts when the page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
