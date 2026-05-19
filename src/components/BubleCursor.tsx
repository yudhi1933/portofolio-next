"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function BubbleCursor() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Membatasi jumlah gelembung yang dibuat agar performa tetap ringan
      if (Math.random() > 0.4) return;

      const newBubble: Bubble = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 20 + 10, // Ukuran acak antara 10px - 30px
      };

      setBubbles((prev) => [...prev, newBubble]);

      // Menghapus gelembung dari state setelah animasi CSS selesai (1 detik)
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-100 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full border border-blue-400 bg-blue-200/40 backdrop-blur-sm"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            // Posisi tengah di ujung kursor dan panggil animasi CSS
            transform: "translate(-50%, -50%)",
            animation: "bubble-float 1s ease-out forwards",
          }}
        />
      ))}
      
      {/* Inject CSS Animasi langsung di dalam komponen */}
      <style>{`
        @keyframes bubble-float {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -200%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}