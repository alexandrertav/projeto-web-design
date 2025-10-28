'use client';

import { useRouter } from 'next/navigation';
import { Palette, Sparkles, Film } from 'lucide-react';
import GlassCard from './components/glass-card';

interface ColorData {
  name: string;
  gradient: string;
}

const colors: ColorData[] = [
  { name: 'Vermelho', gradient: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)' },
  { name: 'Azul', gradient: 'linear-gradient(135deg, #0066FF 0%, #0044CC 100%)' },
  { name: 'Verde', gradient: 'linear-gradient(135deg, #00AA55 0%, #008844 100%)' },
  { name: 'Amarelo', gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' },
  { name: 'Laranja', gradient: 'linear-gradient(135deg, #FF8C00 0%, #FF6500 100%)' },
  { name: 'Rosa', gradient: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)' },
  { name: 'Roxo', gradient: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)' },
  { name: 'Marrom', gradient: 'linear-gradient(135deg, #8B4513 0%, #654321 100%)' },
  { name: 'Branco', gradient: 'linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)' },
  { name: 'Preto', gradient: 'linear-gradient(135deg, #2C2C2C 0%, #000000 100%)' }
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Gradiente fosco preto */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(20,20,30,0.95) 0%, rgba(10,10,15,0.97) 50%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Luz decorativa de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Textura granulada */}
      <div 
        className="fixed inset-0 opacity-100 mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.95'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />

      <main className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-200/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-float" />
            <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-blue-200/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-pink-200/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-float" style={{ animationDelay: '1s' }} />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Psicologia das Cores
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200/90 max-w-2xl mx-auto mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Explore como as cores influenciam emoções e narrativas no cinema
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-300/80">
            <Film className="w-4 h-4" />
            <span>Uma jornada visual através do cinema</span>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <GlassCard
            Icon={Palette}
            title="Teoria das Cores"
            description="Entenda os significados psicológicos por trás de cada tonalidade"
          />
          <GlassCard
            Icon={Film}
            title="Cinema & Arte"
            description="Descubra como diretores usam cores para contar histórias"
          />
          <GlassCard
            Icon={Sparkles}
            title="Análise Visual"
            description="Explore cenas icônicas e seus simbolismos cromáticos"
          />
        </div>

         {/* Grade de cores*/}
         <h2 className="text-2xl font-bold text-center mb-8 text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Escolha uma cor</h2>
         <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
           <div className="grid grid-cols-5 gap-3 sm:gap-4">
             {colors.map((colorData) => (
               <button
                 key={colorData.name}
                 onClick={() => {
                   router.push(`/color/${colorData.name.toLowerCase()}`);
                 }}
                 className="aspect-square rounded-xl cursor-pointer group transition-all duration-300 relative shadow-[0_4px_6px_rgba(0,0,0,0.3)] border border-white/30 hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)] hover:border-white/60"
                 style={{
                   background: colorData.gradient,
                 }}
                 aria-label={colorData.name}
               >
                 <div className="pointer-events-none absolute inset-0 overflow-hidden shadow-[inset_1px_1px_1px_0_rgba(255,255,255,0.3)]" />
               </button>
             ))}
           </div>
         </div>
      </main>
    </div>
  );
}
