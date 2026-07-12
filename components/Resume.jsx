"use client";

import { FileText, Eye, Download } from "lucide-react";
import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-content px-5 py-16 sm:px-8">
      <Reveal>
        <p className="section-label mb-3">05 — resume.jsx</p>
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
          My <span className="text-gradient">resume</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="gradient-border card flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white"
              style={{ backgroundImage: "linear-gradient(135deg, #6D5DF6, #FF5DA2)" }}
            >
              <FileText size={22} />
            </div>
            <div>
              <p className="font-medium">Vishal_Kumar_Pandey_Resume.pdf</p>
             
            </div>
          </div>

          <div className="flex w-full gap-3 sm:w-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line dark:border-line-dark px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent dark:hover:border-accent-dark sm:flex-none"
            >
              <Eye size={16} />
              View
            </a>
            <a
              href="/resume.pdf"
              download="Vishal_Kumar_Pandey_Resume.pdf"
              className="flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 sm:flex-none"
              style={{ backgroundImage: "linear-gradient(135deg, #6D5DF6, #FF5DA2)" }}
            >
              <Download size={16} />
              Download
            </a>
          </div>
        </div>
      </Reveal>

    </section>
  );
}
