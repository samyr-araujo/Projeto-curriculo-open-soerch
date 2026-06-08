import { CardContact } from "./_components/card-concact_externs";
import { ContactForm } from "./_components/forms";

export default function ConcactComponentMain() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-mono text-sm mb-2">// contato</p>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Entre em contato
          </h1>
          <p className="text-zinc-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Atualmente trabalhando no ISGH - Hospital Regional de Itapipoca e aberto a novas oportunidades.
            Minha caixa de entrada está sempre disponível!
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          <CardContact />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
