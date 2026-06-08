'use client';

import { ExternalLink } from "lucide-react";
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-blue-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-2/5 flex-shrink-0">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden bg-zinc-900">
              <img
                src={imageUrl}
                alt={`Preview do projeto ${title}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-blue-600/90 text-white text-sm font-medium rounded-lg backdrop-blur-sm">
                  Ver projeto
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
            {title}
          </h3>

          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors group/link pt-2 w-fit"
          >
            Ver projeto ao vivo
            <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function StackPag() {
  return (
    <div className="space-y-6">
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
