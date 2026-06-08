'use client';

import { ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  index: number;
}

function ProjectCard({ title, description, imageUrl, projectUrl, tags, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-blue-500/20 transition-all duration-700"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

      <div className="relative flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-2/5 shrink-0">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden bg-zinc-900">
              <motion.img
                src={imageUrl}
                alt={`Preview do projeto ${title}`}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e13]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <motion.span
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/90 text-white text-sm font-medium rounded-xl backdrop-blur-sm shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink size={14} />
                  Ver ao vivo
                </motion.span>
              </motion.div>
            </div>
          </a>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Star size={14} className="text-yellow-400" />
            <span className="text-xs text-zinc-500">Projeto destaque</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
            {title}
          </h3>

          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}

          <motion.a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors group/link pt-2 w-fit"
            whileHover={{ x: 4 }}
          >
            Ver projeto ao vivo
            <ExternalLink className="w-3.5 h-3.5 group-hover/link:rotate-12 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function StackPag() {
  return (
    <div className="space-y-8">
      <ProjectCard
        index={0}
        title="Sistema de Gerenciamento de Biblioteca"
        description="Sistema de gerenciamento desenvolvido individualmente, utilizando Java no backend e Vite no frontend. Aplicou conceitos de estrutura de dados, modelagem, regras de negócio, Design Patterns e DDD. Implementação de autenticação e controle de acesso."
        imageUrl="/image_site.png"
        projectUrl="https://biblioteca01s-8x8z.vercel.app/"
        tags={["Node", "JWT", "Vercel", "Vite", "DDD", "Security", "REST API"]}
      />
    </div>
  );
}
