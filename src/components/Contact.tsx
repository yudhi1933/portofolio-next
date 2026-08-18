"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "yudhiyudhitok@gmail.com",
    href: "mailto:yudhiyudhitok@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/yudhi1933",
    href: "https://github.com/yudhi1933",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yudhi-3b1556386",
    href: "https://linkedin.com/in/yudhi-3b1556386",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    value: "@yud_yudhi21",
    href: "https://instagram.com/yud_yudhi21",
    icon: FaInstagram,
  },
];

type FormStatus = "idle" | "sending" | "sent" | "error";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
        "service_3euixo5",
        "template_dlwhq47",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "Vu3aNTkX8IANoHdUJ",
      );

      setStatus("sent");
      setForm(INITIAL_FORM);

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Failed to send message:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-[#c8f04d]/50 focus:bg-[#141414]";

  const isSending = status === "sending";
  const isSent = status === "sent";

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-[#c8f04d]/2 blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl px-4 sm:px-6"
      >
        {/* Label */}
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

          Contact
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.7,
            }}
          >
            {/* Heading */}
            <h2 className="mb-5 font-[Syne,sans-serif] text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
              Let&apos;s build
              <br />
              <em className="not-italic text-[#c8f04d]">
                something.
              </em>
            </h2>

            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/50 sm:text-base md:mb-12">
              Terbuka untuk peluang kerja, freelance, kolaborasi, dan project
              web development. Jika kamu punya ide atau project yang ingin
              didiskusikan, jangan ragu untuk menghubungi saya.
            </p>

            {/* Contact Links */}
            <div className="space-y-3">
              {CONTACT_LINKS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{
                      opacity: 0,
                      x: -20,
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
                      delay: 0.2 + index * 0.08,
                      duration: 0.5,
                    }}
                    className="group flex items-center gap-3 rounded-xl border border-white/6 bg-transparent p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/3 sm:gap-4"
                  >
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-[#111] text-white/50 transition-colors duration-300 group-hover:text-[#c8f04d]">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>

                    {/* Info */}
                    <div className="min-w-0">
                      <div className="mb-0.5 text-[11px] text-white/35 sm:text-xs">
                        {item.label}
                      </div>

                      <div className="truncate text-xs text-white/75 transition-colors duration-300 group-hover:text-[#c8f04d] sm:text-sm">
                        {item.value}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8f04d]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <div className="rounded-2xl border border-white/8 bg-[#111] p-5 sm:p-6 md:p-8">
              {/* Form Header */}
              <div className="mb-5 md:mb-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c8f04d]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c8f04d]">
                    Get in touch
                  </span>
                </div>

                <h3 className="font-[Syne,sans-serif] text-lg font-bold sm:text-xl">
                  Kirim pesan
                </h3>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-[11px] text-white/40 sm:text-xs"
                    >
                      Nama
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[11px] text-white/40 sm:text-xs"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@gmail.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-[11px] text-white/40 sm:text-xs"
                  >
                    Perihal
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Topik pembicaraan"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[11px] text-white/40 sm:text-xs"
                  >
                    Pesan
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Ceritakan ide atau kebutuhan Anda..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSending || isSent}
                  whileHover={{
                    scale: isSending || isSent ? 1 : 1.02,
                  }}
                  whileTap={{
                    scale: isSending || isSent ? 1 : 0.98,
                  }}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all duration-300 ${
                    status === "sent"
                      ? "bg-green-500 text-white"
                      : status === "error"
                        ? "bg-red-500 text-white"
                        : "bg-[#c8f04d] text-[#0a0a0a] hover:bg-[#d4f76a]"
                  } disabled:cursor-not-allowed disabled:opacity-80`}
                >
                  {status === "idle" && (
                    <>
                      Kirim Pesan
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}

                  {status === "sending" && "Mengirim..."}

                  {status === "sent" && "✓ Pesan Terkirim!"}

                  {status === "error" && "Gagal Mengirim. Coba Lagi."}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}