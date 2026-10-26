
"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const certificates = [
  {
    tag: "Short Class",
    title: "AI for Work Productivity",
    issuer: "MySkill",
    date: "Okt 2026",
    desc: "Mempelajari pemanfaatan Artificial Intelligence (AI) untuk meningkatkan produktivitas kerja, efisiensi workflow, dan penyelesaian tugas menggunakan tools AI terkini.",
    link: "https://drive.google.com/file/d/1pacnzL1wGFhxwnXQ8HQ8wP7WsTHUxHUG/view", // Ganti dengan link PDF spesifik milikmu
    icon: Sparkles, 
    color: "#a855f7", // Warna ungu (sering diidentikkan dengan AI), atau bisa pakai "#60a5fa" (Biru MySkill)
    num: "01",
  },
];

export default function Certificates() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#0d0d0d] py-20 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-[#60a5fa]/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#60a5fa] sm:text-xs"
        >
          <span className="h-px w-6 bg-[#60a5fa] sm:w-8" />
          Certifications
        </motion.div>

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-[Syne,sans-serif] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Licenses &<br />
            <em className="not-italic text-[#60a5fa]">Certificates.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xs text-sm leading-relaxed text-white/40 sm:text-right"
          >
            Validasi keahlian dan pembelajaran berkelanjutan saya dalam pengembangan teknologi web.
          </motion.p>
        </div>

        {/* Certificate List */}
        <div className="space-y-4 md:space-y-5">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            const isHovered = hovered === index;

            return (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + index * 0.12,
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group relative block overflow-hidden rounded-2xl border border-white/8 bg-[#111] p-5 transition-all duration-300 hover:border-white/15 sm:p-6 md:p-8"
              >
                {/* Hover background */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pointer-events-none absolute inset-0 rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at 25% 50%, ${cert.color}08, transparent 60%)`,
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
                        backgroundColor: `${cert.color}12`,
                        border: `1px solid ${cert.color}25`,
                        color: cert.color,
                      }}
                    >
                      <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.7} />
                    </div>
                    <span className="font-mono text-xs text-white/20 md:mt-2">
                      {cert.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Tag + Issuer/Date */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-semibold sm:text-[11px]"
                        style={{
                          backgroundColor: `${cert.color}12`,
                          color: cert.color,
                          border: `1px solid ${cert.color}25`,
                        }}
                      >
                        {cert.tag}
                      </span>
                      <span className="text-[10px] text-white/30 sm:text-[11px]">
                        {cert.issuer} · {cert.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 font-[Syne,sans-serif] text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-[#60a5fa] sm:text-2xl">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="max-w-3xl text-sm leading-relaxed text-white/50 sm:text-[15px]">
                      {cert.desc}
                    </p>
                  </div>

                  {/* Arrow (Action) */}
                  <div className="flex items-center gap-4">
                    <span className="hidden text-xs font-medium text-white/40 transition-colors group-hover:text-white/80 md:block">
                      Lihat Kredensial
                    </span>
                    <motion.div
                      animate={{
                        x: isHovered ? 0 : -6,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="hidden h-10 w-10 items-center justify-center rounded-full md:flex"
                      style={{
                        backgroundColor: `${cert.color}18`,
                        color: cert.color,
                      }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}