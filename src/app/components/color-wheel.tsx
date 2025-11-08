'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ColorData {
  name: string;
  hex: string;
  angle: number; // Ângulo na roda (0-360)
  gifPaths?: string[]; // Array de caminhos para os GIFs correspondentes
}

interface ColorWheelProps {
  onColorHover?: (color: string | null) => void;
  onColorClick?: (colorName: string, colorHex: string) => void;
  isTransitioning?: boolean;
}

// Ordem correta seguindo o conic-gradient
const colors: ColorData[] = [
  { name: 'Vermelho', hex: '#FF0000', angle: 0, gifPaths: ['/gifs/red.gif', '/gifs/red2.gif', '/gifs/red3.gif'] },      // 0-36deg
  { name: 'Laranja', hex: '#FF8C00', angle: 36, gifPaths: ['/gifs/orange.gif', '/gifs/orange2.gif', '/gifs/orange3.gif'] },      // 36-72deg
  { name: 'Amarelo', hex: '#FFD700', angle: 72, gifPaths: ['/gifs/yellow.gif', '/gifs/yellow2.gif', '/gifs/yellow3.gif'] },      // 72-108deg
  { name: 'Verde', hex: '#00AA55', angle: 108, gifPaths: ['/gifs/green.gif', '/gifs/green2.webp', '/gifs/green3.gif'] },       // 108-144deg
  { name: 'Marrom', hex: '#8B4513', angle: 144, gifPaths: ['/gifs/brown.gif', '/gifs/brown2.gif', '/gifs/brown3.gif'] },      // 144-180deg
  { name: 'Azul', hex: '#0066FF', angle: 180, gifPaths: ['/gifs/blue.gif', '/gifs/blue2.gif', '/gifs/blue3.gif'] },        // 180-216deg
  { name: 'Branco', hex: '#FFFFFF', angle: 216, gifPaths: ['/gifs/white.gif', '/gifs/white2.gif', '/gifs/white3.gif'] },      // 216-252deg
  { name: 'Roxo', hex: '#9B59B6', angle: 252, gifPaths: ['/gifs/purple.gif', '/gifs/purple2.gif', '/gifs/purple3.gif'] },        // 252-288deg
  { name: 'Preto', hex: '#2C2C2C', angle: 288, gifPaths: ['/gifs/black.gif', '/gifs/black2.gif', '/gifs/black3.gif'] },       // 288-324deg
  { name: 'Rosa', hex: '#FF69B4', angle: 324, gifPaths: ['/gifs/pink.gif', '/gifs/pink2.gif', '/gifs/pink3.gif'] }         // 324-360deg
];

