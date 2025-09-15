// src/hooks/useNavigation.ts
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [highlightContact, setHighlightContact] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Contact highlight
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (!contactSection) return;

      const rect = contactSection.getBoundingClientRect();
      setHighlightContact(rect.top <= 150 && rect.bottom >= 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Scroll spy
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "services", "about", "contact"];
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Smooth scroll or navigate
  const handleScrollNav = (to: string) => {
    setActiveSection(to);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      const el = document.getElementById(to);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isActive = (item: { to: string; type: string }) =>
    item.type === "link"
      ? location.pathname.startsWith(item.to)
      : location.pathname === "/" && activeSection === item.to;

  return { activeSection, handleScrollNav, isActive, highlightContact };
}
