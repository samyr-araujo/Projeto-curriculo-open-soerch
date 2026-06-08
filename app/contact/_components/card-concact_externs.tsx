'use client';

import { Github, Linkedin, Mail, MapPin, Building2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -30, filter: 'blur(8px)' },
  show: { opacity: 1, x: 0, filter: 'blur(0px)' },
};

export function CardContact() {
  return (
    <motion.div
      className="w-full md:w-80 space-y-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Info card */}
      <motion.div
        variants={item}
        className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-5 hover:border-white/10 transition-all duration-500 relative overflow-hidden"
      >
        {/* Card hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

        <div className="relative">
          <h3 className="text-white font-semibold text-lg">Informações</h3>

          <div className="space-y-4 mt-5">
            <motion.a
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              href="mailto:samyraraujo46@gmail.com"
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group/item"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors">
                <Mail size={16} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-zinc-500">Email</p>
                <p className="text-sm">samyraraujo46@gmail.com</p>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-blue-400" />
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              href="https://github.com/samyr-araujo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group/item"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 group-hover/item:bg-white/10 transition-colors">
                <Github size={16} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-zinc-500">GitHub</p>
                <p className="text-sm">github.com/samyr-araujo</p>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              href="https://www.linkedin.com/in/samyr-araujo-do-vale-7b4b621b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group/item"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors">
                <Linkedin size={16} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-zinc-500">LinkedIn</p>
                <p className="text-sm">samyr-araujo</p>
              </div>
              <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-blue-400" />
            </motion.a>

            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 text-zinc-400"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                <MapPin size={16} className="text-green-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Localização</p>
                <p className="text-sm">Itapipoca, CE - Brasil</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 text-zinc-400"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                <Building2 size={16} className="text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Trabalho atual</p>
                <p className="text-sm">ISGH - Hospital Regional</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Availability badge */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.02 }}
        className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/5 to-emerald-500/5 p-4 flex items-center gap-3"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <div>
          <p className="text-sm text-green-300 font-medium">Disponível para oportunidades</p>
          <p className="text-xs text-green-400/60">Respondo em até 24h</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
