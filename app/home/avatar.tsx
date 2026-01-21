import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function LoGOTIP() {
    return (
      <div className="relative">
        {/* Gradiente de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent blur-3xl -z-10" />
        
        {/* Avatar com borda gradiente */}
        <Avatar className="w-100 h-100 mt-6 ring-4 ring-blue-500/30">
          <AvatarImage
            src="/samyrimage.jpeg"
            alt="Foto de Samyr"
            className="object-cover"
          />
        </Avatar>
      </div>
    )
}