"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { skills } from "@/data/portfolio";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-dot opacity-40" />

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
          {skills.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-primary font-heading mb-12"
        >
          {skills.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={fadeUp}
              className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">
                {cat.name}
              </h3>
              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-text font-medium">{skill.name}</span>
                      <span className="text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface-alt/50 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light relative"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-light shadow-sm shadow-accent-light/50" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
