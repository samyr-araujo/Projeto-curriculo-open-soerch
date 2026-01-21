import { Card, CardContent } from "@/components/ui/card";

export function CardContact() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full ">
      {/* Download */}
      <a
        href="/curriculo.pdf"
        download="Samyr_Araujo_Curriculo_FullStack.pdf"
        className="
          flex items-center justify-center
          w-full md:w-auto
          px-6
          h-14 md:h-12
          border border-blue-400
          text-blue-500
          hover:bg-blue-500 hover:text-white
          rounded-sm
          transition
        "
      >
        Download CV
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/samyr-araujo"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto"
      >
        <Card
          className="
            flex items-center justify-center
            w-full md:w-12
            h-14 md:h-12
            bg-gray-800 hover:bg-gray-700
            rounded-sm
            border-none
            transition hover:scale-105
          "
        >
          <CardContent className="p-0">
            <i className="devicon-github-original text-xl"></i>
          </CardContent>
        </Card>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/samyr-araujo-do-vale-7b4b621b4/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto"
      >
        <Card
          className="
            flex items-center justify-center
            w-full md:w-12
            h-14 md:h-12
            bg-blue-700 hover:bg-blue-600
            rounded-sm
            border-none
            transition hover:scale-105
          "
        >
          <CardContent className="p-0">
            <i className="devicon-linkedin-plain text-white text-xl"></i>
          </CardContent>
        </Card>
      </a>
    </div>
  );
}
