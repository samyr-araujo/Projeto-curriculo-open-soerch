'use client';

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function LoGOTIP() {
  return (
    <div className="relative group">
      {/* Animated glow ring */}
      <motion.div
        className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-500/20 blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Spinning border */}
      <motion.div
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Avatar */}
      <Avatar className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 ring-2 ring-white/10 shadow-2xl shadow-blue-500/20">
        <AvatarImage
          src="/samyrimage.jpeg"
          alt="Foto de Samyr Araujo"
          className="object-cover"
        />
      </Avatar>

      {/* Status indicator */}
      <motion.div
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a0e13]/90 border border-white/10 px-3 py-1.5 backdrop-blur-sm"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        <span className="text-xs text-zinc-400">Disponível</span>
      </motion.div>
    </div>
  );
}
