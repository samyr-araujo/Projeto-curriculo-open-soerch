import TextType from "@/components/TextType";
import { CardContact } from "./card_context";
import LoGOTIP from "./avatar";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { TechMarquee } from "@/components/tech-marquee";

export const metadata: Metadata = {
  title: "Samyr Araujo - Full Stack Developer",
  description:
    "Me conheça melhor, veja meus projetos e habilidades como desenvolvedor.",
  openGraph: {
    title: "Samyr Araujo - Full Stack Developer",
    description:
      "Me conheça melhor, veja meus projetos e habilidades como desenvolvedor.",
    siteName: "Samyr Portfolio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-4rem)] items-center py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:justify-between lg:gap-20">
          {/* Text content */}
          <AnimatedSection direction="left" className="flex flex-col space-y-6 max-w-2xl text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400"></span>
              </span>
              Disponível para projetos
            </div>

            <div className="space-y-3">
              <p className="text-blue-400 font-mono text-sm tracking-wide">
                console.log(&quot;Olá mundo! sou&quot;)
              </p>
              <h1 className="text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Samyr Araujo
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-zinc-300">
                Full Stack Developer
              </h2>
            </div>

            <div className="text-lg text-zinc-500 md:text-xl h-8">
              <TextType
                text={[
                  "> React & Next.js",
                  "> Node.js & TypeScript",
                  "> AWS & Docker",
                  "> Clean Architecture",
                  "> Em aprendizado constante...",
                ]}
                typingSpeed={55}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="▊"
                className="font-mono"
              />
            </div>

            <p className="text-zinc-500 text-sm md:text-base max-w-lg leading-relaxed">
              Desenvolvedor apaixonado por criar soluções escaláveis e performáticas.
              Atualmente trabalhando no{" "}
              <span className="text-blue-400 font-medium">
                ISGH - Hospital Regional de Itapipoca
              </span>{" "}
              e em constante aprendizado de novas tecnologias.
            </p>

            {/* Current status */}
            <div className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </span>
              <span className="text-zinc-400">
                Trabalhando no ISGH | Aberto a novas oportunidades
              </span>
            </div>

            <div className="pt-2">
              <CardContact />
            </div>
          </AnimatedSection>

          {/* Avatar */}
          <AnimatedSection direction="right" delay={0.3} className="shrink-0">
            <LoGOTIP />
          </AnimatedSection>
        </div>
      </section>

      {/* Tech marquee */}
      <TechMarquee />
    </>
  );
}
