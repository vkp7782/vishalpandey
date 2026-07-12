"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const name = profile.name.replaceAll(" ", "");

  const handleScrollTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line dark:border-line-dark">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p className="flex flex-wrap items-center justify-center gap-1 font-mono text-xs md:text-sm text-muted dark:text-muted-dark sm:justify-start">
          <span className="text-2xl leading-none">&copy;</span>
          <span className="text-gradient font-semibold">{new Date().getFullYear()}{name}</span>
          <span>· All rights reserved</span>
        </p>

        <button
          onClick={handleScrollTop}
          aria-label="Back to top"
          className="group flex items-center gap-2 rounded-md border border-line dark:border-line-dark px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink dark:text-muted-dark dark:hover:border-accent-dark dark:hover:text-ink-dark"
        >
          Back to top
          <ArrowUp
            size={13}
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </footer>
  );
}