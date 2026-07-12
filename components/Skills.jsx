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

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="border-y border-line dark:border-line-dark bg-surface/60 dark:bg-surface-dark/60">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">02 — skills.jsx</p>
          <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
            Skills &amp; <span className="text-gradient">tools</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(([group, items], gi) => {
            const Icon = groupIcons[group] || Code2;
            const accent = accentCycle[gi % accentCycle.length];
            return (
              <Reveal key={group} delay={0.05 * gi}>
                <div className="gradient-border card h-full p-5 transition-transform hover:-translate-y-1">
                  <div className="mb-3 flex items-center gap-2">
                    <Icon size={16} className={accent} />
                    <p className="font-mono text-xs font-medium text-ink dark:text-ink-dark">
                      {group}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.03 * i, duration: 0.3 }}
                        className="tag-chip rounded-md border border-line dark:border-line-dark bg-paper dark:bg-paper-dark px-2.5 py-1 text-xs text-ink dark:text-ink-dark"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
