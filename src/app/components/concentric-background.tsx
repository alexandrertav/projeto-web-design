'use client';

interface ConcentricBackgroundProps {
  color: string;
}

export default function ConcentricBackground({ color }: ConcentricBackgroundProps) {
  // Detecta a cor (corresponde aos hex colors em colors.ts)
  const isRed = color.toLowerCase().includes('ff0000') || color.toLowerCase().includes('red');
  const isBlue = color.toLowerCase().includes('0066ff') || color.toLowerCase().includes('blue');
  const isGreen = color.toLowerCase().includes('00ff41') || color.toLowerCase().includes('green');
  const isYellow = color.toLowerCase().includes('fff600') || color.toLowerCase().includes('yellow');
  const isOrange = color.toLowerCase().includes('d57c00') || color.toLowerCase().includes('orange');
  const isPurple = color.toLowerCase().includes('8b09ac') || color.toLowerCase().includes('purple');
  const isPink = color.toLowerCase().includes('ed09e9') || color.toLowerCase().includes('pink');
  const isBrown = color.toLowerCase().includes('7c580b') || color.toLowerCase().includes('brown');
  const isBlack = color.toLowerCase().includes('0d0e0e') || color.toLowerCase().includes('black');
  const isWhite = color.toLowerCase().includes('ffffff') || color.toLowerCase().includes('white');
  
  
  // Define as classes de animação baseadas na cor
  const primaryAnimation = isBlue ? 'animate-water-flow' 
    : isGreen ? 'animate-earth-breath' 
    : isYellow ? 'animate-pulse-slow'
    : isOrange ? 'animate-pulse-slow'
    : isPurple ? 'animate-deep-breath'
    : isPink ? 'animate-wave-ripple'
    : isBrown ? 'animate-pulse-slow'
    : isBlack ? 'animate-pulse-slow'
    : isWhite ? 'animate-pulse-slow'
    : 'animate-pulse-slow';
    
  const secondaryAnimation = isBlue ? 'animate-wave-ripple' 
    : isGreen ? 'animate-organic-growth' 
    : isYellow ? 'animate-pulse-slow'
    : isOrange ? 'animate-pulse-slow'
    : isPurple ? 'animate-wave-ripple'
    : isPink ? 'animate-pulse-slow'
    : isBrown ? 'animate-pulse-slow'
    : isBlack ? 'animate-pulse-slow'
    : isWhite ? 'animate-wave-ripple'
    : 'animate-pulse-slow';
    
  const tertiaryAnimation = isBlue ? 'animate-deep-breath' 
    : isGreen ? 'animate-nature-pulse' 
    : isYellow ? 'animate-pulse-slow'
    : isOrange ? 'animate-pulse-slow'
    : isPurple ? 'animate-pulse-slow'
    : isPink ? 'animate-deep-breath'
    : isBrown ? 'animate-pulse-slow'
    : isBlack ? 'animate-pulse-slow'
    : isWhite ? 'animate-deep-breath'
    : 'animate-pulse-slow';
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">    

      {/* Camadas concêntricas com animações específicas por cor */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Camada 1 - mais próxima do centro */}
        <div 
          className={`absolute rounded-full ${primaryAnimation}`}
          style={{
            width: '420px',
            height: '420px',
            background: `radial-gradient(circle, ${color}80 0%, ${color}40 50%, transparent 100%)`,
            boxShadow: isRed ? 'inset 0 0 100px rgba(51, 14, 14, 0.5)' 
              : isBlue ? 'inset 0 0 100px rgba(0, 51, 102, 0.5)'
              : isGreen ? 'inset 0 0 100px rgba(0, 51, 20, 0.5)' 
              : isYellow ? 'inset 0 0 100px rgba(51, 51, 0, 0.5)'
              : isOrange ? 'inset 0 0 100px rgba(51, 33, 0, 0.5)'
              : isPurple ? 'inset 0 0 100px rgba(40, 0, 40, 0.5)'
              : isPink ? 'inset 0 0 100px rgba(51, 38, 42, 0.5)'
              : isBrown ? 'inset 0 0 100px rgba(40, 30, 5, 0.5)'
              : isBlack ? 'inset 0 0 100px rgba(10, 10, 10, 0.5)'
              : isWhite ? 'inset 0 0 100px rgba(80, 80, 80, 0.5)'
              : 'inset 0 0 100px rgba(0, 51, 102, 0.5)',
            animationDuration: isBlue ? '8s' 
              : isGreen ? '20s' 
              : isYellow ? '6s'
              : isOrange ? '7s'
              : isPurple ? '10s'
              : isPink ? '8s'
              : isBrown ? '9s'
              : isBlack ? '15s'
              : isWhite ? '12s'
              : '5s'
          }}
        />
        
        {/* Camada 2 */}
        <div 
          className={`absolute rounded-full ${secondaryAnimation}`}
          style={{
            width: '680px',
            height: '680px',
            background: `radial-gradient(circle, transparent 20%, ${color}75 40%, ${color}35 60%, transparent 100%)`,
            animationDuration: isBlue ? '6s' 
              : isGreen ? '25s' 
              : isYellow ? '8s'
              : isOrange ? '9s'
              : isPurple ? '12s'
              : isPink ? '10s'
              : isBrown ? '11s'
              : isBlack ? '20s'
              : isWhite ? '14s'
              : '10s',
            animationDelay: isBlue ? '1s' 
              : isGreen ? '3s' 
              : isYellow ? '0.5s'
              : isOrange ? '1s'
              : isPurple ? '2s'
              : isPink ? '1.5s'
              : isBrown ? '1.2s'
              : isBlack ? '0s'
              : isWhite ? '1s'
              : '0s'
          }}
        />
        
        {/* Camada 3 */}
        <div 
          className={`absolute rounded-full ${tertiaryAnimation}`}
          style={{
            width: '940px',
            height: '940px',
            background: `radial-gradient(circle, transparent 30%, ${color}65 45%, ${color}28 65%, transparent 100%)`,
            animationDuration: isBlue ? '10s' 
              : isGreen ? '30s' 
              : isYellow ? '9s'
              : isOrange ? '11s'
              : isPurple ? '14s'
              : isPink ? '12s'
              : isBrown ? '13s'
              : isBlack ? '25s'
              : isWhite ? '16s'
              : '5s',
            animationDelay: isBlue ? '2s' 
              : isGreen ? '5s' 
              : isYellow ? '1s'
              : isOrange ? '2s'
              : isPurple ? '3s'
              : isPink ? '2.5s'
              : isBrown ? '2.2s'
              : isBlack ? '0s'
              : isWhite ? '2s'
              : '0s'
          }}
        />
        
        {/* Camada 4 */}
        <div 
          className={`absolute rounded-full ${primaryAnimation}`}
          style={{
            width: '1200px',
            height: '1200px',
            background: `radial-gradient(circle, transparent 35%, ${color}55 48%, ${color}22 68%, transparent 100%)`,
            animationDuration: isBlue ? '12s' 
              : isGreen ? '22s' 
              : isYellow ? '10s'
              : isOrange ? '13s'
              : isPurple ? '16s'
              : isPink ? '14s'
              : isBrown ? '15s'
              : isBlack ? '30s'
              : isWhite ? '18s'
              : '5s',
            animationDelay: isBlue ? '3s' 
              : isGreen ? '7s' 
              : isYellow ? '1.5s'
              : isOrange ? '3s'
              : isPurple ? '4s'
              : isPink ? '3.5s'
              : isBrown ? '3.2s'
              : isBlack ? '0s'
              : isWhite ? '3s'
              : '0s'
          }}
        />
        
        {/* Camada 5 */}
        <div 
          className={`absolute rounded-full ${secondaryAnimation}`}
          style={{
            width: '1460px',
            height: '1460px',
            background: `radial-gradient(circle, transparent 40%, ${color}45 50%, ${color}18 70%, transparent 100%)`,
            animationDelay: isBlue ? '4s' 
              : isGreen ? '10s' 
              : isYellow ? '2s'
              : isOrange ? '4s'
              : isPurple ? '5s'
              : isPink ? '4.5s'
              : isBrown ? '4.2s'
              : isBlack ? '0s'
              : isWhite ? '4s'
              : '1.5s',
            animationDuration: isBlue ? '9s' 
              : isGreen ? '28s' 
              : isYellow ? '11s'
              : isOrange ? '15s'
              : isPurple ? '18s'
              : isPink ? '16s'
              : isBrown ? '17s'
              : isBlack ? '35s'
              : isWhite ? '20s'
              : '10s'
          }}
        />
        
        {/* Camada 6 - borda externa */}
        <div 
          className={`absolute rounded-full ${tertiaryAnimation}`}
          style={{
            width: '1750px',
            height: '1750px',
             background: `radial-gradient(circle, transparent 42%, ${color}35 52%, ${color}15 72%, transparent 100%)`,
            animationDelay: isBlue ? '5s' 
              : isGreen ? '12s' 
              : isYellow ? '2.5s'
              : isOrange ? '5s'
              : isPurple ? '6s'
              : isPink ? '5.5s'
              : isBrown ? '5.2s'
              : isBlack ? '0s'
              : isWhite ? '5s'
              : '2s',
            animationDuration: isBlue ? '15s' 
              : isGreen ? '35s' 
              : isYellow ? '12s'
              : isOrange ? '17s'
              : isPurple ? '20s'
              : isPink ? '18s'
              : isBrown ? '19s'
              : isBlack ? '40s'
              : isWhite ? '22s'
              : '20s'
          }}
        />
      </div>

        {/* Gradiente de borda - adaptável à cor */}
        <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isBlue 
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(0,51,102,0.2) 45%, #003366 60%, #002244 70%, #001122 80%, #000511 90%, #000000 100%)'
            : isGreen
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(0,102,26,0.2) 45%, #006622 60%, #004411 70%, #002200 80%, #001100 90%, #000000 100%)'
            : isYellow
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(102,102,0,0.2) 45%, #665500 60%, #443300 70%, #221100 80%, #110500 90%, #000000 100%)'
            : isOrange
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(153,69,0,0.2) 45%, #994400 60%, #662200 70%, #331100 80%, #190800 90%, #000000 100%)'
            : isPurple
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(80,0,80,0.2) 45%, #660066 60%, #440044 70%, #220022 80%, #110011 90%, #000000 100%)'
            : isPink
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(153,91,115,0.2) 45%, #994466 60%, #662233 70%, #331122 80%, #190511 90%, #000000 100%)'
            : isBrown
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(124,88,11,0.2) 45%, #6b4a08 60%, #4a3406 70%, #291d03 80%, #140e02 90%, #000000 100%)'
            : isBlack
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(20,20,20,0.2) 45%, #1a1a1a 60%, #111111 70%, #080808 80%, #030303 90%, #000000 100%)'
            : isWhite
            ? 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(150,150,150,0.2) 45%, #666666 60%, #444444 70%, #222222 80%, #0a0a0a 90%, #000000 100%)'
            : 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(139,0,0,0.2) 45%, #8b0000 60%, #5c0000 70%, #2d0000 80%, #0f0000 90%, #000000 100%)'
        }}
      />
      
      {/* Intensificação da cor nas bordas internas - com transição para preto */}
      <div 
        className={`absolute inset-0 pointer-events-none ${isBlue ? 'animate-water-flow' : isGreen ? 'animate-earth-breath' : isPurple ? 'animate-deep-breath' : isPink ? 'animate-wave-ripple' : 'animate-pulse-slow'}`}
        style={{
          background: isBlue
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(0,102,255,0.2) 38%, rgba(0,51,153,0.4) 52%, rgba(0,34,102,0.6) 66%, rgba(0,17,51,0.8) 78%, transparent 88%)'
            : isGreen
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(0,255,65,0.2) 38%, rgba(0,153,39,0.4) 52%, rgba(0,102,26,0.6) 66%, rgba(0,51,13,0.8) 78%, transparent 88%)'
            : isYellow
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(255,255,0,0.2) 38%, rgba(204,204,0,0.4) 52%, rgba(153,153,0,0.6) 66%, rgba(102,102,0,0.8) 78%, transparent 88%)'
            : isOrange
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(255,165,0,0.2) 38%, rgba(204,132,0,0.4) 52%, rgba(153,99,0,0.6) 66%, rgba(102,66,0,0.8) 78%, transparent 88%)'
            : isPurple
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(128,0,128,0.2) 38%, rgba(102,0,102,0.4) 52%, rgba(76,0,76,0.6) 66%, rgba(51,0,51,0.8) 78%, transparent 88%)'
            : isPink
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(255,192,203,0.2) 38%, rgba(204,153,162,0.4) 52%, rgba(153,115,122,0.6) 66%, rgba(102,76,81,0.8) 78%, transparent 88%)'
            : isBrown
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(124,88,11,0.2) 38%, rgba(99,70,9,0.4) 52%, rgba(74,53,7,0.6) 66%, rgba(50,35,5,0.8) 78%, transparent 88%)'
            : isBlack
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(50,50,50,0.2) 38%, rgba(40,40,40,0.4) 52%, rgba(30,30,30,0.6) 66%, rgba(20,20,20,0.8) 78%, transparent 88%)'
            : isWhite
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(255,255,255,0.2) 38%, rgba(200,200,200,0.4) 52%, rgba(150,150,150,0.6) 66%, rgba(100,100,100,0.8) 78%, transparent 88%)'
            : 'radial-gradient(ellipse at center, transparent 20%, rgba(220,20,60,0.25) 38%, rgba(139,0,0,0.5) 52%, rgba(60,0,0,0.7) 66%, rgba(15,0,0,0.85) 78%, transparent 88%)',
          animationDelay: isGreen ? '4s' : isYellow ? '1s' : isOrange ? '1.5s' : isPurple ? '2s' : isPink ? '2s' : isBrown ? '1.8s' : isBlack ? '0s' : isWhite ? '1.5s' : '1s',
          animationDuration: isGreen ? '24s' : isYellow ? '14s' : isOrange ? '16s' : isPurple ? '20s' : isPink ? '18s' : isBrown ? '17s' : isBlack ? '30s' : isWhite ? '22s' : undefined
        }}
      />


      {/* Textura granulada*/}
      <div 
        className="absolute inset-0 opacity-100 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.95'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Overlay final para ajuste de profundidade - preto profundo */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.95) 100%)'
        }}
      />
      
      {/* Efeito hipnótico - energia irradiando do centro */}
      <div 
        className={`absolute inset-0 pointer-events-none ${isBlue ? 'animate-wave-ripple' : isGreen ? 'animate-nature-pulse' : isPurple ? 'animate-deep-breath' : isWhite ? 'animate-wave-ripple' : 'animate-pulse-slow'}`}
        style={{
          background: isBlue
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 15%, rgba(0,102,255,0.15) 30%, transparent 50%)'
            : isGreen
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 15%, rgba(0,255,65,0.12) 30%, transparent 50%)'
            : isYellow
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 15%, rgba(255,255,0,0.18) 30%, transparent 50%)'
            : isOrange
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 15%, rgba(255,165,0,0.16) 30%, transparent 50%)'
            : isPurple
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 15%, rgba(128,0,128,0.14) 30%, transparent 50%)'
            : isPink
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 15%, rgba(255,192,203,0.15) 30%, transparent 50%)'
            : isBrown
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 15%, rgba(124,88,11,0.14) 30%, transparent 50%)'
            : isBlack
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 15%, rgba(50,50,50,0.08) 30%, transparent 50%)'
            : isWhite
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 15%, rgba(200,200,200,0.25) 30%, transparent 50%)'
            : 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 15%, rgba(220,20,60,0.1) 30%, transparent 50%)',
          animationDelay: isGreen ? '8s' : isYellow ? '3s' : isOrange ? '4s' : isPurple ? '5s' : isPink ? '4s' : isBrown ? '3.5s' : isBlack ? '0s' : isWhite ? '3s' : '2s',
          animationDuration: isGreen ? '32s' : isYellow ? '18s' : isOrange ? '20s' : isPurple ? '24s' : isPink ? '22s' : isBrown ? '21s' : isBlack ? '40s' : isWhite ? '26s' : undefined
        }}
      />
    </div>
  );
}