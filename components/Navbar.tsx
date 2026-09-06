"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { label: "Manifeste",         href: "/manifeste" },
  { label: "Testament Éthique", href: "/testament-ethique" },
  { label: "Charte",            href: "/charte" },
  { label: "Contact",           href: "/contact" },
] as const;

const overlayVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const linkItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-blanc/90 backdrop-blur-md border-b border-bordure shadow-[0_1px_20px_rgba(27,45,79,0.06)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav
          className="mx-auto max-w-7xl px-6 lg:px-10"
          aria-label="Navigation principale"
        >
          <div className="flex items-center justify-between h-20">
            <Logo />

            <ul className="hidden md:flex items-center gap-8" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "text-sm tracking-[0.08em] text-texte-muted",
                      "hover:text-marine transition-colors duration-300",
                      "font-sans",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex">
              <Link
                href="/manifeste"
                className={[
                  "bg-marine text-blanc text-xs tracking-[0.12em] uppercase font-medium",
                  "px-5 py-2.5 font-sans rounded-md",
                  "hover:bg-marine-clair",
                  "shadow-[0_2px_12px_rgba(27,45,79,0.15)]",
                  "transition-all duration-300",
                  "hover:-translate-y-px",
                ].join(" ")}
              >
                Lire le Manifeste
              </Link>
            </div>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden text-texte-muted hover:text-marine transition-colors duration-300 p-1"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation mobile"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 top-20 z-40 bg-blanc/95 backdrop-blur-md"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-marine/15 to-transparent" />

            <div className="flex flex-col px-8 pt-10 pb-12 h-full">
              <ul role="list" className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={linkItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={[
                        "block py-5 font-serif text-2xl text-marine/80",
                        "hover:text-marine hover:pl-2",
                        "border-b border-bordure",
                        "transition-all duration-300",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                custom={NAV_LINKS.length}
                variants={linkItemVariants}
                initial="hidden"
                animate="visible"
                className="mt-10"
              >
                <Link
                  href="/manifeste"
                  onClick={() => setIsOpen(false)}
                  className={[
                    "inline-block bg-marine text-blanc font-medium",
                    "text-sm tracking-[0.12em] uppercase font-sans rounded-md",
                    "px-7 py-3.5",
                    "hover:bg-marine-clair",
                    "transition-all duration-300",
                  ].join(" ")}
                >
                  Lire le Manifeste
                </Link>
              </motion.div>

              <p className="mt-auto pt-8 text-xs tracking-widest text-texte-leger uppercase font-sans">
                © {new Date().getFullYear()} Patrimoine-Cognitif.fr
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
