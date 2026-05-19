"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = ["Frontend Developer", "React Developer"];

function TypewriterText() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-[#c8f04d] font-[Syne,sans-serif]">
      {displayed}
      <span className="cursor-blink text-[#c8f04d]">|</span>
    </span>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-a absolute top-[15%] left-[10%] w-96 h-96 rounded-full bg-[#c8f04d]/8 blur-3xl" />
        <div className="orb-b absolute bottom-[20%] right-[8%] w-80 h-80 rounded-full bg-[#c8f04d]/5 blur-3xl" />
        <div className="absolute top-[50%] left-[50%] w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/2 blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/70">
              <span className="w-2 h-2 rounded-full bg-[#c8f04d] animate-pulse" />
              Magang · PT. Data Andalan Utama &nbsp;·&nbsp; Universitas Terbuka
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1
              className="font-[Syne,sans-serif] text-6xl md:text-7xl xl:text-8xl font-bold leading-none tracking-tight"
              style={{ lineHeight: 1.05 }}
            >
              {/* <span className="text-white/90">Hi, I&apos;m</span> */}
              <br />
              <span className="text-white">Yudhi</span>
              <span className="text-[#c8f04d]">.</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="text-2xl md:text-3xl font-light min-h-10">
            <TypewriterText />
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/55 text-lg leading-relaxed max-w-xl">
            Belajar otodidak sejak April 2024, saya membangun antarmuka web yang bersih,
            responsif, dan berkesan — dari nol, langkah demi langkah.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-[#c8f04d] text-[#0a0a0a] px-7 py-3.5 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Lihat Proyek</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 text-white/80 px-7 py-3.5 rounded-full font-semibold text-sm hover:border-white/40 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Hubungi Saya
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-8 pt-4">
            {[
              { n: "1+", l: "Tahun belajar" },
              { n: "4+", l: "Proyek selesai" },
              { n: "20+", l: "Tools & tech" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-[Syne,sans-serif] text-3xl font-bold text-[#c8f04d]">{s.n}</div>
                <div className="text-white/40 text-sm">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — card stack */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="space-y-4 transition-transform duration-100"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Status card */}
            <div className="bg-[#111] border border-white/8 rounded-2xl p-6 flex items-center gap-4 hover:border-white/15 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#c8f04d]/10 border border-[#c8f04d]/20 flex items-center justify-center text-xl">
                🏢
              </div>
              <div>
                <div className="text-white/40 text-xs mb-0.5">Status saat ini</div>
                <div className="font-semibold">Intern & Mahasiswa</div>
                <div className="text-white/50 text-sm">PT. Data Andalan Utama · Universitas Terbuka</div>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-[#c8f04d] animate-pulse" />
            </div>

            {/* Two-col cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111] border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-colors">
                <div className="text-white/40 text-xs mb-1">Mulai belajar</div>
                <div className="font-[Syne,sans-serif] text-2xl font-bold text-[#c8f04d]">Apr &apos;24</div>
                <div className="text-white/40 text-xs mt-1">Otodidak</div>
              </div>
              <div className="bg-[#111] border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-colors">
                <div className="text-white/40 text-xs mb-1">Fokus utama</div>
                <div className="font-[Syne,sans-serif] text-2xl font-bold">Frontend</div>
                <div className="text-white/40 text-xs mt-1">UI & Web Dev</div>
              </div>
            </div>

            {/* Stack card */}
            <div className="bg-[#111] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
              <div className="text-white/40 text-xs mb-3">Tech stack utama</div>
              <div className="flex flex-wrap gap-2">
                {["HTML & CSS", "JavaScript", "Tailwind CSS", "React.js", "Next.js", "Git"].map(
                  (t) => (
                    <span
                      key={t}
                      className="bg-[#c8f04d]/10 border border-[#c8f04d]/20 text-[#c8f04d] text-xs px-3 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#c8f04d]/5 border border-[#c8f04d]/15 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <div className="font-semibold text-sm">Tersedia untuk kolaborasi</div>
                <div className="text-white/40 text-xs">Freelance · Internship · Project</div>
              </div>
              <span className="text-[#c8f04d] text-xl">✓</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#c8f04d] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
