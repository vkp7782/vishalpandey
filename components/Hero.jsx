"use client";

import { motion } from "framer-motion";
import { ArrowDown, ImagePlus, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";
import TypingTerminal from "./TypingTerminal";

const codeLines = [
  { text: "const developer = {", className: "text-muted dark:text-muted-dark" },
  { text: `  name: "${profile.name}",`, className: "text-ink dark:text-ink-dark" },
  { text: `  role: "${profile.role}",`, className: "text-ink dark:text-ink-dark" },
  { text: `  stack: ["React", "Next.js", "Tailwind"],`, className: "text-teal dark:text-teal-dark" },
  { text: `  location: "${profile.location}",`, className: "text-ink dark:text-ink-dark" },
  { text: "  available: true,", className: "text-accent dark:text-accent-dark" },
  { text: "};", className: "text-muted dark:text-muted-dark" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-content flex-col gap-6 px-5 pb-20 pt-14 sm:px-8 md:pb-28 md:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-line dark:border-line-dark bg-surface/70 dark:bg-surface-dark/70 px-3 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-teal dark:bg-teal-dark" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal dark:bg-teal-dark" />
        </span>
        <span className="font-mono text-[11px] text-muted dark:text-muted-dark">
          open to new opportunities
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="mb-1 text-3xl font-semibold leading-tight sm:text-4xl">
          Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>
        </h1>
      </motion.div>

      {/* ---- Card + Photo row — only these two, so they align perfectly ---- */}
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="gradient-border card flex w-full flex-col overflow-hidden md:h-[210px] md:w-3/5"
        >
          <div className="flex shrink-0 items-center gap-1.5 border-b border-line dark:border-line-dark px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent2/70 dark:bg-accent2-dark/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70 dark:bg-amber-dark/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal/70 dark:bg-teal-dark/70" />
            <span className="ml-2 font-mono text-xs text-muted dark:text-muted-dark">
              developer.ts
            </span>
          </div>

          <div className="md:flex-1 md:overflow-hidden">
            <TypingTerminal lines={codeLines} />
          </div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-48 shrink-0 sm:w-60 md:h-[210px] md:w-[210px]"
        >
          <div
            className="absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl"
            style={{ backgroundImage: "linear-gradient(135deg, #6D5DF6, #FF5DA2, #0EA895)" }}
          />
          <div className="gradient-border relative mx-auto flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-full border border-line dark:border-line-dark bg-surface dark:bg-surface-dark">
            <img
              src="/profile.jpeg"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-lg text-base leading-relaxed text-muted dark:text-muted-dark sm:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-wrap gap-3"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group relative flex items-center gap-2 overflow-hidden rounded-md px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
          style={{ backgroundImage: "linear-gradient(135deg, #6D5DF6, #FF5DA2)" }}
        >
          <Sparkles size={15} />
          Get in touch
        </a>
        <a
          href="#resume"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 rounded-md border border-line dark:border-line-dark px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent dark:hover:border-accent-dark"
        >
          View resume
          <ArrowDown size={15} />
        </a>
      </motion.div>
    </section>
  );
}