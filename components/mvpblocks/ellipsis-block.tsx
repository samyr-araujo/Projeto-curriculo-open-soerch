'use client';

import { motion } from 'framer-motion';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function EllipsisBlock() {
  const [status, setStatus] = useState<'idle' | 'copied'>('idle');

  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => setStatus('idle'), 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleClick = () => {
    setStatus('copied');
  };

  const icons = {
    idle: <Clipboard strokeWidth={2} size={14} />,
    copied: <ClipboardCheck strokeWidth={2} className="text-green-400" size={14} />,
  };

  return (
    <motion.div
      className="w-full max-w-lg"
      initial={{ opacity: 0, rotateY: -10 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      whileHover={{ scale: 1.02, rotateY: 2 }}
      style={{ perspective: 1000 }}
    >
      <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/10 transition-shadow duration-500">
        {/* Terminal header */}
        <div className="flex items-center justify-between bg-zinc-900/80 px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="h-3 w-3 rounded-full bg-red-500/80"
            />
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="h-3 w-3 rounded-full bg-yellow-500/80"
            />
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="h-3 w-3 rounded-full bg-green-500/80"
            />
          </div>
          <p className="text-xs text-zinc-500 font-mono">developer.tsx</p>
          <button
            aria-label="Copy"
            onClick={handleClick}
            className="rounded-md p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors"
          >
            <motion.div
              key={status}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {icons[status]}
            </motion.div>
          </button>
        </div>

        {/* Code content with line numbers */}
        <div className="overflow-x-auto bg-[#0d1117] p-5 text-[13px] leading-7 font-mono flex">
          {/* Line numbers */}
          <div className="select-none text-zinc-600 text-right pr-4 border-r border-white/5 mr-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code */}
          <pre className="flex-1">
            <code>
              <span className="text-purple-400">class</span>{' '}
              <span className="text-yellow-300">Developer</span>{' '}
              <span className="text-zinc-500">{'{'}</span>
              {'\n'}
              {'  '}
              <span className="text-blue-300">name</span>{' '}
              <span className="text-zinc-500">=</span>{' '}
              <span className="text-green-400">&quot;Samyr Araujo&quot;</span>;
              {'\n'}
              {'  '}
              <span className="text-blue-300">stack</span>{' '}
              <span className="text-zinc-500">=</span>{' '}
              <span className="text-green-400">&quot;TS | Node | React | Next&quot;</span>;
              {'\n'}
              {'  '}
              <span className="text-blue-300">mindset</span>{' '}
              <span className="text-zinc-500">=</span>{' '}
              <span className="text-green-400">&quot;Always Learning&quot;</span>;
              {'\n'}
              {'  '}
              <span className="text-blue-300">work</span>{' '}
              <span className="text-zinc-500">=</span>{' '}
              <span className="text-green-400">&quot;ISGH - Hospital Regional&quot;</span>;
              {'\n'}
              {'\n'}
              {'  '}
              <span className="text-purple-400">code</span>() {'{'}
              {'\n'}
              {'    '}
              <span className="text-purple-400">while</span> (
              <span className="text-orange-300">true</span>) {'{'}
              {'\n'}
              {'      '}
              <span className="text-blue-300">learn</span>();
              {'\n'}
              {'      '}
              <span className="text-blue-300">build</span>();
              {'\n'}
              {'      '}
              <span className="text-blue-300">evolve</span>();
              {'\n'}
              {'    '}{'}'}
              {'\n'}
              {'  '}{'}'}
            </code>
          </pre>
        </div>

        {/* Terminal status bar */}
        <div className="flex items-center justify-between bg-zinc-900/50 px-4 py-1.5 border-t border-white/5 text-[10px] text-zinc-600">
          <span>TypeScript</span>
          <span>UTF-8</span>
          <span className="text-green-500">● Connected</span>
        </div>
      </div>
    </motion.div>
  );
}
