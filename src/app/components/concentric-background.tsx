'use client';

interface ConcentricBackgroundProps {
  color: string;
}

export default function ConcentricBackground({ color }: ConcentricBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">    

      {/* Camadas concêntricas de vermelho vivo - ondas/vibrações */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Camada 1 - mais próxima do centro - vermelho intenso */}
        <div 
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: '420px',
            height: '420px',
            background: `radial-gradient(circle, ${color}80 0%, ${color}40 50%, transparent 100%)`,
            boxShadow: 'inset 0 0 100px rgba(51, 14, 14, 0.5)',
            animationDuration: '5s'
          }}
        />
        
        {/* Camada 2 - vermelho vivo */}
        <div 
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: '680px',
            height: '680px',
            background: `radial-gradient(circle, transparent 20%, ${color}75 40%, ${color}35 60%, transparent 100%)`,
            animationDuration: '10s'
          }}
        />
        
        {/* Camada 3 */}
        <div 
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: '940px',
            height: '940px',
            background: `radial-gradient(circle, transparent 30%, ${color}65 45%, ${color}28 65%, transparent 100%)`,
            animationDuration: '5s'
          }}
        />
        
        {/* Camada 4 */}
        <div 
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: '1200px',
            height: '1200px',
            background: `radial-gradient(circle, transparent 35%, ${color}55 48%, ${color}22 68%, transparent 100%)`,
            animationDuration: '5s'
          }}
        />
        
        {/* Camada 5 */}
        <div 
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: '1460px',
            height: '1460px',
            background: `radial-gradient(circle, transparent 40%, ${color}45 50%, ${color}18 70%, transparent 100%)`,
            animationDelay: '1.5s',
            animationDuration: '10s'
          }}
        />
        
        {/* Camada 6 - borda externa - vermelho mais escuro */}
        <div 
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: '1750px',
            height: '1750px',
             background: `radial-gradient(circle, transparent 42%, ${color}35 52%, ${color}15 72%, transparent 100%)`,
            animationDelay: '2s',
            animationDuration: '20s'
          }}
        />
      </div>

        {/* Gradiente de borda - vermelho intenso para preto MUITO profundo */}
        <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(139,0,0,0.2) 45%, #8b0000 60%, #5c0000 70%, #2d0000 80%, #0f0000 90%, #000000 100%)'
        }}
      />
      
      {/* Intensificação do vermelho nas bordas internas - com transição para preto */}
      <div 
        className="absolute inset-0 pointer-events-none animate-pulse-slow"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(220,20,60,0.25) 38%, rgba(139,0,0,0.5) 52%, rgba(60,0,0,0.7) 66%, rgba(15,0,0,0.85) 78%, transparent 88%)',
          animationDelay: '1s'
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
        className="absolute inset-0 pointer-events-none animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 15%, rgba(220,20,60,0.1) 30%, transparent 50%)',
          animationDelay: '2s'
        }}
      />
    </div>
  );
}