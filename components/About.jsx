"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const listContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const iconPop = {
  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-5 py-16 sm:px-8">
      <Reveal>
        <motion.p
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-label mb-3"
        >
          01 — about.jsx
        </motion.p>
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
          About{" "}
          <motion.span
            className="text-gradient inline-block"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            me
          </motion.span>
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
          <motion.div
            whileHover={{ y: -3, scale: 1.008 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.6 }}
            className="gradient-border card p-5"
          >
            <p className="section-label mb-3">Highlights</p>
            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-3"
            >
              {achievements.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  whileHover={{ x: 3, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="flex items-start gap-2.5 text-sm"
                >
                  <motion.span variants={iconPop} className="mt-0.5 shrink-0">
                    <CheckCircle2
                      size={16}
                      className="text-teal dark:text-teal-dark"
                    />
                  </motion.span>
                  <span className="text-muted dark:text-muted-dark">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}