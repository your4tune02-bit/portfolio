"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { TiltCard } from "./TiltCard";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const projectCovers = [
  "from-emerald-500/20 via-teal-500/10 to-transparent",
  "from-cyan-500/20 via-blue-500/10 to-transparent",
  "from-amber-500/20 via-orange-500/10 to-transparent",
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/3 via-transparent to-accent-2/3 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full"
        >
          {projects.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-primary font-heading mb-3"
        >
          {projects.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-text-muted mb-12 max-w-xl"
        >
          {projects.description}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.list.map((p, idx) => (
            <motion.div key={p.title} variants={fadeUp}>
              <TiltCard maxTilt={8}>
                <div className="group h-full rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                  <div className={`h-40 bg-gradient-to-br ${projectCovers[idx]} flex items-center justify-center border-b border-border relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="relative z-10 flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10">
                        <Code2 className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm text-white/90">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="font-bold text-primary font-heading group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2 border-t border-border">
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Live
                      </a>
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                      >
                        <Code2 className="w-3 h-3" /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
