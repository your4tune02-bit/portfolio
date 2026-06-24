"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map((l) => document.getElementById(l.href.slice(1)));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setActive(links[i].href);
          return;
        }
      }
      setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className={`transition-all duration-300 ${scrolled ? "glass-strong" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-primary tracking-tight">
            <span className="text-accent">.</span>portfolio
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  active === l.href
                    ? "text-accent"
                    : "text-text-muted hover:text-accent"
                }`}
              >
                {l.label}
              </a>
            ))}
            <motion.button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-surface-alt/50 transition-colors"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark"
                ? <Sun className="w-4 h-4 text-text-muted" />
                : <Moon className="w-4 h-4 text-text-muted" />
              }
            </motion.button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-surface-alt/50 transition-colors"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark"
                ? <Sun className="w-4 h-4 text-text-muted" />
                : <Moon className="w-4 h-4 text-text-muted" />
              }
            </motion.button>
            <motion.button
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-surface-alt/50 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5 text-text" /> : <Menu className="w-5 h-5 text-text" />}
            </motion.button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors py-1 ${
                    active === l.href
                      ? "text-accent"
                      : "text-text-muted hover:text-accent"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
