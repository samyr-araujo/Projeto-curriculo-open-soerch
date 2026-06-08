import EllipsisBlock from "@/components/mvpblocks/ellipsis-block";
import { InfoMe } from "./_components/info_me";
import StackPag from "./_components/contribuitions";
import { AnimatedItem } from "@/components/animated-section";

export default function StackPage() {
  return (
    <div className="py-20">
      {/* About section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <InfoMe />
          <AnimatedItem delay={0.4} className="w-full lg:w-auto lg:flex-1 flex justify-center lg:sticky lg:top-24">
            <EllipsisBlock />
          </AnimatedItem>
        </div>
      </section>

      {/* Learning & Experience section */}
      <section className="mx-auto max-w-7xl px-6 mt-24">
        <AnimatedItem>
          <div className="relative rounded-2xl border border-white/5 bg-white/[0.01] p-8 md:p-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-start gap-8">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/20 shrink-0">
                <span className="text-3xl">🚀</span>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-white">Aprendizado Constante</h3>
                  <p className="text-sm text-zinc-500 mt-1">Filosofia de desenvolvimento</p>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Acredito que a tecnologia evolui rápido e um bom desenvolvedor precisa acompanhar esse ritmo.
                  Atualmente estou aprofundando conhecimentos em{" "}
                  <span className="text-blue-400 font-medium">arquiteturas de microserviços</span>,{" "}
                  <span className="text-cyan-400 font-medium">AWS</span> e{" "}
                  <span className="text-purple-400 font-medium">Clean Architecture</span>,
                  enquanto trabalho no{" "}
                  <span className="text-white font-semibold">ISGH - Hospital Regional de Itapipoca</span>.
                </p>

                {/* Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="relative pl-4 border-l-2 border-blue-500/30">
                    <p className="text-xs text-zinc-500">Atual</p>
                    <p className="text-sm text-white font-medium">ISGH - Hospital Regional</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Desenvolvedor</p>
                  </div>
                  <div className="relative pl-4 border-l-2 border-cyan-500/30">
                    <p className="text-xs text-zinc-500">Estudando</p>
                    <p className="text-sm text-white font-medium">AWS & Microserviços</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Cloud Architecture</p>
                  </div>
                  <div className="relative pl-4 border-l-2 border-purple-500/30">
                    <p className="text-xs text-zinc-500">Foco</p>
                    <p className="text-sm text-white font-medium">Clean Code & DDD</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Boas práticas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </section>

      {/* Projects section */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <AnimatedItem>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-300 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Portfólio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Projetos que já fiz
            </h2>
            <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
              Alguns dos projetos que desenvolvi, aplicando boas práticas e tecnologias modernas.
            </p>
          </div>
        </AnimatedItem>
        <StackPag />
      </section>
    </div>
  );
}
