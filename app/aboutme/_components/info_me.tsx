import { Card, CardContent } from "@/components/ui/card";




export function InfoMe() {




    return (
      <>
      <Card className=" h-[200px] w-[400px] md:w-[500px]  bg-transparent border border-none">

     <CardContent>

     
       <div className="flex flex-col jusify-center  space-y-4">
        <h2 className="text-3xl font-bold text-zinc-100">Sobre Mim</h2>
        <p className="text-zinc-300   max-w-3xl text-justify">
           Meu nome é Samyr, tenho 18 anos e sou um desenvolvedor
          apaixonado por tecnologia e inovação. Desde jovem, sempre tive um
          fascínio por computadores e programação, o que me levou a seguir uma
          carreira na área de desenvolvimento de software. Atualmente procuro vaga de Full-Stack Developer Jr, tendo 
          experiencia com <strong className="text-white">React, Next.js, Node.js, TypeScript, JavaScript, Docker , AWS, Deploy em nuvem , microservicos , TailwindCSS, vercel,</strong>  entre outras tecnologias.
        </p>
       </div>
       </CardContent>
       </Card>
      </>

    )
}