import Link from "next/link";

export default function HeaderModel() {
  const text = "<Samyr-dev/>";

  return (
    <header className="bg-[#1F2428] justify-between w-full h-16 flex items-center">
     <Link href="/home">
      <h1 className="ml-10 text-2xl font-bold text-zinc-100 font-mono" >
        {text}
      </h1>
     </Link>
      <div className="flex  md:flex-row mr-5 gap-4 ">
          <Link href="/aboutme">
        <button className="text-zinc-100 hover:text-blue-400 font-mono">
          Sobre mim
        </button>
       </Link>
       <Link href="/contact">
        <button className="text-zinc-100 hover:text-blue-400 font-mono">
          Contato
        </button>
       </Link>
        
      </div>
    </header>
  );
}
