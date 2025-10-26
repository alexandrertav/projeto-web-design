'use client';

interface ConcentricBackgroundProps {
  color: string;
}

export default function ConcentricBackground({ color }: ConcentricBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Base escura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Círculos concêntricos */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Círculo 1 - Centro brilhante */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '150px',
            height: '150px',
            background: `radial-gradient(circle, ${color}80 0%, ${color}40 50%, transparent 100%)`,
            boxShadow: `0 0 100px ${color}60`,
            animation: 'pulse-slow 4s ease-in-out infinite'
          }}
        />
        
        {/* Círculo 2 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '350px',
            height: '350px',
            background: `radial-gradient(circle, transparent 20%, ${color}50 40%, ${color}25 60%, transparent 100%)`,
            animation: 'pulse-slow 5s ease-in-out infinite',
            animationDelay: '0.5s'
          }}
        />
        
        {/* Círculo 3 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '550px',
            height: '550px',
            background: `radial-gradient(circle, transparent 30%, ${color}40 45%, ${color}20 65%, transparent 100%)`,
            animation: 'pulse-slow 6s ease-in-out infinite',
            animationDelay: '1s'
          }}
        />
        
        {/* Círculo 4 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '750px',
            height: '750px',
            background: `radial-gradient(circle, transparent 35%, ${color}35 48%, ${color}18 68%, transparent 100%)`,
            animation: 'pulse-slow 7s ease-in-out infinite',
            animationDelay: '1.5s'
          }}
        />
        
        {/* Círculo 5 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '950px',
            height: '950px',
            background: `radial-gradient(circle, transparent 40%, ${color}30 50%, ${color}15 70%, transparent 100%)`,
            animation: 'pulse-slow 8s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
        
        {/* Círculo 6 - Mais externo */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1150px',
            height: '1150px',
            background: `radial-gradient(circle, transparent 42%, ${color}25 52%, ${color}12 72%, transparent 100%)`,
            animation: 'pulse-slow 9s ease-in-out infinite',
            animationDelay: '2.5s'
          }}
        />
      </div>

      {/* Efeito de grão/textura por cima */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20700%20700'%20width='700'%20height='700'%20opacity='1'%3E%3Cdefs%3E%3Cfilter%20id='nnnoise-filter'%20x='-20%25'%20y='-20%25'%20width='140%25'%20height='140%25'%20filterUnits='objectBoundingBox'%20primitiveUnits='userSpaceOnUse'%20color-interpolation-filters='linearRGB'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.05'%20numOctaves='4'%20seed='15'%20stitchTiles='stitch'%20/%3E%3CfeSpecularLighting%20surfaceScale='11'%20specularConstant='1.1'%20specularExponent='20'%20lighting-color='%23d0021b'%20x='0%25'%20y='0%25'%20width='100%25'%20height='100%25'%20in='%20turbulence'%20result='specularLighting'%3E%3CfeDistantLight%20azimuth='3'%20elevation='93'%3E%3C/feDistantLight%3E%3C/feSpecularLighting%3E%3CfeColorMatrix%20type='saturate'%20values='0'%20x='0%25'%20y='0%25'%20width='100%25'%20height='100%25'%20in='='specularLighting'/%3E%3C/filter%3E%3C/defs%3E%3Crect%20width='700'%20height='700'%20fill='none'%20/%3E%3Crect%20width='700'%20height='700'%20fill='%23d0021b'%20filter='url(%23nnnoise-filter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            opacity: 0.15
          }}
      />

      {/* Vinheta nas bordas */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 20%, ${color}15 60%, black 100%)`
        }}
      />
    </div>
  );
}

