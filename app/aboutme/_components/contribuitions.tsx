import { ExternalLink } from 'lucide-react';
interface values {
  title: string,
  description: string,
  imageUrl: string ,
  projectUrl: string ,
  tags: string[]
}
// Componente reutilizável para cards de projeto
function ProjectCard({ title, description, imageUrl, projectUrl, tags }: values) {
  return (
    <article className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl mb-10 ">
      <div className="flex flex-col lg:flex-row gap-6 p-6 md:p-8">
        {/* Coluna de texto */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h2>
          
          <p className="text-slate-300 leading-relaxed text-justify">
            {description}
          </p>

          {/* Tags de tecnologias */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Link para o projeto */}
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group"
          >
            Ver projeto ao vivo
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Coluna da imagem */}
        <div className="lg:w-2/5 flex-shrink-0">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
              <img
                src={imageUrl}
                alt={`Preview do projeto ${title}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
    </article>
  );
}
// Componente principal da página
export default function StackPag() {
  return (
   
      <div className="max-w-6xl mx-auto">
       

        <div className="space-y-12">
          <ProjectCard
            title="Sistema de Gerenciamento de Biblioteca"
            description="Sistema de gerenciamento de biblioteca desenvolvido individualmente, utilizando Java no backend e Vite no frontend. O projeto aplicou conceitos de estrutura de dados, modelagem de dados e regras de negócio, além do uso de Design Patterns e princípios de Domain-Driven Design (DDD). Foram implementadas boas práticas de segurança, incluindo autenticação e controle de acesso. A aplicação foi estruturada com foco em organização, escalabilidade e código limpo."
            imageUrl="/image_site.png"
            projectUrl="https://biblioteca01s-8x8z.vercel.app/"
            tags={["Node", "JWT" , "Vercel" ,  "Vite", "DDD", "Security", "REST API"]}
          />
          
          {/* Adicione mais projetos aqui seguindo o mesmo padrão */}
        </div>
      </div>
   
  );
}
