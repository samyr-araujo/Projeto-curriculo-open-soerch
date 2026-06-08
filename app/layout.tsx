import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderModel from "./home/header";
import { PremiumEffects } from "@/components/premium-effects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samyr Araujo - Full Stack Developer",
  description: "Me conheça melhor, veja meus projetos e habilidades como desenvolvedor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0e13] text-white`}
      >
        <PremiumEffects />
        <HeaderModel />
        <div className="relative min-h-screen">
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
