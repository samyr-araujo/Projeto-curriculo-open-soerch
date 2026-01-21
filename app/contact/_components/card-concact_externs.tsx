import { Card, CardContent } from "@/components/ui/card";




export function CardContact( ) {



    return (
<Card className="w-[320px] h-[200px] bg-gray-800 border-none transition-transform hover:scale-105 cursor-pointer">
  <CardContent className="flex flex-col gap-4">
    
    <h3 className="text-white font-mono text-lg mx-auto ">
      informações_contato
    </h3>

    <div className="flex flex-col gap-2 text-sm text-gray-200">

      <div className="flex items-center gap-2">
        <i className="devicon-github-original text-xl"></i>
        <a
          href="https://github.com/samyr-araujo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          github.com/samyr-araujo
        </a>
      </div>

      <div className="flex items-center gap-2">
        <i className="devicon-linkedin-plain text-xl"></i>
        <a
          href="https://www.linkedin.com/in/samyr-araujo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          linkedin.com/in/samyr-araujo
        </a>
      </div>

    </div>

  </CardContent>
</Card>

    )

}