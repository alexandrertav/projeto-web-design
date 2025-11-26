interface ColorHeaderProps {
  name: string;
  hexColor: string;
  description: string;
}

// Ajusta cores muito escuras para melhor contraste
function adjustDarkColor(hex: string): string {
  const colorMap: Record<string, string> = {
    '#0D0E0E': '#B0B0B0', // Preto → Cinza médio-claro
    '#7C580B': '#C9A068', // Marrom → Marrom claro
  };
  return colorMap[hex.toUpperCase()] || hex;
}

export default function ColorHeader({ 
  name, 
  hexColor, 
  description 
}: ColorHeaderProps) {
  return (
    <header className="relative z-10 mb-20 animate-fade-in-up">
      {/* Container principal com glass effect sutil */}
      <div className="relative overflow-hidden rounded-3xl backdrop-blur-sm bg-black/20 border border-white/10">
        
        {/* Linha de acento superior - minimalista */}
        <div 
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${hexColor}80, transparent)`
          }}
        />
        
        {/* Brilho lateral esquerdo */}
        <div 
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: hexColor }}
        />
        
        {/* Brilho lateral direito */}
        <div 
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: hexColor }}
        />

        {/* Conteúdo */}
        <div className="relative px-8 sm:px-12 py-10 sm:py-14">
          
          {/* Nome da cor - tipografia grande e elegante */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              {/* Indicador minimalista da cor */}
              <div 
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ 
                  backgroundColor: hexColor,
                  boxShadow: `0 0 20px ${hexColor}80, 0 0 40px ${hexColor}40`
                }}
              />
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-white/40">
                Psicologia das Cores
              </span>
            </div>
            
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight leading-none"
              style={{ 
                color: adjustDarkColor(hexColor),
                textShadow: `0 0 60px ${hexColor}40, 0 0 30px ${hexColor}30`,
                fontFamily: 'var(--font-montserrat)'
              }}
            >
              {name}
            </h1>
          </div>

          {/* Separador decorativo */}
          <div className="relative mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-32"
              style={{
                background: `linear-gradient(90deg, ${hexColor}80, transparent)`
              }}
            />
          </div>

          {/* Descrição com tipografia refinada */}
          <div className="max-w-3xl">
            <p 
              className="text-lg sm:text-xl leading-relaxed text-white/80 font-light"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              <span 
                className="font-medium"
                style={{ 
                  color: adjustDarkColor(hexColor),
                  filter: `drop-shadow(0 0 10px ${hexColor}40)`,
                  fontFamily: 'var(--font-montserrat), "Montserrat", sans-serif'
                }}
              >
                O {name.toLowerCase()}
              </span>{' '}
              {description}
            </p>
          </div>

          {/* Detalhe decorativo inferior */}
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <div 
              className="absolute inset-0 rounded-full blur-2xl"
              style={{ backgroundColor: hexColor }}
            />
          </div>
        </div>

        {/* Linha de acento inferior */}
        <div 
          className="absolute bottom-0 left-0 w-full h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${hexColor}60, transparent)`
          }}
        />
      </div>
    </header>
  );
}
