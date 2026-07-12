"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-5 py-16 sm:px-8">
      <Reveal>
        <p className="section-label mb-3">03 — experience.jsx</p>
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
          Where I've <span className="text-gradient">worked</span>
        </h2>
      </Reveal>

      <div className="relative space-y-8">
        <div className="timeline-rail absolute left-[14px] top-2 hidden h-[calc(100%-1rem)] w-[2px] rounded-full opacity-70 sm:block" />

        {experience.map((job, i) => (
          <Reveal key={job.role + job.company} delay={0.08 * i}>
            <div className="flex gap-0 sm:gap-6">
              <div className="relative hidden w-[30px] shrink-0 sm:block">
                <span
                  className="absolute left-1/2 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                  style={{ backgroundImage: "linear-gradient(135deg, #6D5DF6, #FF5DA2)" }}
                />
              </div>
              <div className="gradient-border card grid flex-1 gap-4 p-5 transition-transform hover:-translate-y-1 sm:grid-cols-4 sm:p-6">
                <div className="sm:col-span-1">
                  <p className="font-mono text-xs text-muted dark:text-muted-dark">
                    {job.period}
                  </p>
                  <p className="mt-1 font-medium">{job.company}</p>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="mb-3 text-lg font-semibold">{job.role}</h3>
                  <ul className="space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted dark:text-muted-dark"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <Reveal>
          <p className="section-label mb-4">education</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={0.06 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="gradient-border card h-full p-4"
              >
                <GraduationCap size={18} className="mb-2 text-accent dark:text-accent-dark" />
                <p className="text-sm font-medium leading-snug">{edu.school}</p>
                <p className="mt-1 text-xs text-muted dark:text-muted-dark">{edu.detail}</p>
                <p className="mt-2 font-mono text-xs text-muted dark:text-muted-dark">
                  {edu.period}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}