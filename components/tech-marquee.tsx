'use client';

import { motion } from 'framer-motion';

const techs = [
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'TailwindCSS', icon: 'devicon-tailwindcss-original' },
  { name: 'Java', icon: 'devicon-java-plain' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
  { name: 'GitHub', icon: 'devicon-github-original' },
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-10 border-y border-white/5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0e13] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0e13] to-transparent z-10" />

      <motion.div
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {[...techs, ...techs].map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 transition-colors group"
          >
            <i className={`${tech.icon} text-2xl group-hover:text-blue-400 transition-colors`} />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
