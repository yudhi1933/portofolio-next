"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = ["Frontend Developer", "React Developer"];

const TECH_STACK = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => {
        setDisplayed(target.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 45);
    } else {
      setDeleting(false);
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="font-[Syne,sans-serif] text-[#c8f04d]">
      {displayed}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = cardRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.transform = `
      perspective(800px)
      rotateY(${x * 8}deg)
      rotateX(${-y * 8}deg)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = "";
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24 md:pt-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[10%] h-52 w-52 rounded-full bg-[#c8f04d]/8 blur-3xl md:h-96 md:w-96" />

        <div className="absolute bottom-[10%] right-[5%] h-44 w-44 rounded-full bg-[#c8f04d]/5 blur-3xl md:h-80 md:w-80" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl md:h-[600px] md:w-[600px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* LEFT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-2xl space-y-7 md:space-y-8"
        >
          {/* Status */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/60">
              <span className="h-2 w-2 rounded-full bg-[#c8f04d] shadow-[0_0_10px_#c8f04d]" />

              <span>
                Intern @ PT. Data Andalan Utama
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/35">
              Hello, I&apos;m
            </p>

            <h1 className="font-[Syne,sans-serif] text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
              Yudhi
              <span className="text-[#c8f04d]">.</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            variants={fadeUp}
            className="min-h-10 text-xl font-light sm:text-2xl md:text-3xl"
          >
            <TypewriterText />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-sm leading-7 text-white/50 sm:text-base md:text-lg"
          >
            Membangun aplikasi web modern dengan React dan Next.js,
            dengan perhatian pada user experience, responsive design,
            dan maintainable code.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c8f04d] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,240,77,0.15)] active:scale-95"
            >
              <span>Lihat Proyek</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white active:scale-95"
            >
              Hubungi Saya
            </a>
          </motion.div>

          {/* Small info */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-white/35"
          >
            <span>Information Systems Student</span>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

            <span>Universitas Terbuka</span>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut" as const,
            delay: 0.2,
          }}
          className="w-full"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="transition-transform duration-150"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010]/90 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c8f04d]/10 blur-3xl" />

              <div className="relative">
                {/* Profile */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c8f04d]/20 bg-[#c8f04d]/10 font-[Syne,sans-serif] text-xl font-bold text-[#c8f04d]">
                    Y
                  </div>

                  <div>
                    <p className="font-[Syne,sans-serif] text-lg font-bold text-white">
                      Yudhi
                    </p>

                    <p className="text-sm text-white/40">
                      Frontend Developer
                    </p>
                  </div>

                  <span className="ml-auto flex items-center gap-2 text-xs text-white/40">
                    <span className="h-2 w-2 rounded-full bg-[#c8f04d] shadow-[0_0_8px_#c8f04d]" />
                    Available
                  </span>
                </div>

                {/* Divider */}
                <div className="mb-7 h-px bg-white/8" />

                {/* Intro */}
                <div className="mb-8">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/30">
                    What I do
                  </p>

                  <p className="max-w-md text-xl font-medium leading-relaxed text-white/90 md:text-2xl">
                    Turning ideas into{" "}
                    <span className="text-[#c8f04d]">
                      clean & functional
                    </span>{" "}
                    web experiences.
                  </p>
                </div>

                {/* Stack */}
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
                    Main stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 transition-colors hover:border-[#c8f04d]/30 hover:text-[#c8f04d]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5">
                  <span className="text-xs text-white/30">
                    Open for freelance & collaboration
                  </span>

                  <span className="text-lg text-[#c8f04d]">↗</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/25 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="flex h-8 w-5 justify-center rounded-full border border-white/15 pt-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-[#c8f04d]" />
        </motion.div>
      </motion.div>
    </section>
  );
}