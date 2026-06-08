'use client';

import { Code2, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function InfoMe() {
  return (
    <motion.div
      className="w-full lg:max-w-xl space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Section label */}
      <motion.div variants={item}>
        <p className="text-blue-400 font-mono text-sm mb-2">// sobre mim</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Sobre Mim
        </h1>
      </motion.div>

      {/* Bio */}
      <motion.p variants={item} className="text-zinc-400 leading-relaxed">
        Meu nome é Samyr, tenho 18 anos e sou um desenvolvedor
        apaixonado por tecnologia e inovação. Desde jovem, sempre tive um
        fascínio por computadores e programação, o que me levou a seguir uma
        carreira na área de desenvolvimento de software.
      </motion.p>

      <motion.p variants={item} className="text-zinc-400 leading-relaxed">
        Atualmente trabalho no <span className="text-white font-medium">ISGH - Hospital Regional de Itapipoca</span> e 
        estou em constante aprendizado, buscando sempre evoluir como profissional.
        Tenho experiência com{" "}
        <span className="text-blue-300 font-medium">
          React, Next.js, Node.js, TypeScript, Docker, AWS, microserviços e TailwindCSS.
        </span>
      </motion.p>

      {/* Info cards */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <motion.div
          whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.3)" }}
          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
            <MapPin size={18} className="text-blue-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Local</p>
            <p className="text-sm text-zinc-200 font-medium">Itapipoca, CE</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.3)" }}
          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
            <Briefcase size={18} className="text-green-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Trabalho</p>
            <p className="text-sm text-zinc-200 font-medium">ISGH</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.3)" }}
          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
            <GraduationCap size={18} className="text-purple-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Status</p>
            <p className="text-sm text-zinc-200 font-medium">Aprendendo sempre</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.3)" }}
          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <Code2 size={18} className="text-cyan-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Foco</p>
            <p className="text-sm text-zinc-200 font-medium">Full Stack</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Tech stack */}
      <motion.div variants={item} className="pt-4">
        <p className="text-sm text-zinc-500 mb-3">Stack principal</p>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "Docker",
            "AWS",
            "PostgreSQL",
            "TailwindCSS",
            "Java",
            "Git",
          ].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full cursor-default hover:bg-blue-500/20 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
