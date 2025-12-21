"use client";

import LetterGlitch from "@/components/LetterGlitch";
import Header2 from "@/components/mvpblocks/header-2";
import TextType from "@/components/TextType";

export default function PageInitial() {
  return (
    <div className="w-screen h-screen">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />

      <main className="fixed inset-0 z-10 flex items-center justify-center">
      <header>
        <Header2 />
      </header>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <TextType 
          text={[
            "Bem-vindo ao meu site",
            "Sou Samyr, desenvolvedor Full Stack!"
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="|"
          className="text-zinc-200 text-2xl md:text-3xl font-extrabold text-center"
        />
      </div>


      </main>
    </div>
  );
}
