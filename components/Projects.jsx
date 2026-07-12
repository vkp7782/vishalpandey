"use client";

import { projects } from "@/lib/data";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-line dark:border-line-dark bg-surface/60 dark:bg-surface-dark/60">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">04 — projects.jsx</p>
          <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
            Things I've <span className="text-gradient">built</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.1 * i} className="h-full">
              <TiltCard className="h-full">
                <div className="mb-4 flex items-start justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
                    style={{ backgroundImage: "linear-gradient(135deg, #6D5DF6, #FF5DA2)" }}
                  >
                    <FolderGit2 size={18} />
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-muted transition-colors hover:text-accent dark:text-muted-dark dark:hover:text-accent-dark"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>

                <h3 className="mb-1 text-lg font-semibold">{project.title}</h3>
                <p className="mb-4 font-mono text-xs text-muted dark:text-muted-dark">
                  {project.stack}
                </p>

                <ul className="space-y-2">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted dark:text-muted-dark"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal dark:bg-teal-dark" />
                      {point}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}