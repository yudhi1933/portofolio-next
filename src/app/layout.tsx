import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yudhi — Frontend Developer",
  description: "Frontend developer otodidak, intern di PT. Data Andalan Utama & mahasiswa S1 Universitas Terbuka.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
