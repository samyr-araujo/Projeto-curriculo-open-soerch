import EllipsisBlock from "@/components/mvpblocks/ellipsis-block";
import { InfoMe } from "./_components/info_me";
import StackPag from "./_components/contribuitions";
import { AnimatedItem } from "@/components/animated-section";

export default function StackPage() {
  return (
    <div className="py-16">
      {/* About section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <InfoMe />
          <AnimatedItem delay={0.3} className="w-full lg:w-auto lg:flex-1 flex justify-center">
            <EllipsisBlock />
          </AnimatedItem>
        </div>
      </section>

      {/* Learning section */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <AnimatedItem>
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Aprendizado Constante</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Acredito que a tecnologia evolui rápido e um bom desenvolvedor precisa acompanhar esse ritmo.
                  Atualmente estou aprofundando conhecimentos em <span className="text-blue-400 font-medium">arquiteturas de microserviços</span>, 
                  <span className="text-blue-400 font-medium"> AWS</span> e <span className="text-blue-400 font-medium">Clean Architecture</span>, 
                  enquanto trabalho no <span className="text-white font-medium">ISGH - Hospital Regional de Itapipoca</span>.
                </p>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </section>

      {/* Projects section */}
      <section className="mx-auto max-w-7xl px-6 mt-24">
        <AnimatedItem>
          <div className="text-center mb-12">
            <p className="text-blue-400 font-mono text-sm mb-2">// projetos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Projetos que já fiz
            </h2>
            <p className="text-zinc-500 mt-3 max-w-md mx-auto">
              Alguns dos projetos que desenvolvi, aplicando boas práticas e tecnologias modernas.
            </p>
          </div>
        </AnimatedItem>
        <StackPag />
      </section>
    </div>
  );
}
