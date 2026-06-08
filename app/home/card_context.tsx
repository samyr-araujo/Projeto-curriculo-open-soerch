'use client';

import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function CardContact() {
  return (
    <motion.div
      className="flex flex-wrap items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {/* Download CV */}
      <a
        href="/curriculo.pdf"
        download="Samyr_Araujo_Curriculo_FullStack.pdf"
        className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Download size={16} className="relative z-10" />
        <span className="relative z-10">Download CV</span>
      </a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/samyr-araujo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
        aria-label="GitHub"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Github size={18} />
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/samyr-araujo-do-vale-7b4b621b4/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all"
        aria-label="LinkedIn"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Linkedin size={18} />
      </motion.a>

      {/* Email */}
      <motion.a
        href="mailto:samyraraujo46@gmail.com"
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/10 transition-all"
        aria-label="Email"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail size={18} />
      </motion.a>
    </motion.div>
  );
}
