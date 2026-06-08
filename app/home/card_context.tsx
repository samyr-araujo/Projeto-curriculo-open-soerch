'use client';

import { Download, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/animated-section";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export function CardContact() {
  return (
    <motion.div
      className="flex flex-wrap items-center gap-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Download CV - Primary */}
      <motion.div variants={item}>
        <MagneticButton>
          <a
            href="/curriculo.pdf"
            download="Samyr_Araujo_Curriculo_FullStack.pdf"
            className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/20"
          >
            {/* Animated gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 animate-gradient" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-gradient" />
            <Download size={16} className="relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download CV</span>
            <ArrowUpRight size={14} className="relative z-10 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </a>
        </MagneticButton>
      </motion.div>

      {/* GitHub */}
      <motion.div variants={item}>
        <MagneticButton>
          <a
            href="https://github.com/samyr-araujo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-white/5"
            aria-label="GitHub"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </MagneticButton>
      </motion.div>

      {/* LinkedIn */}
      <motion.div variants={item}>
        <MagneticButton>
          <a
            href="https://www.linkedin.com/in/samyr-araujo-do-vale-7b4b621b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </MagneticButton>
      </motion.div>

      {/* Email */}
      <motion.div variants={item}>
        <MagneticButton>
          <a
            href="mailto:samyraraujo46@gmail.com"
            className="group inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/10 transition-all hover:shadow-lg hover:shadow-green-500/10"
            aria-label="Email"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </MagneticButton>
      </motion.div>
    </motion.div>
  );
}
