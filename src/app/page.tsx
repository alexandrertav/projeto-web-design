'use client';

import { LoaderPinwheel } from '@/components/animate-ui/icons/loader-pinwheel';
import { Clapperboard } from '@/components/animate-ui/icons/clapperboard';
import { Sparkles } from '@/components/animate-ui/icons/sparkles';
import ColorWheel from './components/color-wheel';
import ConcentricBackground from './components/concentric-background';
import { useState, useEffect } from 'react';

export default function Home() {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [colorIntensity, setColorIntensity] = useState(0);
  const [transitionState, setTransitionState] = useState<{
    isAnimating: boolean;
    color: string | null;
    colorHex: string | null;
  }>({
    isAnimating: false,
    color: null,
    colorHex: null,
  });

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
      <main className="relative z-20 min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-8">
        {/* Lado Esquerdo - Conteúdo */}
        <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20 lg:py-20 order-1 lg:order-1">
          <div className="max-w-2xl animate-fade-in-up">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full backdrop-blur-md mb-4 sm:mb-6 md:mb-8 shadow-lg transition-all duration-1000"
              style={{
                backgroundColor: hoveredColor ? `${hoveredColor}30` : 'rgba(255, 255, 255, 0.1)',
                borderColor: hoveredColor ? `${hoveredColor}50` : 'rgba(255, 255, 255, 0.2)',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm text-white font-medium">Cinema & Psicologia</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight">
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
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-4 sm:mb-6 md:mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Explore como as cores influenciam emoções e narrativas em filmes icônicos. 
              Uma jornada visual através da linguagem cinematográfica.
            </p>

            {/* Instrução */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
              <div 
                className="h-px w-6 sm:w-8 md:w-12 transition-all duration-1000"
                style={{
                  background: hoveredColor 
                    ? `linear-gradient(to right, transparent, ${hoveredColor})` 
                    : 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3))'
                }}
              ></div>
              <p className="text-xs sm:text-sm md:text-base text-white/60 font-medium">Passe o mouse sobre a roda cromática para explorar</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 md:mt-16">
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
                  <LoaderPinwheel animate loop className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base text-white/95 font-semibold mb-0.5 sm:mb-1">Teoria das Cores</h3>
                  <p className="text-xs sm:text-sm text-white/60">Significados psicológicos</p>
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
                  <Clapperboard animate loop className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base text-white/95 font-semibold mb-0.5 sm:mb-1">Cinema & Arte</h3>
                  <p className="text-xs sm:text-sm text-white/60">Narrativas visuais</p>
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
                  <Sparkles animate loop className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base text-white/95 font-semibold mb-0.5 sm:mb-1">Análise Visual</h3>
                  <p className="text-xs sm:text-sm text-white/60">Cenas icônicas</p>
                </div>
              </div>
            </div>

            {/* Citação */}
            <div className="mt-6 sm:mt-10 md:mt-16 relative">
              <div className="absolute -left-1 sm:-left-2 top-0 text-3xl sm:text-4xl md:text-6xl text-white/10 font-serif">&quot;</div>
              <blockquote 
                className="pl-4 sm:pl-6 md:pl-8 border-l-2 transition-all duration-1000"
                style={{
                  borderColor: hoveredColor ? `${hoveredColor}60` : 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <p className="text-sm sm:text-base md:text-lg text-white/80 italic leading-relaxed mb-1.5 sm:mb-2 md:mb-3">
                  A cor é um meio de exercer influência direta sobre a alma.
                </p>
                <footer className="text-[10px] sm:text-xs md:text-sm text-white/50">
                  — Wassily Kandinsky
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Lado Direito - Roda Cromática */}
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-20 animate-fade-in-up order-2 lg:order-2 min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-0" style={{ animationDelay: '0.2s' }}>
          <ColorWheel 
            onColorHover={setHoveredColor} 
            onColorClick={(colorName, colorHex) => {
              setTransitionState({
                isAnimating: true,
                color: colorName,
                colorHex: colorHex,
              });
            }}
            isTransitioning={transitionState.isAnimating}
          />
        </div>
      </main>

      {/* Overlay de transição de cor - Espiral com Concentric Background */}
      {transitionState.isAnimating && transitionState.colorHex && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none"
        >
          {/* Camadas concêntricas em espiral - irradiando do centro da ColorWheel */}
          <div
            className="absolute flex items-center justify-center spiral-origin"
            style={{
              opacity: 1,
              animation: 'fadeOut 0.5s ease-out forwards',
              animationDelay: '2s',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Camada 1 - Centro */}
            <div
              className="absolute rounded-full"
              style={{
                width: '200px',
                height: '200px',
                background: `radial-gradient(circle, ${transitionState.colorHex}90 0%, ${transitionState.colorHex}50 50%, transparent 100%)`,
                transform: 'scale(0) rotate(0deg)',
                animation: 'spiralLayer1 2.5s cubic-bezier(0.1, 0.3, 0.9, 1) forwards',
                boxShadow: `inset 0 0 60px ${transitionState.colorHex}40`,
              }}
            />
            
            {/* Camada 2 */}
            <div
              className="absolute rounded-full"
              style={{
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, transparent 30%, ${transitionState.colorHex}80 45%, ${transitionState.colorHex}40 65%, transparent 100%)`,
                transform: 'scale(0) rotate(0deg)',
                animation: 'spiralLayer2 2.5s cubic-bezier(0.1, 0.3, 0.9, 1) forwards',
                animationDelay: '0.1s',
              }}
            />
            
            {/* Camada 3 */}
            <div
              className="absolute rounded-full"
              style={{
                width: '700px',
                height: '700px',
                background: `radial-gradient(circle, transparent 35%, ${transitionState.colorHex}70 48%, ${transitionState.colorHex}30 68%, transparent 100%)`,
                transform: 'scale(0) rotate(0deg)',
                animation: 'spiralLayer3 2.5s cubic-bezier(0.1, 0.3, 0.9, 1) forwards',
                animationDelay: '0.2s',
              }}
            />
            
            {/* Camada 4 */}
            <div
              className="absolute rounded-full"
              style={{
                width: '1100px',
                height: '1100px',
                background: `radial-gradient(circle, transparent 40%, ${transitionState.colorHex}60 52%, ${transitionState.colorHex}25 72%, transparent 100%)`,
                transform: 'scale(0) rotate(0deg)',
                animation: 'spiralLayer4 2.5s cubic-bezier(0.1, 0.3, 0.9, 1) forwards',
                animationDelay: '0.3s',
              }}
            />
            
            {/* Camada 5 - Externa */}
            <div
              className="absolute rounded-full"
              style={{
                width: '1600px',
                height: '1600px',
                background: `radial-gradient(circle, transparent 42%, ${transitionState.colorHex}50 55%, ${transitionState.colorHex}20 75%, transparent 100%)`,
                transform: 'scale(0) rotate(0deg)',
                animation: 'spiralLayer5 2.5s cubic-bezier(0.1, 0.3, 0.9, 1) forwards',
                animationDelay: '0.4s',
              }}
            />
            
            {/* Textura granulada */}
            <div 
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: '150px 150px',
                animation: 'fadeIn 0.5s ease-in forwards',
              }}
            />
          </div>
          
          {/* Concentric Background que aparece depois */}
          <div
            style={{
              opacity: 0,
              animation: 'fadeInBackground 0.5s ease-in forwards',
              animationDelay: '1.8s',
            }}
          >
            <ConcentricBackground color={transitionState.colorHex} />
          </div>
        </div>
      )}
    </div>
  );
}
