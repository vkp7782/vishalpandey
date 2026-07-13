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

// Match this to the framer-motion transition duration below (0.25s),
// with a little buffer so we measure scroll position after layout settles.
const MENU_COLLAPSE_MS = 280;

const mobileList = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const mobileItem = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

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

  // Close the mobile menu on user scroll — but only start listening
  // AFTER the open animation has settled (300ms), so the menu's own
  // layout-shift on open doesn't trigger a false "user scrolled" close.
  useEffect(() => {
    if (!open) return;

    let startY = null;
    let listenerAttached = false;

    const closeOnScroll = () => {
      if (startY !== null && Math.abs(window.scrollY - startY) > 4) {
        setOpen(false);
      }
    };

    const armTimer = window.setTimeout(() => {
      startY = window.scrollY;
      listenerAttached = true;
      window.addEventListener("scroll", closeOnScroll, { passive: true });
    }, 300);

    return () => {
      window.clearTimeout(armTimer);
      if (listenerAttached) {
        window.removeEventListener("scroll", closeOnScroll);
      }
    };
  }, [open]);

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

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNav = (id) => {
    if (open) {
      // Mobile menu is open: close it first, then wait for the
      // collapse animation to finish before measuring scroll position.
      // Scrolling immediately uses a layout that's still animating,
      // so the target position goes stale mid-scroll.
      setOpen(false);
      window.setTimeout(() => scrollToId(id), MENU_COLLAPSE_MS);
    } else {
      // Desktop (or mobile menu already closed): layout is stable,
      // scroll immediately.
      scrollToId(id);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "glass border-line dark:border-line-dark"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3 sm:px-8">
        <button
          onClick={() => handleNav("home")}
          className="font-display text-sm font-semibold tracking-tight"
        >
          <span className="text-gradient">~/</span>vishal-pandey
        </button>

        {/* Desktop nav — active-item color/underline driven by the
            `nav-link` CSS class + `data-active` attribute (defined in
            globals.css), same as before. No custom motion underline here. */}
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

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.85 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
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
            <motion.div variants={mobileList} initial="hidden" animate="show" className="flex flex-col">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  variants={mobileItem}
                  onClick={() => handleNav(tab.id)}
                  whileTap={{ scale: 0.97, x: 2 }}
                  className="flex items-center gap-2 py-2.5 text-left font-mono text-sm text-muted dark:text-muted-dark"
                >
                  <Circle size={6} className="fill-current opacity-40" />
                  {tab.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}