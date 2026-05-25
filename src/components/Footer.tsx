"use client";
import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/yudhi1933", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yudhi-3b1556386", icon: "LI" },
  { label: "Instagram", href: "https://instagram.com/yud_yudhi21", icon: "IG" },
  { label: "Email", href: "mailto:yudhiyudhitok@gmail.com", icon: "✉" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/6">
      {/* CTA Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 border-b border-white/6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
          <div>
            <h2 className="font-[Syne,sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Punya proyek? <em className="text-[#c8f04d] not-italic">Ayo kerja sama.</em>
            </h2>

            <p className="text-white/40 text-sm sm:text-base">Terbuka untuk peluang magang, freelance, atau kolaborasi.</p>
          </div>

          <motion.a
            href="mailto:yudhiyudhitok@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full sm:w-fit justify-center items-center gap-2 bg-[#c8f04d] text-[#0a0a0a] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm hover:bg-[#d4f76a] transition-colors"
          >
            Kirim Email ↗
          </motion.a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Brand */}
        <div className="sm:col-span-2">
          <a href="#" className="font-[Syne,sans-serif] text-2xl font-bold mb-4 inline-block">
            Yudhi<span className="text-[#c8f04d]">.</span>
          </a>

          <div className="flex items-start sm:items-center gap-2 mb-4">
            <span className="w-2 h-2 mt-1.5 sm:mt-0 rounded-full bg-[#c8f04d] animate-pulse shrink-0" />

            <span className="text-white/40 text-sm leading-relaxed">Magang · PT. Data Andalan Utama · Universitas Terbuka</span>
          </div>

          <p className="text-white/40 text-sm leading-relaxed max-w-sm">Frontend developer otodidak, aktif magang di PT. Data Andalan Utama, dan mahasiswa S1 Sistem Informasi Universitas Terbuka. Belajar tanpa henti sejak April 2024.</p>

          <div className="flex flex-wrap gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                title={s.label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-xs text-white/50 hover:text-[#c8f04d] hover:border-[#c8f04d]/30 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-semibold text-sm mb-4 md:mb-5">Navigasi</h4>

          <ul className="space-y-3">
            {[
              ["Tentang Saya", "#about"],
              ["Skills", "#skills"],
              ["Perjalanan", "#journey"],
              ["Proyek", "#projects"],
              ["Kontak", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="text-white/40 text-sm hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div>
          <h4 className="font-semibold text-sm mb-4 md:mb-5">Tech Stack</h4>

          <ul className="space-y-3">
            {["HTML & CSS", "JavaScript", "Tailwind CSS", "React.js", "Next.js", "Git & GitHub"].map((t) => (
              <li key={t}>
                <span className="text-white/40 text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-white/25 text-xs text-center sm:text-left">
          © 2026 <strong className="text-white/40">Yudhi</strong> · Hak cipta dilindungi.
        </p>

        <p className="text-white/25 text-xs text-center sm:text-left">
          Dibuat dengan <span className="text-[#c8f04d]">♥</span> menggunakan Next.js & Tailwind CSS
        </p>

        <a href="#" className="w-8 h-8 mx-auto sm:mx-0 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all text-xs">
          ↑
        </a>
      </div>
    </footer>
  );
}
