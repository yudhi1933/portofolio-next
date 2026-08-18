"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = "";

      for (const link of links) {
        const id = link.href.replace("#", "");
        const section = document.getElementById(id);

        if (!section) continue;

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      }

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll ketika mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigation = () => {
    setOpen(false);
  };

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
            whileHover={{ scale: 1.05 }}
            className="font-[Syne,sans-serif] text-lg sm:text-xl font-bold tracking-tight"
          >
            Yudhi
            <span className="text-[#c8f04d]">.</span>
          </motion.a>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-300 group ${
                      isActive
                        ? "text-[#c8f04d]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#c8f04d] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
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
              animate={open ? { opacity: 0 } : { opacity: 1 }}
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
                {links.map((link, index) => {
                  const id = link.href.replace("#", "");
                  const isActive = active === id;

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                      }}
                      onClick={handleNavigation}
                      className={`font-[Syne,sans-serif] text-3xl sm:text-4xl font-bold transition-colors ${
                        isActive
                          ? "text-[#c8f04d]"
                          : "text-white hover:text-[#c8f04d]"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}