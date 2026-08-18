"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Heart,
} from "lucide-react";

const projects = [
  {
    tag: "Point of Sale",
    title: "Mayapp POS",
    type: "Internship · Team Project",
    desc: "Web-based Point of Sale application developed collaboratively with two operational modes: POS and Order. Contributed to responsive UI development, order management flows, and transaction views using React and Tailwind CSS.",
    stacks: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
    icon: BriefcaseBusiness,
    color: "#c8f04d",
    num: "01",
  },
  {
    tag: "Learning Management System",
    title: "Learning Platform",
    type: "Personal · Fullstack Project",
    desc: "Web-based learning platform with integrated evaluation and certification flow. Users can access learning materials, complete assessments, and receive certificates after successfully completing the required evaluations.",
    stacks: ["Next.js", "Tailwind CSS", "Payload CMS", "TypeScript"],
    icon: GraduationCap,
    color: "#60a5fa",
    num: "02",
  },
  {
    tag: "Corporate Landing Page",
    title: "Nightgale Wealth Management",
    type: "Client Project",
    desc: "Professional corporate landing page for a US-based wealth management company. Focused on responsive layout implementation, structured content presentation, and a clean user experience across devices.",
    stacks: ["HTML", "JavaScript", "Tailwind CSS", "Responsive Design"],
    icon: Code2,
    color: "#f472b6",
    num: "03",
  },
  {
    tag: "Landing Page",
    title: "Wedding Invitation",
    type: "Personal Project",
    desc: "Responsive digital wedding invitation designed with an elegant and interactive experience. Includes event information, photo gallery, countdown, and RSVP functionality.",
    stacks: ["HTML", "JavaScript", "Tailwind CSS", "Responsive Design"],
    icon: Heart,
    color: "#fb923c",
    num: "04",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0d0d0d] py-20 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute left-[10%] top-[30%] h-72 w-72 rounded-full bg-[#c8f04d]/2 blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl px-4 sm:px-6"
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

          Projects
        </motion.div>

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
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
            Selected
            <br />
            <em className="not-italic text-[#c8f04d]">
              Work.
            </em>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
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
              delay: 0.3,
              duration: 0.6,
            }}
            className="max-w-xs text-sm leading-relaxed text-white/40 sm:text-right"
          >
            Beberapa project yang merepresentasikan pengalaman dan kemampuan
            saya dalam pengembangan web.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="space-y-4 md:space-y-5">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hovered === index;

            return (
              <motion.article
                key={project.title}
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
                  delay: 0.2 + index * 0.12,
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#111] p-5 transition-all duration-300 hover:border-white/15 sm:p-6 md:p-8"
              >
                {/* Hover background */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="pointer-events-none absolute inset-0 rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at 25% 50%, ${project.color}08, transparent 60%)`,
                      }}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10 grid gap-5 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-6">
                  {/* Number / Icon */}
                  <div className="flex items-center justify-between md:flex-col md:items-center">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl md:h-14 md:w-14"
                      style={{
                        backgroundColor: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                      }}
                    >
                      <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.7} />
                    </div>

                    <span className="font-mono text-xs text-white/20 md:mt-2">
                      {project.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Category + Type */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-semibold sm:text-[11px]"
                        style={{
                          backgroundColor: `${project.color}12`,
                          color: project.color,
                          border: `1px solid ${project.color}25`,
                        }}
                      >
                        {project.tag}
                      </span>

                      <span className="text-[10px] text-white/30 sm:text-[11px]">
                        {project.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 font-[Syne,sans-serif] text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-[#c8f04d] sm:text-2xl">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="max-w-3xl text-sm leading-relaxed text-white/50 sm:text-[15px]">
                      {project.desc}
                    </p>

                    {/* Stack */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stacks.map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[10px] text-white/50 sm:text-xs"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{
                      x: isHovered ? 0 : -6,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="hidden h-10 w-10 items-center justify-center rounded-full md:flex"
                    style={{
                      backgroundColor: `${project.color}18`,
                      color: project.color,
                    }}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="mt-8 flex items-center gap-2 text-xs text-white/30"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8f04d]" />

          Seluruh project dikembangkan dengan fokus pada responsive design dan
          pengalaman pengguna.
        </motion.div>
      </div>
    </section>
  );
}