export default function ColorWheel({ onColorHover, onColorClick, isTransitioning }: ColorWheelProps) {
  const router = useRouter();
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  // Rastreia o índice atual do GIF para cada cor
  const [gifIndices, setGifIndices] = useState<Record<string, number>>({});

  const handleColorHover = (colorName: string | null) => {
    setHoveredColor(colorName);
    if (colorName) {
      const color = colors.find(c => c.name === colorName);
      if (color?.gifPaths && color.gifPaths.length > 0) {
        // Pega o índice atual da cor (ou -1 se não existir, para começar do 0 na primeira vez)
        const currentIndex = gifIndices[colorName] ?? -1;
        // Avança para o próximo GIF (circular usando módulo)
        // Se currentIndex é -1, nextIndex será 0 (primeiro GIF)
        const nextIndex = (currentIndex + 1) % color.gifPaths.length;
        
        // Mostra o GIF no próximo índice
        setSelectedGif(color.gifPaths[nextIndex]);
        
        // Atualiza o índice para a próxima vez que a cor for hoverada
        setGifIndices(prev => ({
          ...prev,
          [colorName]: nextIndex
        }));
      } else {
        setSelectedGif(null);
      }
      onColorHover?.(color?.hex || null);
    } else {
      setSelectedGif(null);
      onColorHover?.(null);
    }
  };

  const handleColorClick = (colorName: string) => {
    const color = colors.find(c => c.name === colorName);
    if (color && onColorClick) {
      onColorClick(color.name, color.hex);
      // Navega após a animação (2.5s)
      setTimeout(() => {
        router.push(`/color/${color.name.toLowerCase()}`);
      }, 2500);
    } else {
      router.push(`/color/${colorName.toLowerCase()}`);
    }
  };

  const numColors = colors.length;
  const wheelSize = 600;
  const centerSize = 400;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="scale-[0.5] sm:scale-[0.65] md:scale-75 lg:scale-90 xl:scale-100 transition-transform duration-300">
      {/* Círculos concêntricos de fundo decorativos */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[750px] h-[750px] rounded-full border border-white/5 animate-pulse-slow" />
        <div className="absolute w-[650px] h-[650px] rounded-full border border-white/10" />
      </div>

      {/* Container da roda */}
      <div className="relative flex items-center justify-center">
        {/* Roda cromática com conic-gradient */}
        <div
          className="relative rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.6)] transition-all duration-300"
          style={{
            width: `${wheelSize}px`,
            height: `${wheelSize}px`,
            background: `conic-gradient(
              #FF0000 0deg 36deg,
              #FF8C00 36deg 72deg,
              #FFD700 72deg 108deg,
              #00AA55 108deg 144deg,
              #8B4513 144deg 180deg,
              #0066FF 180deg 216deg,
              #FFFFFF 216deg 252deg,
              #9B59B6 252deg 288deg,
              #2C2C2C 288deg 324deg,
              #FF69B4 324deg 360deg
            )`,
            transform: `rotate(-18deg)`, // Ajuste para alinhar vermelho no topo
            filter: hoveredColor ? 'brightness(1.15) saturate(1.2)' : 'brightness(1)',
            animation: isTransitioning ? 'spinWheel 2.5s cubic-bezier(0.1, 0.3, 0.9, 1) forwards' : 'none',
          }}
        >
          {/* Círculo branco central */}
          <div
            className="color-wheel-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden"
            style={{
              width: `${centerSize}px`,
              height: `${centerSize}px`,
              transform: `rotate(18deg)`,
            }}
            
          >
            {/* GIF da cor em hover */}
            {hoveredColor && selectedGif && (
              <div className="absolute inset-0 animate-fade-in">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedGif}
                  alt={`${hoveredColor} GIF`}
                  className="w-full h-full object-cover"
                  style={{
                    animation: 'fadeIn 0.8s ease-in-out'
                  }}
                  key={selectedGif} // Força re-render quando o GIF muda
                />
              </div>
            )}
            
            {/* Conteúdo central - esconde quando há hover */}
            <div 
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                hoveredColor ? 'opacity-0' : 'opacity-100'
              }`}
            >
            </div>
          </div>
        </div>

        {/* Segmentos clicáveis invisíveis sobre a roda */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: `${wheelSize}px`, height: `${wheelSize}px` }}>
            {colors.map((color, index) => {
              // Calcular ângulos alinhados com o conic-gradient
              // O conic-gradient está rotacionado -18deg, então compensamos
              const segmentSize = 360 / numColors; // 36 graus por segmento
              const startAngle = (index * segmentSize) - 18 - 90; // -90 para começar do topo
              const endAngle = startAngle + segmentSize;
              
              // Calcular pontos do polígono (fatia)
              const centerX = 50;
              const centerY = 50;
              const radius = 50;
              
              const x1 = centerX + radius * Math.cos(startAngle * Math.PI / 180);
              const y1 = centerY + radius * Math.sin(startAngle * Math.PI / 180);
              const x2 = centerX + radius * Math.cos(endAngle * Math.PI / 180);
              const y2 = centerY + radius * Math.sin(endAngle * Math.PI / 180);

              const isHovered = hoveredColor === color.name;

              return (
                <button
                  key={color.name}
                  onClick={() => handleColorClick(color.name)}
                  onMouseEnter={() => handleColorHover(color.name)}
                  onMouseLeave={() => handleColorHover(null)}
                  className="absolute inset-0 transition-all duration-300 cursor-pointer"
                  style={{
                    clipPath: `polygon(${centerX}% ${centerY}%, ${x1}% ${y1}%, ${x2}% ${y2}%)`,
                    background: 'transparent',
                    zIndex: isHovered ? 25 : 15,
                  }}
                  aria-label={color.name}
                  disabled={isTransitioning}
                >
                </button>
              );
            })}
          </div>
        </div>

        {/* Card informativo estático */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 pointer-events-none z-50">
          {hoveredColor ? (
            <div
              className="px-6 py-4 rounded-xl backdrop-blur-md shadow-2xl border-2 transition-all duration-300 animate-fade-in"
              style={{
                backgroundColor: `${colors.find(c => c.name === hoveredColor)?.hex}25`,
                borderColor: `${colors.find(c => c.name === hoveredColor)?.hex}80`,
                boxShadow: `0 8px 24px ${colors.find(c => c.name === hoveredColor)?.hex}50`,
              }}
            >
              <div className="text-center">
                <p
                  className="text-2xl font-bold mb-1"
                  style={{
                    color: colors.find(c => c.name === hoveredColor)?.hex,
                    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  }}
                >
                  {hoveredColor}
                </p>
                <p className="text-xs text-white/60 font-medium">
                  Clique para explorar
                </p>
              </div>
            </div>
          ) : (
            <div className="px-6 py-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300">
              <p className="text-center text-sm text-white/40 font-medium">
                Passe o mouse sobre uma cor
              </p>
            </div>
          )}
        </div>

        {/* Overlay de brilho intenso no hover */}
        {hoveredColor && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {/* Halo externo grande */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: `${wheelSize + 100}px`, height: `${wheelSize + 100}px` }}
            >
              <div
                className="absolute inset-0 rounded-full animate-pulse-slow"
                style={{
                  boxShadow: `0 0 100px 40px ${colors.find(c => c.name === hoveredColor)?.hex}60`,
                  filter: 'blur(20px)',
                }}
              />
            </div>
            
            {/* Halo médio */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: `${wheelSize}px`, height: `${wheelSize}px` }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `0 0 80px 30px ${colors.find(c => c.name === hoveredColor)?.hex}80, inset 0 0 60px 20px ${colors.find(c => c.name === hoveredColor)?.hex}30`,
                  filter: 'blur(15px)',
                  animation: 'pulse-slow 2s ease-in-out infinite',
                }}
              />
            </div>

            {/* Brilho interno na roda */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: `${wheelSize}px`, height: `${wheelSize}px` }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${colors.find(c => c.name === hoveredColor)?.hex}20 0%, transparent 70%)`,
                  mixBlendMode: 'screen',
                }}
              />
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
