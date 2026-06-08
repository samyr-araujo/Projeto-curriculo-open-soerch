'use client';

import { Github, Linkedin, Mail, MapPin, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
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
        className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-5 hover:border-white/10 transition-colors"
      >
        <h3 className="text-white font-semibold text-lg">Informações</h3>

        <div className="space-y-4">
          <motion.a
            whileHover={{ x: 4 }}
            href="mailto:samyraraujo46@gmail.com"
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
              <Mail size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Email</p>
              <p className="text-sm">samyraraujo46@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ x: 4 }}
            href="https://github.com/samyr-araujo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
              <Github size={16} />
            </div>
            <div>
              <p className="text-xs text-zinc-500">GitHub</p>
              <p className="text-sm">github.com/samyr-araujo</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ x: 4 }}
            href="https://www.linkedin.com/in/samyr-araujo-do-vale-7b4b621b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
              <Linkedin size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">LinkedIn</p>
              <p className="text-sm">samyr-araujo</p>
            </div>
          </motion.a>

          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 text-zinc-400"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
              <MapPin size={16} className="text-green-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Localização</p>
              <p className="text-sm">Itapipoca, CE - Brasil</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 text-zinc-400"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10">
              <Building2 size={16} className="text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Trabalho atual</p>
              <p className="text-sm">ISGH - Hospital Regional</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Availability badge */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.02 }}
        className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 flex items-center gap-3"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
        </span>
        <p className="text-sm text-green-300">
          Disponível para novas oportunidades
        </p>
      </motion.div>
    </motion.div>
  );
}
