"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { Mail, Globe, MessageCircle, Send, Code2 } from "lucide-react";
import { contact } from "@/data/portfolio";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconMap: Record<string, typeof Mail> = {
  github: Code2,
  linkedin: Globe,
  twitter: MessageCircle,
  email: Mail,
};

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-accent/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-accent-2/8 to-transparent rounded-full blur-3xl" />

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
          {contact.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-primary font-heading mb-3"
        >
          {contact.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-text-muted mb-12 max-w-lg"
        >
          {contact.description}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            variants={fadeUp}
            className="glass rounded-xl p-6 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface/50 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface/50 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface/50 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface/50 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-white text-sm font-medium shadow-md shadow-accent/20 hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>

          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="text-sm text-text-muted mb-2">
              Or find me on these platforms:
            </p>
            {contact.social.map((s) => {
              const Icon = iconMap[s.icon] || Mail;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl flex items-center gap-3 px-4 py-3 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                    {s.name}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
