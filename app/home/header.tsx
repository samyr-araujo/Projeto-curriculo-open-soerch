"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function HeaderModel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(10, 14, 19, 0.5)', 'rgba(10, 14, 19, 0.95)']);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ backgroundColor: headerBg }}
      className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 shadow-lg shadow-black/20' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/home" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: 12, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl text-white font-bold text-sm overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 animate-gradient" />
            <span className="relative z-10">S</span>
          </motion.span>
          <span className="text-lg font-semibold text-zinc-100 font-mono tracking-tight">
            samyr<span className="text-blue-400">.dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "/home", label: "Home" },
            { href: "/aboutme", label: "Sobre mim" },
            { href: "/contact", label: "Contato" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg transition-all group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:w-4/5 transition-all duration-300" />
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              Fale comigo
            </Link>
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9, rotate: 90 }}
          className="md:hidden text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-white/5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, height: "auto", filter: 'blur(0px)' }}
            exit={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/5 bg-[#0a0e13]/98 backdrop-blur-xl px-6 py-5 flex flex-col gap-2 overflow-hidden"
          >
            {[
              { href: "/home", label: "Home" },
              { href: "/aboutme", label: "Sobre mim" },
              { href: "/contact", label: "Contato" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-zinc-300 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-center transition-all shadow-lg"
              >
                Fale comigo
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
