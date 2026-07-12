"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-5 py-16 sm:px-8">
      <Reveal>
        <p className="section-label mb-3">01 — about.jsx</p>
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
          About <span className="text-gradient">me</span>
        </h2>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal delay={0.1} className="md:col-span-3">
          <p className="text-base leading-relaxed text-muted dark:text-muted-dark">
            I'm a frontend developer focused on building responsive, accessible
            interfaces with React, Next.js, and Tailwind CSS. I care about clean
            component architecture, performance, and interfaces that feel fast
            and predictable across every screen size. Currently working at
            Conscious Foundation, building production web applications and
            collaborating closely with designers and backend engineers to ship
            reliable, maintainable features.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="gradient-border card p-5">
            <p className="section-label mb-3">Highlights</p>
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-sm"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-teal dark:text-teal-dark"
                  />
                  <span className="text-muted dark:text-muted-dark">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
