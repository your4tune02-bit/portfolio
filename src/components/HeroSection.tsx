"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { hero } from "@/data/portfolio";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent-2/15 via-accent-2/5 to-transparent blur-3xl animate-blob-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/5 via-purple-500/5 to-accent-2/5 blur-3xl animate-blob-3" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Subtle radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-b from-accent/8 to-transparent blur-[100px] rounded-full" />

      {/* Floating decorative orbs */}
      <motion.div
        className="absolute top-32 left-[15%] w-2 h-2 rounded-full bg-accent-light/40 shadow-lg shadow-accent/20"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-[20%] w-3 h-3 rounded-full bg-accent-2-light/30 shadow-lg shadow-accent-2/20"
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-[12%] w-1.5 h-1.5 rounded-full bg-accent/30"
        animate={{ y: [0, -12, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-4 h-4 rounded-full bg-accent/10 blur-sm"
        animate={{ y: [0, 18, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full border border-accent/20"
          >
            <Sparkles className="w-3 h-3" />
            {hero.greeting}
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 tracking-tight"
        >
          {hero.name.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.03, duration: 0.4, ease: "easeOut" }}
              className={ch === " " ? "" : "inline-block"}
              style={ch === " " ? { width: "0.3em" } : undefined}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-muted mb-3 max-w-lg mx-auto leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-8 flex items-center justify-center"
        >
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-accent font-medium tracking-wide"
          >
            {hero.roles[roleIndex]}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          <motion.a
            href={hero.cta.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-medium shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all"
          >
            {hero.cta.label}
            <ArrowDown className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={hero.secondaryCta.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card text-text-muted text-sm font-medium border border-border hover:border-accent/30 hover:text-accent transition-all"
          >
            {hero.secondaryCta.label}
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="text-text-muted hover:text-accent transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
