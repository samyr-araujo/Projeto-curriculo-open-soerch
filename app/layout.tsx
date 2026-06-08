import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderModel from "./home/header";

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
        <HeaderModel />
        <div className="relative min-h-screen overflow-hidden">
          {/* Gradient orbs */}
          <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-blue-500/3 blur-3xl" />

          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
