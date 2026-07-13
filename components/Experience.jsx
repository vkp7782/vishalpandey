"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

const pointContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const pointItem = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-5 py-16 sm:px-8">
      <Reveal>
        <p className="section-label mb-3">03 — experience.jsx</p>
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
          Where I've{" "}
          <motion.span
            className="text-gradient inline-block"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            worked
          </motion.span>
        </h2>
      </Reveal>

      <div className="relative space-y-8">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
          className="timeline-rail absolute left-[14px] top-2 hidden h-[calc(100%-1rem)] w-[2px] rounded-full opacity-70 sm:block"
        />

        {experience.map((job, i) => (
          <Reveal key={job.role + job.company} delay={0.08 * i}>
            <div className="flex gap-0 sm:gap-6">
              <div className="relative hidden w-[30px] shrink-0 sm:block">
                <motion.span
                  initial={{ scale: 0, x: "-50%" }}
                  whileInView={{ scale: 1, x: "-50%" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: 0.08 * i + 0.3,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-1/2 top-6 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundImage: "linear-gradient(135deg, #6D5DF6, #FF5DA2)" }}
                />
              </div>
              <motion.div
                whileHover={{ y: -4, scale: 1.006 }}
                transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.6 }}
                className="gradient-border card grid flex-1 gap-4 p-5 sm:grid-cols-4 sm:p-6"
              >
                <div className="sm:col-span-1">
                  <p className="font-mono text-xs text-muted dark:text-muted-dark">
                    {job.period}
                  </p>
                  <p className="mt-1 font-medium">{job.company}</p>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="mb-3 text-lg font-semibold">{job.role}</h3>
                  <motion.ul
                    variants={pointContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-2"
                  >
                    {job.points.map((point) => (
                      <motion.li
                        key={point}
                        variants={pointItem}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted dark:text-muted-dark"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
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
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.6 }}
                className="gradient-border card h-full p-4"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="mb-2 inline-block"
                >
                  <GraduationCap size={18} className="text-accent dark:text-accent-dark" />
                </motion.div>
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