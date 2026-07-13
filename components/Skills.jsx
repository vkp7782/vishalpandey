"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Code2, LayoutTemplate, Library, Wrench, MonitorCog } from "lucide-react";
import Reveal from "./Reveal";

const groupIcons = {
  Languages: Code2,
  Frontend: LayoutTemplate,
  Libraries: Library,
  Tools: Wrench,
  "Operating Systems": MonitorCog,
};

const accentCycle = [
  "text-accent dark:text-accent-dark",
  "text-accent2 dark:text-accent2-dark",
  "text-teal dark:text-teal-dark",
  "text-amber dark:text-amber-dark",
];

const chipContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const chipItem = {
  hidden: { opacity: 0, scale: 0.9, y: 4 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="border-y border-line dark:border-line-dark bg-surface/60 dark:bg-surface-dark/60">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">02 — skills.jsx</p>
          <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
            Skills &amp;{" "}
            <motion.span
              className="text-gradient inline-block"
              animate={{ scale: [1, 1.025, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              tools
            </motion.span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(([group, items], gi) => {
            const Icon = groupIcons[group] || Code2;
            const accent = accentCycle[gi % accentCycle.length];
            return (
              <Reveal key={group} delay={0.05 * gi}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.6 }}
                  className="gradient-border card h-full p-5"
                >
                  <motion.div
                    className="mb-3 flex items-center gap-2"
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.span
                      whileHover={{ rotate: -8, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Icon size={16} className={accent} />
                    </motion.span>
                    <p className="font-mono text-xs font-medium text-ink dark:text-ink-dark">
                      {group}
                    </p>
                  </motion.div>
                  <motion.div
                    variants={chipContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className="flex flex-wrap gap-2"
                  >
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={chipItem}
                        whileHover={{ y: -2, scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="tag-chip rounded-md border border-line dark:border-line-dark bg-paper dark:bg-paper-dark px-2.5 py-1 text-xs text-ink dark:text-ink-dark"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}