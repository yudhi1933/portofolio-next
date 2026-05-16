"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        "service_3euixo5",
        "template_dlwhq47",
        { name: form.name, email: form.email, subject: form.subject, message: form.message },
        "Vu3aNTkX8IANoHdUJ"
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-[#c8f04d]/50 focus:bg-[#141414] transition-all text-sm";

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 text-[#c8f04d] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          <span className="w-8 h-px bg-[#c8f04d]" />
          Kontak
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-[Syne,sans-serif] text-5xl md:text-6xl font-bold mb-6">
              Punya ide?<br />
              <em className="text-[#c8f04d] not-italic">Ayo ngobrol.</em>
            </h2>
            <p className="text-white/50 leading-relaxed mb-12 max-w-md">
              Saya terbuka untuk peluang kolaborasi, proyek freelance, atau sekadar diskusi
              seputar web development. Biasanya balas dalam 24 jam.
            </p>

            {/* Contact links */}
            {[
              { label: "Email", value: "yudhiyudhitok@gmail.com", href: "mailto:yudhiyudhitok@gmail.com", icon: "✉️" },
              { label: "GitHub", value: "github.com/yudhi1933", href: "https://github.com/yudhi1933", icon: "🐙" },
              { label: "LinkedIn", value: "linkedin.com/in/yudhi-3b1556386", href: "https://linkedin.com/in/yudhi-3b1556386", icon: "💼" },
              { label: "Instagram", value: "@yud_yudhi21", href: "https://instagram.com/yud_yudhi21", icon: "📸" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/6 hover:border-white/15 hover:bg-white/3 transition-all group mb-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111] border border-white/8 flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-white/35 text-xs">{item.label}</div>
                  <div className="text-white/80 text-sm group-hover:text-[#c8f04d] transition-colors truncate">
                    {item.value}
                  </div>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-[#c8f04d] group-hover:translate-x-1 transition-all">→</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-[#111] border border-white/8 rounded-2xl p-8">
              <h3 className="font-[Syne,sans-serif] text-xl font-bold mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">Nama</label>
                    <input
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
                    <label className="block text-xs text-white/40 mb-1.5">Email</label>
                    <input
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
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Perihal</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Topik pembicaraan?"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Pesan</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Ceritakan ide atau kebutuhan Anda..."
                    className={inputClass + " resize-none"}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    status === "sent"
                      ? "bg-green-500 text-white"
                      : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#c8f04d] text-[#0a0a0a] hover:bg-[#d4f76a]"
                  }`}
                >
                  {status === "idle" && "Kirim Pesan →"}
                  {status === "sending" && "Mengirim..."}
                  {status === "sent" && "✓ Pesan Terkirim!"}
                  {status === "error" && "Gagal Kirim. Coba lagi."}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
