// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";

// const highlights = [
//   { n: "1+", l: "Tahun belajar mandiri" },
//   { n: "2024", l: "Lulus Salafiyah Al Khusna" },
//   { n: "Now", l: "Aktif magang" },
//   { n: "2026", l: "Kuliah S1 Universitas Terbuka" },
// ];

// export default function About() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="about" className="py-20 md:py-32 relative overflow-hidden">
//       {/* subtle bg */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-1/2 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

//         <div className="absolute bottom-0 left-0 w-1/2 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
//       </div>

//       <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
//         {/* LABEL */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 text-[#c8f04d] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4"
//         >
//           <span className="w-6 sm:w-8 h-px bg-[#c8f04d]" />
//           Tentang Saya
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* LEFT */}
//           <div className="space-y-6 md:space-y-8">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="font-[Syne,sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
//             >
//               Saya percaya <em className="text-[#c8f04d] not-italic">ketekunan</em>
//               <br />
//               adalah guru terbaik.
//             </motion.h2>

//             <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-4 text-white/60 leading-relaxed text-sm sm:text-base">
//               <p>
//                 Halo! Saya seorang <strong className="text-white">Frontend Developer</strong> yang memulai perjalanan coding secara <strong className="text-white">otodidak sejak April 2024</strong>. Tanpa background IT formal, saya belajar
//                 dari dokumentasi, tutorial, dan banyak trial & error — dan itu justru membuat saya semakin cinta dengan dunia web development.
//               </p>

//               <p>
//                 Saya lulusan <strong className="text-white">Paket C (setara SMA) dari Salafiyah Al Khusna tahun 2024</strong>. Jalur pendidikan yang tidak konvensional ini mengajarkan saya untuk mandiri, tidak mudah menyerah, dan terus
//                 belajar tanpa batas.
//               </p>

//               <p>
//                 Kini saya menjalani <strong className="text-white">magang di PT. Data Andalan Utama</strong> sekaligus aktif sebagai <strong className="text-white">mahasiswa S1 Sistem Informasi di Universitas Terbuka</strong> sejak 11 Mei
//                 2026.
//               </p>
//             </motion.div>

//             {/* HIGHLIGHTS */}
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="grid grid-cols-2 gap-3 sm:gap-4">
//               {highlights.map((h, i) => (
//                 <motion.div
//                   key={h.l}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={inView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{
//                     delay: 0.4 + i * 0.07,
//                     duration: 0.5,
//                   }}
//                   className="bg-[#111] border border-white/8 rounded-xl p-4 hover:border-[#c8f04d]/30 hover:bg-[#c8f04d]/3 transition-all group"
//                 >
//                   <div className="font-[Syne,sans-serif] text-xl sm:text-2xl font-bold text-[#c8f04d] group-hover:scale-110 transition-transform inline-block">{h.n}</div>

//                   <div className="text-white/50 text-[11px] sm:text-xs mt-1">{h.l}</div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
//               <a href="#contact" className="inline-flex items-center gap-2 text-[#c8f04d] text-sm font-semibold group">
//                 Hubungi saya
//                 <span className="group-hover:translate-x-2 transition-transform">→</span>
//               </a>
//             </motion.div>
//           </div>

//           {/* RIGHT */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{
//               duration: 0.9,
//               delay: 0.15,
//               ease: [0.23, 1, 0.32, 1],
//             }}
//             className="relative"
//           >
//             <div className="relative max-w-md mx-auto lg:max-w-none">
//               <div className="aspect-[4/5] relative rounded-3xl bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/8 overflow-hidden">
//                 {/* pattern */}
//                 <div
//                   className="absolute inset-0 opacity-10 z-0"
//                   style={{
//                     backgroundImage: `
//                     radial-gradient(circle at 30% 40%, #c8f04d 0%, transparent 50%),
//                     radial-gradient(circle at 70% 70%, #c8f04d 0%, transparent 40%)
//                   `,
//                   }}
//                 />

//                 <Image src="/images/profile.jpeg" fill className="object-cover z-10" alt="Yudhi" />
//               </div>

//               {/* BADGE */}
//               <motion.div
//                 animate={{ y: [-6, 6, -6] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 4,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 z-20 bg-[#c8f04d] text-[#0a0a0a] rounded-2xl p-3 sm:p-4 shadow-2xl"
//               >
//                 <div className="text-[10px] sm:text-xs font-bold">🏢 Tempat Magang</div>

