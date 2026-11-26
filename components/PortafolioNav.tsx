"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["about", "skills", "experience", "projects", "certificate"] as const;

const SECTION_LABELS: Record<(typeof SECTIONS)[number], string> = {
  about: "Sobre mí",
  skills: "Habilidades",
  experience: "Experiencia",
  projects: "Proyectos",
  certificate: "Certificados",
};

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 border-b border-border bg-background/80 backdrop-blur-sm z-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-8 overflow-x-auto">
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              aria-current={activeSection === section ? "location" : undefined}
              className={`py-4 px-1 border-b-2 transition-colors whitespace-nowrap ${
                activeSection === section
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {SECTION_LABELS[section]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}