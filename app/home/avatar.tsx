'use client';

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function LoGOTIP() {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Animated gradient ring */}
      <motion.div
        className="absolute -inset-3 rounded-full opacity-60"
        style={{
          background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glow pulse */}
      <motion.div
        className="absolute -inset-6 rounded-full bg-blue-500/20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Inner dark ring */}
      <div className="absolute -inset-1 rounded-full bg-[#0a0e13]" />

      {/* Avatar */}
      <Avatar className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-2xl shadow-blue-500/20">
        <AvatarImage
          src="/samyrimage.jpeg"
          alt="Foto de Samyr Araujo"
          className="object-cover"
        />
      </Avatar>

      {/* Floating badges */}
      <motion.div
        className="absolute -top-2 -right-2 flex items-center gap-1.5 rounded-full bg-[#0a0e13] border border-white/10 px-3 py-1.5 shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      >
        <span className="text-xs">🇧🇷</span>
        <span className="text-[10px] text-zinc-400 font-medium">Brasil</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-1 -left-2 flex items-center gap-1.5 rounded-full bg-[#0a0e13] border border-green-500/20 px-3 py-1.5 shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        <span className="text-[10px] text-green-300 font-medium">Online</span>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-6 flex items-center gap-1.5 rounded-full bg-[#0a0e13] border border-blue-500/20 px-3 py-1.5 shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xs">💼</span>
        <span className="text-[10px] text-blue-300 font-medium">ISGH</span>
      </motion.div>
    </motion.div>
  );
}
