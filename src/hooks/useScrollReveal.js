
import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const root = document.querySelector(".home");

    if (!root) return;

    const elements = root.querySelectorAll(".rr-reveal");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => {
        element.classList.add("rr-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("rr-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    root.classList.add("rr-motion-ready");

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("rr-motion-ready");
    };
  }, []);
}
