"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderModel() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0e13]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/home" className="group flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20"
          >
            S
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
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400 rounded-full group-hover:w-4/5 transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            Fale comigo
          </Link>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-zinc-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 bg-[#0a0e13]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2 overflow-hidden"
          >
            {[
              { href: "/home", label: "Home" },
              { href: "/aboutme", label: "Sobre mim" },
              { href: "/contact", label: "Contato" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 px-4 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg text-center transition-all"
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
