"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/yudhi1933",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yudhi-3b1556386",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yud_yudhi21",
    icon: FaInstagram,
  },
];

const navigation = [
  ["Tentang Saya", "#about"],
  ["Skills", "#skills"],
  ["Proyek", "#projects"],
  ["Kontak", "#contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* MAIN */}
        <div className="grid gap-10 py-12 md:grid-cols-[1fr_auto] md:py-16">
          {/* BRAND */}
          <div>
            <motion.a
              href="#hero"
              whileHover={{ x: 2 }}
              className="mb-5 inline-block font-[Syne,sans-serif] text-2xl font-bold"
            >
              Yudhi<span className="text-[#c8f04d]">.</span>
            </motion.a>

            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8f04d] animate-pulse" />

              <span className="text-sm text-white/40">
                Frontend Developer
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/35">
              Membangun pengalaman web yang modern, responsif, dan mudah
              dikembangkan.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/40 transition-colors duration-300 hover:border-[#c8f04d]/30 hover:text-[#c8f04d]"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="md:min-w-40">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/30">
              Navigasi
            </h4>

            <nav className="flex flex-col gap-3">
              {navigation.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-sm text-white/45 transition-colors duration-300 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 border-t border-white/5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            © 2026{" "}
            <span className="text-white/40">
              Yudhi
            </span>
            . All rights reserved.
          </p>

          <p className="text-xs text-white/20">
            Frontend Developer · Indonesia
          </p>

          <a
            href="#hero"
            aria-label="Kembali ke atas"
            className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/30 transition-all duration-300 hover:border-[#c8f04d]/30 hover:text-[#c8f04d]"
          >
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
