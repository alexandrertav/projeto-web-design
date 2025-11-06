'use client';

import { Palette, Sparkles, Film } from 'lucide-react';
import ColorWheel from './components/color-wheel';
import { useState, useEffect } from 'react';

export default function Home() {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [colorIntensity, setColorIntensity] = useState(0);

  // Aumenta a intensidade da cor gradualmente enquanto hover está ativo
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hoveredColor) {
      setColorIntensity(0);
      interval = setInterval(() => {
        setColorIntensity(prev => {
          if (prev >= 0.7) {
            clearInterval(interval);
            return 0.7;
          }
          return prev + 0.015;
        });
      }, 50);
    } else {
      setColorIntensity(0);
    }
    return () => clearInterval(interval);
  }, [hoveredColor]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Gradiente fosco preto */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 30% center, rgba(30,20,40,0.95) 0%, rgba(15,10,20,0.97) 50%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Overlay colorido progressivo */}
      {hoveredColor && (
        <div 
          className="fixed inset-0 z-5 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${hoveredColor} 0%, transparent 70%)`,
            opacity: colorIntensity,
          }}
        />
      )}

      {/* Luz decorativa de fundo - ajustada para o layout */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Textura granulada */}
      <div 
        className="fixed inset-0 opacity-100 mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.95'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Layout Split Screen */}
      <main className="relative z-20 min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Lado Esquerdo - Conteúdo */}
        <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-20 order-1 lg:order-1">
          <div className="max-w-2xl animate-fade-in-up">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md mb-8 shadow-lg transition-all duration-1000"
              style={{
                backgroundColor: hoveredColor ? `${hoveredColor}30` : 'rgba(255, 255, 255, 0.1)',
                borderColor: hoveredColor ? `${hoveredColor}50` : 'rgba(255, 255, 255, 0.2)',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">Cinema & Psicologia</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-none">
              <span 
                className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] transition-colors duration-[1500ms]"
                style={{
                  color: hoveredColor || 'rgba(255, 255, 255, 0.95)'
                }}
              >
                Psicologia das Cores
              </span>
              <br />
              <span 
                className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] transition-colors duration-[1500ms]"
                style={{
                  color: hoveredColor || 'rgba(255, 255, 255, 0.90)'
                }}
              >
                no Cinema
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Explore como as cores influenciam emoções e narrativas em filmes icônicos. 
              Uma jornada visual através da linguagem cinematográfica.
            </p>

            {/* Instrução */}
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div 
                className="h-px w-8 sm:w-12 transition-all duration-1000"
                style={{
                  background: hoveredColor 
                    ? `linear-gradient(to right, transparent, ${hoveredColor})` 
                    : 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3))'
                }}
              ></div>
              <p className="text-sm sm:text-base text-white/60 font-medium">Passe o mouse sobre a roda cromática para explorar</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
              <div 
                className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-md transition-all duration-1000 group"
                style={{
                  backgroundColor: hoveredColor ? `${hoveredColor}15` : 'rgba(255, 255, 255, 0.05)',
                  borderColor: hoveredColor ? `${hoveredColor}40` : 'rgba(255, 255, 255, 0.1)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="p-3 rounded-lg backdrop-blur-sm transition-all duration-1000 shadow-lg"
                  style={{
                    backgroundColor: hoveredColor ? `${hoveredColor}40` : 'rgba(168, 85, 247, 0.3)'
                  }}
                >
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white/95 font-semibold mb-1">Teoria das Cores</h3>
                  <p className="text-sm text-white/60">Significados psicológicos</p>
                </div>
              </div>

              <div 
                className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-md transition-all duration-1000 group"
                style={{
                  backgroundColor: hoveredColor ? `${hoveredColor}15` : 'rgba(255, 255, 255, 0.05)',
                  borderColor: hoveredColor ? `${hoveredColor}40` : 'rgba(255, 255, 255, 0.1)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="p-3 rounded-lg backdrop-blur-sm transition-all duration-1000 shadow-lg"
                  style={{
                    backgroundColor: hoveredColor ? `${hoveredColor}40` : 'rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <Film className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white/95 font-semibold mb-1">Cinema & Arte</h3>
                  <p className="text-sm text-white/60">Narrativas visuais</p>
                </div>
              </div>

              <div 
                className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-md transition-all duration-1000 group"
                style={{
                  backgroundColor: hoveredColor ? `${hoveredColor}15` : 'rgba(255, 255, 255, 0.05)',
                  borderColor: hoveredColor ? `${hoveredColor}40` : 'rgba(255, 255, 255, 0.1)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="p-3 rounded-lg backdrop-blur-sm transition-all duration-1000 shadow-lg"
                  style={{
                    backgroundColor: hoveredColor ? `${hoveredColor}40` : 'rgba(236, 72, 153, 0.3)'
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white/95 font-semibold mb-1">Análise Visual</h3>
                  <p className="text-sm text-white/60">Cenas icônicas</p>
                </div>
              </div>
            </div>

            {/* Citação */}
            <div className="mt-10 sm:mt-16 relative">
              <div className="absolute -left-2 top-0 text-4xl sm:text-6xl text-white/10 font-serif">&quot;</div>
              <blockquote 
                className="pl-6 sm:pl-8 border-l-2 transition-all duration-1000"
                style={{
                  borderColor: hoveredColor ? `${hoveredColor}60` : 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <p className="text-base sm:text-lg text-white/80 italic leading-relaxed mb-2 sm:mb-3">
                  A cor é um meio de exercer influência direta sobre a alma.
                </p>
                <footer className="text-xs sm:text-sm text-white/50">
                  — Wassily Kandinsky
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Lado Direito - Roda Cromática */}
        <div className="flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 lg:py-20 animate-fade-in-up order-2 lg:order-2 min-h-[400px] sm:min-h-[500px] lg:min-h-0" style={{ animationDelay: '0.2s' }}>
          <ColorWheel onColorHover={setHoveredColor} />
        </div>
      </main>
    </div>
  );
}
