"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Perjalanan" },
  { href: "#projects", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) =>
      l.href.replace("#", "")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* lock scroll mobile menu */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.23, 1, 0.32, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <motion.a
            href="#"
            className="font-[Syne,sans-serif] text-lg sm:text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            Yudhi
            <span className="text-[#c8f04d]">
              .
            </span>
          </motion.a>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors duration-300 group ${
                    active ===
                    l.href.replace("#", "")
                      ? "text-[#c8f04d]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#c8f04d] transition-all duration-300 ${
                      active ===
                      l.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <a
            href="mailto:yudhiyudhitok@gmail.com"
            className="hidden md:flex items-center gap-2 bg-[#c8f04d] text-[#0a0a0a] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d4f76a] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Hubungi →
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={
                open
                  ? { rotate: 45, y: 8 }
                  : { rotate: 0, y: 0 }
              }
              className="w-6 h-0.5 bg-white block"
            />

            <motion.span
              animate={
                open
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="w-6 h-0.5 bg-white block"
            />

            <motion.span
              animate={
                open
                  ? { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0 }
              }
              className="w-6 h-0.5 bg-white block"
            />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
              <div className="flex flex-col items-center gap-6 sm:gap-8">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: i * 0.06,
                    }}
                    onClick={() => setOpen(false)}
                    className={`font-[Syne,sans-serif] text-3xl sm:text-4xl font-bold transition-colors ${
                      active ===
                      l.href.replace("#", "")
                        ? "text-[#c8f04d]"
                        : "text-white hover:text-[#c8f04d]"
                    }`}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="mailto:yudhiyudhitok@gmail.com"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-10 bg-[#c8f04d] text-[#0a0a0a] px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#d4f76a] transition-colors"
                onClick={() => setOpen(false)}
              >
                Hubungi →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
