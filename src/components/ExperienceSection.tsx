"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { experience } from "@/data/portfolio";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-accent/3 to-transparent rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full"
        >
          {experience.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-primary font-heading mb-14"
        >
          {experience.title}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experience.jobs.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative md:pl-14"
              >
                <div className="hidden md:flex absolute left-[11px] top-1.5 w-[17px] h-[17px] rounded-full border-2 border-accent bg-surface z-10 items-center justify-center shadow-sm shadow-accent/20">
                  <div className="w-[5px] h-[5px] rounded-full bg-accent" />
                </div>

                <div className="glass rounded-xl p-5 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-primary font-heading">{job.role}</h3>
                      <p className="text-sm text-accent font-medium">{job.company}</p>
                    </div>
                    <span className="text-xs text-text-muted shrink-0">{job.period}</span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
