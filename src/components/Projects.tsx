"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    tag: "Point of Sale",
    title: "Mayapp POS",
    desc: "Aplikasi Point of Sale (POS) berbasis web yang dikembangkan secara kolaboratif. Memiliki dua mode operasional (Mode POS & Mode Order), menu pesanan untuk mengelola order aktif, serta menu transaksi untuk mencatat dan memantau seluruh aktivitas penjualan.",
    stacks: ["HTML", "Tailwind", "JavaScript", "React.js"],
    emoji: "🛒",
    color: "#c8f04d",
    num: "01",
  },
  {
    tag: "Landing Page",
    title: "Nightgale Wealth Management",
    desc: "Corporate landing page untuk perusahaan wealth management berbasis di Amerika Serikat. Dirancang dengan pendekatan profesional dan terpercaya, menampilkan informasi Business Continuity Plan dan kebijakan perusahaan secara jelas dan terstruktur.",
    stacks: ["HTML", "CSS", "Tailwind", "JavaScript"],
    emoji: "💼",
    color: "#60a5fa",
    num: "02",
  },
  {
    tag: "Learning Management System",
    title: "Learning Payload CMS",
    desc: "Platform kursus berbasis web dengan sistem evaluasi terintegrasi. Pengguna dapat mengikuti materi pembelajaran, menjawab soal, dan mendapatkan sertifikat secara otomatis setelah menyelesaikan seluruh evaluasi dengan benar.",
    stacks: ["HTML", "Tailwind", "Next.js", "Payload CMS"],
    emoji: "📚",
    color: "#f472b6",
    num: "03",
  },
  {
    tag: "Landing Page",
    title: "Wedding Invitation",
    desc: "Website undangan pernikahan digital dengan desain elegan dan responsif. Menampilkan informasi acara, galeri foto pasangan, countdown waktu, serta fitur konfirmasi kehadiran (RSVP). Dirancang dengan pengalaman pengguna yang halus.",
    stacks: ["HTML", "CSS", "Tailwind", "JavaScript"],
    emoji: "💍",
    color: "#fb923c",
    num: "04",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* LABEL */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="inline-flex items-center gap-2 text-[#c8f04d] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          <span className="w-6 sm:w-8 h-px bg-[#c8f04d]" />
          Proyek
        </motion.div>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            className="font-[Syne,sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Karya yang
            <br />
            <em className="text-[#c8f04d] not-italic">telah dibuat.</em>
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} className="text-white/40 text-sm">
            {projects.length} proyek
          </motion.div>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-5 md:space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.12,
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1],
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-[#111] border border-white/8 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/15 transition-all cursor-pointer overflow-hidden"
            >
              {/* HOVER BG */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 30% 50%, ${p.color}06, transparent 60%)`,
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 grid md:grid-cols-[80px_1fr_auto] gap-5 md:gap-6 items-start md:items-center">
                {/* MOBILE TOP */}
                <div className="flex md:hidden items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: p.color + "12",
                      border: `1px solid ${p.color}25`,
                    }}
                  >
                    {p.emoji}
                  </div>

                  <span className="text-white/20 text-xs font-mono">{p.num}</span>
                </div>

                {/* DESKTOP ICON */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-2"
                    style={{
                      background: p.color + "12",
                      border: `1px solid ${p.color}25`,
                    }}
                  >
                    {p.emoji}
                  </div>

                  <span className="text-white/20 text-xs font-mono">{p.num}</span>
                </div>

                {/* MAIN */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: p.color + "12",
                        color: p.color,
                        border: `1px solid ${p.color}25`,
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-[Syne,sans-serif] text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#c8f04d] transition-colors leading-snug">{p.title}</h3>

                  <p className="text-white/50 leading-relaxed text-sm sm:text-[15px] max-w-2xl">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.stacks.map((s) => (
                      <span key={s} className="text-[11px] sm:text-xs bg-white/5 border border-white/8 text-white/50 px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DESKTOP ARROW */}
                <motion.div
                  animate={{
                    x: hovered === i ? 0 : -6,
                    opacity: hovered === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:flex w-10 h-10 rounded-full items-center justify-center"
                  style={{
                    background: p.color + "18",
                    color: p.color,
                  }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
