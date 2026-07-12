"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: form.elements.namedItem("name").value,
      email: form.elements.namedItem("email").value,
      message: form.elements.namedItem("message").value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const socialLinks = [
    { href: profile.links.github, label: "GitHub", Icon: Github },
    { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.links.leetcode, label: "LeetCode", Icon: Code2 },
  ];

  return (
    <section id="contact" className="border-t border-line dark:border-line-dark bg-surface/60 dark:bg-surface-dark/60">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">06 — contact.jsx</p>
          <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mb-10 max-w-lg text-sm text-muted dark:text-muted-dark">
            Have a role, project, or question in mind? Send a message below and
            it will land directly in my inbox.
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal delay={0.1} className="space-y-4 md:col-span-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent dark:text-muted-dark dark:hover:text-accent-dark"
            >
              <Mail size={17} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent dark:text-muted-dark dark:hover:text-accent-dark"
            >
              <Phone size={17} />
              {profile.phone}
            </a>
            <p className="flex items-center gap-3 text-sm text-muted dark:text-muted-dark">
              <MapPin size={17} />
              {profile.location}
            </p>

            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="gradient-border card flex h-10 w-10 items-center justify-center"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted dark:text-muted-dark">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-line dark:border-line-dark bg-paper dark:bg-paper-dark px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent dark:focus:border-accent-dark"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted dark:text-muted-dark">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-line dark:border-line-dark bg-paper dark:bg-paper-dark px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent dark:focus:border-accent-dark"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted dark:text-muted-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What would you like to ask or discuss?"
                  className="w-full resize-none rounded-md border border-line dark:border-line-dark bg-paper dark:bg-paper-dark px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent dark:focus:border-accent-dark"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-opacity disabled:opacity-60"
                style={{ backgroundImage: "linear-gradient(135deg, #6D5DF6, #FF5DA2)" }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm text-teal dark:text-teal-dark"
                  >
                    <CheckCircle2 size={16} />
                    Message sent. Thanks for reaching out — I will reply soon.
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm text-red-500"
                  >
                    <AlertCircle size={16} />
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