//                 <div className="font-[Syne,sans-serif] font-bold text-xs sm:text-sm mt-0.5">PT. Data Andalan Utama</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started Coding",
    description: "Memulai perjalanan programming secara otodidak.",
  },
  {
    year: "2025",
    title: "Frontend Development",
    description: "Fokus membangun interface dan aplikasi web modern.",
  },
  {
    year: "2026",
    title: "Internship & University",
    description: "Mengembangkan pengalaman profesional sekaligus menempuh S1 Sistem Informasi.",
  },
];

const highlights = [
  {
    value: "2+",
    label: "Tahun belajar & berkembang",
  },
  {
    value: "2024",
    label: "Mulai belajar programming",
  },
  {
    value: "Now",
    label: "Frontend Developer Intern",
  },
  {
    value: "S1",
    label: "Sistem Informasi",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-px w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="absolute bottom-0 left-0 h-px w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#c8f04d]/3 blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl px-4 sm:px-6"
      >
        {/* Section label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8f04d] sm:text-xs"
        >
          <span className="h-px w-6 bg-[#c8f04d] sm:w-8" />

          Tentang Saya
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* LEFT */}
          <div className="space-y-7 md:space-y-8">
            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-2xl font-[Syne,sans-serif] text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Saya percaya{" "}
              <em className="not-italic text-[#c8f04d]">
                ketekunan
              </em>{" "}
              adalah guru terbaik.
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="max-w-2xl space-y-5 text-sm leading-7 text-white/55 sm:text-base"
            >
              <p>
                Saya memulai perjalanan di dunia programming
                secara <strong className="text-white">otodidak</strong>{" "}
                pada April 2024. Dari mempelajari dasar web
                hingga membangun aplikasi dengan teknologi modern,
                saya terus berkembang melalui project, eksperimen,
                dan pengalaman nyata.
              </p>

              <p>
                Saat ini saya fokus sebagai{" "}
                <strong className="text-white">
                  Frontend Developer
                </strong>{" "}
                dan sedang menjalani internship di{" "}
                <strong className="text-white">
                  PT. Data Andalan Utama
                </strong>
                .
              </p>

              <p>
                Di saat yang sama, saya sedang menempuh pendidikan{" "}
                <strong className="text-white">
                  S1 Sistem Informasi
                </strong>{" "}
                di Universitas Terbuka. Bagi saya, belajar
                programming bukan hanya tentang menulis kode,
                tetapi juga tentang terus memahami, membangun,
                dan menjadi lebih baik dari sebelumnya.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/8 py-6 sm:grid-cols-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.08,
                  }}
                >
                  <div className="font-[Syne,sans-serif] text-xl font-bold text-[#c8f04d] sm:text-2xl">
                    {item.value}
                  </div>

                  <div className="mt-1 text-[11px] leading-5 text-white/35 sm:text-xs">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                delay: 0.7,
              }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#c8f04d]"
              >
                Hubungi saya

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT - JOURNEY */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative"
          >
            <div className="mb-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                My Journey
              </p>

              <h3 className="mt-2 font-[Syne,sans-serif] text-2xl font-bold text-white sm:text-3xl">
                From learning to building.
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute bottom-4 left-[7px] top-4 w-px bg-white/10" />

              <div className="space-y-8">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.12,
                    }}
                    className="relative flex gap-6"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#c8f04d]/40 bg-[#0a0a0a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c8f04d] shadow-[0_0_8px_#c8f04d]" />
                    </div>

                    {/* Content */}
                    <div className="pb-1">
                      <div className="mb-1 flex items-center gap-3">
                        <span className="font-[Syne,sans-serif] text-sm font-bold text-[#c8f04d]">
                          {item.year}
                        </span>

                        {index === journey.length - 1 && (
                          <span className="rounded-full border border-[#c8f04d]/20 bg-[#c8f04d]/5 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#c8f04d]">
                            Current
                          </span>
                        )}
                      </div>

                      <h4 className="font-[Syne,sans-serif] text-lg font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 max-w-md text-sm leading-6 text-white/40">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current focus */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="mt-10 border-t border-white/8 pt-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                    Current Focus
                  </p>

                  <p className="mt-2 text-sm font-medium text-white/80">
                    Building better web experiences.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8f04d]/20 bg-[#c8f04d]/5">
                  <span className="h-2 w-2 rounded-full bg-[#c8f04d] shadow-[0_0_12px_#c8f04d]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
