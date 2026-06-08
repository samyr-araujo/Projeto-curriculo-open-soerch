import { CardContact } from "./_components/card-concact_externs";
import { ContactForm } from "./_components/forms";
import { AnimatedItem } from "@/components/animated-section";

export default function ConcactComponentMain() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <AnimatedItem>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-300 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Contato
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Vamos conversar?
            </h1>
            <p className="text-zinc-400 mt-5 max-w-lg mx-auto leading-relaxed text-base">
              Atualmente trabalhando no ISGH - Hospital Regional de Itapipoca e aberto a novas oportunidades.
              Minha caixa de entrada está sempre disponível!
            </p>
          </div>
        </AnimatedItem>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          <CardContact />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
