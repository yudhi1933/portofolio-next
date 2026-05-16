"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    date: "Agustus 2025 – Sekarang",
    title: "Intern Frontend Developer",
    place: "PT. Data Andalan Utama",
    desc: "Menerapkan keahlian frontend dalam lingkungan kerja profesional. Berkontribusi pada pengembangan fitur UI, belajar best practices industri secara langsung, dan berkolaborasi bersama tim developer berpengalaman.",
    tag: "Kerja",
    color: "#c8f04d",
    icon: "🏢",
  },
  {
    date: "Mei 2026 – Sekarang",
    title: "Mahasiswa S1 Sistem Informasi",
    place: "Universitas Terbuka",
    desc: "Resmi terdaftar sebagai mahasiswa S1 Sistem Informasi di Universitas Terbuka sejak 11 Mei 2026. Melanjutkan pendidikan sambil tetap aktif magang dan mengembangkan skill frontend.",
    tag: "Pendidikan",
    color: "#60a5fa",
    icon: "🎓",
  },
  {
    date: "Mei 2024",
    title: "Lulus Paket C — Setara SMA",
    place: "Salafiyah Al Khusna",
    desc: "Menyelesaikan pendidikan setara SMA melalui jalur Paket C. Pengalaman ini mengajarkan nilai kemandirian, ketekunan, dan semangat belajar yang tidak bergantung pada sistem konvensional.",
    tag: "Pendidikan",
    color: "#60a5fa",
    icon: "📜",
  },
  {
    date: "April 2024",
    title: "Belajar Frontend Secara Otodidak",
    place: "Self-taught · Online",
    desc: "Memulai dari HTML dasar, CSS, lalu JavaScript, dan terus berkembang ke Tailwind dan React. Belajar setiap hari melalui MDN, YouTube, freeCodeCamp, dan berbagai resource online — hanya dengan tekad dan konsistensi.",
    tag: "Mulai",
    color: "#fb923c",
    icon: "🚀",
  },
];

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 text-[#c8f04d] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          <span className="w-8 h-px bg-[#c8f04d]" />
          Perjalanan
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-[Syne,sans-serif] text-5xl md:text-6xl font-bold mb-20"
        >
          Dari nol <br />hingga <em className="text-[#c8f04d] not-italic">sekarang.</em>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#c8f04d]/50 via-white/10 to-transparent origin-top hidden md:block"
          />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="relative flex gap-8 group"
              >
                {/* Icon dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg z-10 mt-1"
                    style={{ background: item.color + "15", border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#111] border border-white/8 rounded-2xl p-8 hover:border-white/15 transition-all group-hover:bg-[#131313]">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-white/40 text-sm mb-1">{item.date}</div>
                      <h3 className="font-[Syne,sans-serif] text-xl font-bold">{item.title}</h3>
                      <div className="text-white/50 text-sm mt-0.5">{item.place}</div>
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                      style={{ background: item.color + "15", color: item.color, border: `1px solid ${item.color}25` }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
