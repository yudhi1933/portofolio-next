"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript ES6+",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "React.js",
  "Next.js",
  "Shadcn UI",
  "Payload CMS",
  "TanStack Query",
  "TanStack DB",
  "Git & GitHub",
  "Responsive Design",
  "CSS Animation",
  "DOM Manipulation",
  "Flexbox & Grid",
  "MinIO",
  "REST API Integration",
  "Axios",
  "Component Architecture",
  "Form Handling",
  "Vite",
  "Node.js",
  "Docker (Basic)",
  "Postman",
];

const SKILL_GROUPS = [
  {
    label: "Core",
    color: "#c8f04d",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "TypeScript",
      "Responsive Design",
      "Flexbox & Grid",
    ],
  },
  {
    label: "Frameworks & UI",
    color: "#60a5fa",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn UI",
      "TanStack Query",
      "TanStack DB",
    ],
  },
  {
    label: "Tools & Workflow",
    color: "#f472b6",
    items: [
      "Git & GitHub",
      "Vite",
      "Postman",
      "Axios",
      "Docker (Basic)",
    ],
  },
  {
    label: "Backend & API",
    color: "#fb923c",
    items: [
      "REST API Integration",
      "Node.js",
      "Payload CMS",
      "MinIO",
      "Form Handling",
      "Component Architecture",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0d0d0d] py-20 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-[#c8f04d]/2 blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative mx-auto mb-12 max-w-7xl px-4 sm:px-6 md:mb-16"
      >
        {/* Label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8f04d] sm:text-xs"
        >
          <span className="h-px w-6 bg-[#c8f04d] sm:w-8" />

          Keahlian
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.1,
            duration: 0.7,
          }}
          className="font-[Syne,sans-serif] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Tools &{" "}
          <em className="not-italic text-[#c8f04d]">
            Technologies.
          </em>
        </motion.h2>

        {/* Skill Groups */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4"
        >
          {SKILL_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.3 + groupIndex * 0.1,
                duration: 0.6,
              }}
              className="group rounded-2xl border border-white/8 bg-[#111] p-5 transition-all duration-300 hover:border-white/15 sm:p-6"
            >
              {/* Category */}
              <div
                className="mb-5 inline-flex rounded-full px-3 py-1 text-[11px] font-bold sm:text-xs"
                style={{
                  backgroundColor: `${group.color}18`,
                  color: group.color,
                  border: `1px solid ${group.color}30`,
                }}
              >
                {group.label}
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/60 transition-colors duration-200 group-hover:text-white/75"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: group.color,
                      }}
                    />

                    <span className="leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ticker 1 */}
      <div className="mb-3 overflow-hidden">
        <div
          className="ticker-track flex w-max gap-2 px-4 sm:gap-3"
          style={{
            animationDirection: "normal",
          }}
        >
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex shrink-0 cursor-default items-center gap-2 rounded-full border border-white/8 bg-[#111] px-4 py-2 text-xs text-white/60 transition-colors hover:border-[#c8f04d]/40 hover:text-[#c8f04d] sm:px-5 sm:text-sm"
            >
              <span className="text-[9px] text-[#c8f04d] sm:text-[10px]">
                ◆
              </span>

              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Ticker 2 */}
      <div className="overflow-hidden">
        <div
          className="flex w-max gap-2 px-4 sm:gap-3"
          style={{
            animation: "ticker 45s linear infinite reverse",
          }}
        >
          {[
            ...SKILLS.slice(12),
            ...SKILLS.slice(0, 12),
            ...SKILLS.slice(12),
            ...SKILLS.slice(0, 12),
          ].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex shrink-0 cursor-default items-center gap-2 rounded-full border border-white/6 bg-[#0a0a0a] px-4 py-2 text-xs text-white/40 transition-colors hover:border-[#c8f04d]/30 hover:text-white/70 sm:px-5 sm:text-sm"
            >
              <span className="text-[9px] text-white/20 sm:text-[10px]">
                ◆
              </span>

              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}