"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const highlights = [
  { n: "1+", l: "Tahun belajar mandiri" },
  { n: "2024", l: "Lulus Salafiyah Al Khusna" },
  { n: "Now", l: "Aktif magang" },
  { n: "2026", l: "Kuliah S1 Universitas Terbuka" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* subtle bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 text-[#c8f04d] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          <span className="w-8 h-px bg-[#c8f04d]" />
          Tentang Saya
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — text */}
          <div className="space-y-8">
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="font-[Syne,sans-serif] text-5xl md:text-6xl font-bold leading-tight">
              Saya percaya <em className="text-[#c8f04d] not-italic">ketekunan</em>
              <br />
              adalah guru terbaik.
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Halo! Saya seorang <strong className="text-white">Frontend Developer</strong> yang memulai perjalanan coding secara <strong className="text-white">otodidak sejak April 2024</strong>. Tanpa background IT formal, saya belajar
                dari dokumentasi, tutorial, dan banyak trial & error — dan itu justru membuat saya semakin cinta dengan dunia web development.
              </p>
              <p>
                Saya lulusan <strong className="text-white">Paket C (setara SMA) dari Salafiyah Al Khusna tahun 2024</strong>. Jalur pendidikan yang tidak konvensional ini mengajarkan saya untuk mandiri, tidak mudah menyerah, dan terus
                belajar tanpa batas.
              </p>
              <p>
                Kini saya menjalani <strong className="text-white">magang di PT. Data Andalan Utama</strong> sekaligus aktif sebagai <strong className="text-white">mahasiswa S1 Sistem Informasi di Universitas Terbuka</strong> sejak 11 Mei
                2026.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.l}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }}
                  className="bg-[#111] border border-white/8 rounded-xl p-4 hover:border-[#c8f04d]/30 hover:bg-[#c8f04d]/3 transition-all group"
                >
                  <div className="font-[Syne,sans-serif] text-2xl font-bold text-[#c8f04d] group-hover:scale-110 transition-transform inline-block">{h.n}</div>
                  <div className="text-white/50 text-xs mt-1">{h.l}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#c8f04d] text-sm font-semibold group">
                Hubungi saya
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right — visual */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.15, ease: [0.23, 1, 0.32, 1] }} className="relative">
            {/* Photo placeholder / decorative */}
            <div className="relative">
              <div className="aspect-4/5 relative rounded-3xl bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/8 overflow-hidden">
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-10 z-0"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 30% 40%, #c8f04d 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, #c8f04d 0%, transparent 40%)
                    `,
                  }}
                />

                <Image src="/images/profile.jpeg" fill className="object-cover z-10" alt="Yudhi" />
              </div>

              {/* Floating badge */}
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 z-20 bg-[#c8f04d] text-[#0a0a0a] rounded-2xl p-4 shadow-2xl">
                <div className="text-xs font-bold">🏢 Tempat Magang</div>
                <div className="font-[Syne,sans-serif] font-bold text-sm mt-0.5">PT. Data Andalan Utama</div>
              </motion.div>

              {/* Floating stat */}
              {/* <motion.div animate={{ y: [6, -6, 6] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute -top-6 -right-6 z-20 bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl">
                <div className="text-[#c8f04d] font-[Syne,sans-serif] text-3xl font-bold">Apr</div>
                <div className="text-white/50 text-xs">&apos;24 Mulai belajar</div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
