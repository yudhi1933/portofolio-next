"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  "HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "Bootstrap",
  "React.js", "Next.js", "Shadcn UI", "Payload CMS", "Tanstack Query", "Tanstack DB",
  "Git & GitHub", "Responsive Design", "CSS Animation", "DOM Manipulation",
  "Flexbox & Grid", "MinIO", "REST API Integration", "Axios",
  "Component Architecture", "Form Handling", "Vite", "Node.js", "Docker (Basic)", "Postman",
];

const SKILL_GROUPS = [
  {
    label: "Core",
    color: "#c8f04d",
    items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript"],
  },
  {
    label: "Frameworks",
    color: "#60a5fa",
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Shadcn UI"],
  },
  {
    label: "Tools",
    color: "#f472b6",
    items: ["Git & GitHub", "Vite", "Postman", "Docker (Basic)", "Axios"],
  },
  {
    label: "Advanced",
    color: "#fb923c",
    items: ["Payload CMS", "Tanstack Query", "REST API", "MinIO", "Node.js"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 text-[#c8f04d] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          <span className="w-8 h-px bg-[#c8f04d]" />
          Keahlian
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-[Syne,sans-serif] text-5xl md:text-6xl font-bold"
        >
          Tools &amp; <em className="text-[#c8f04d] not-italic">Technologies.</em>
        </motion.h2>

        {/* Skill groups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILL_GROUPS.map((grp, gi) => (
            <motion.div
              key={grp.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + gi * 0.1, duration: 0.6 }}
              className="bg-[#111] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all group"
            >
              <div
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                style={{ background: grp.color + "18", color: grp.color, border: `1px solid ${grp.color}30` }}
              >
                {grp.label}
              </div>
              <ul className="space-y-2.5">
                {grp.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/65 group-hover:text-white/75 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: grp.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Infinite ticker — row 1 */}
      <div className="overflow-hidden mb-3">
        <div className="ticker-track flex gap-3 w-max" style={{ animationDirection: "normal" }}>
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center gap-2.5 bg-[#111] border border-white/8 text-white/60 text-sm px-5 py-2.5 rounded-full hover:border-[#c8f04d]/40 hover:text-[#c8f04d] transition-colors cursor-default"
            >
              <span className="text-[#c8f04d] text-xs">◆</span>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Ticker row 2 — reverse */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3 w-max"
          style={{ animation: "ticker 45s linear infinite reverse" }}
        >
          {[...SKILLS.slice(12), ...SKILLS.slice(0, 12), ...SKILLS.slice(12), ...SKILLS.slice(0, 12)].map((s, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center gap-2.5 bg-[#0a0a0a] border border-white/6 text-white/40 text-sm px-5 py-2.5 rounded-full hover:border-[#c8f04d]/30 hover:text-white/70 transition-colors cursor-default"
            >
              <span className="text-white/20 text-xs">◆</span>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
