import TextType from "@/components/TextType";
import { CardContact } from "./card_context";
import LoGOTIP from "./avatar";
import HeaderModel from "./header";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meu portifolio - Samyr Araujo",
  description: "Me conheça melhor, veja meus projetos e habilidades como desenvolvedor.",
  openGraph: {
    title: "Meu portifolio - Samyr Araujo",
    description: "Me conheça melhor, veja meus projetos e habilidades como desenvolvedor.",
  
    siteName: "Samyr Portifolio",
    images: [
      {
        url: "https://minhaloja.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview da portifolio de Samyr Araujo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
}


export default function HomePage() {
  return (
     <>
     
    <main>
      {/* Fundo escuro com gradiente AZUL */}
      <div className="bg-[#0a0e13] min-h-screen flex items-center relative overflow-hidden">
        
        {/* Gradiente AZUL no canto superior esquerdo */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Gradiente AZUL adicional no canto inferior direito (opcional) */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        
        {/* Container geral */}
        <div className="flex  flex-col  md:flex-row w-full items-center mt-5 md:justify-between max-w-7xl px-16 mx-auto relative z-10 gap-20">
          
          {/* Coluna esquerda */}
          <div className="flex flex-col  text-white space-y-3 max-w-2xl  order-2  mb-10 md:order-1 ">
            
            {/* console.log em AZUL */}
            <p className="text-blue-400 font-mono text-lg mb-2">
              console.log("Olá mundo! sou")
            </p>
            
        
            <h1 className="  text-3xl md:text-7xl font-bold leading-tight">
              Samyr Araujo
            </h1>

            {/* Subtítulo com > */}
            <div className="text-xl text-gray-300">
              <TextType
                text={[
                  "> Node.js..",
                  "> React..",
                  "> Next.js..",
                  "> Full Stack Developer..",
                  "> AWS, Docker..",
                  "I looking first oportunity..."


                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="font-mono"
              />
            </div>

            {/* Botões */}
            <div className="">
              <CardContact />
            </div>
           
          </div>

          {/* Coluna direita - Avatar */}
          <div className="flex-shrink-0  order-1 md:order-2">
            <LoGOTIP/>  
          </div>

        </div>
      </div>
    </main>
    </>
  );
}