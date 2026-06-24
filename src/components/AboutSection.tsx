"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { Download, User } from "lucide-react";
import { about } from "@/data/portfolio";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-2/5 to-transparent rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full"
        >
          {about.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-primary font-heading mb-10"
        >
          {about.title}
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-text-muted leading-relaxed text-base md:text-lg">
                {p}
              </motion.p>
            ))}
            <motion.div variants={fadeUp}>
              <motion.a
                href={about.resumeUrl}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium shadow-md shadow-accent/20 hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent via-accent-light to-accent-2 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-surface border border-border/50 flex items-center justify-center overflow-hidden">
                <User className="w-20 h-20 text-text-muted opacity-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
