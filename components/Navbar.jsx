"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Circle } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const tabs = [
  { id: "about", label: "about.jsx" },
  { id: "skills", label: "skills.jsx" },
  { id: "experience", label: "experience.jsx" },
  { id: "projects", label: "projects.jsx" },
  { id: "resume", label: "resume.jsx" },
  { id: "contact", label: "contact.jsx" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...tabs.map((t) => t.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Scroll to the section FIRST (while the dropdown DOM is still in its
  // current state), then close the mobile menu on the next tick. This
  // avoids the scroll target position shifting under the user because
  // the dropdown collapsed mid-calculation.
  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setOpen(false), 300);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "glass border-line dark:border-line-dark"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <button
          onClick={() => handleNav("home")}
          className="min-w-0 truncate font-display text-sm font-semibold tracking-tight"
        >
          <span className="text-gradient">~/</span>vishal-pandey
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleNav(tab.id)}
              data-active={active === tab.id}
              className={`nav-link group flex items-center gap-2 rounded-t-md px-3 py-2 font-mono text-xs transition-colors ${
                active === tab.id
                  ? "text-ink dark:text-ink-dark"
                  : "text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
              }`}
            >
              <Circle
                size={6}
                className={`fill-current transition-opacity ${
                  active === tab.id ? "text-accent dark:text-accent-dark opacity-100" : "opacity-40"
                }`}
              />
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            className="shrink-0 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col overflow-hidden border-t border-line dark:border-line-dark bg-paper dark:bg-paper-dark px-5 md:hidden"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleNav(tab.id)}
                className="flex items-center gap-2 py-2.5 text-left font-mono text-sm text-muted dark:text-muted-dark"
              >
                <Circle size={6} className="fill-current opacity-40" />
                {tab.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}