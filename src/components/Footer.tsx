"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { footer } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative border-t border-border py-8 px-4"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">{footer.text}</p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-lg glass flex items-center justify-center text-text-muted hover:text-accent transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.footer>
  );
}
