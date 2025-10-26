import { Droplet } from 'lucide-react';

interface ColorHeaderProps {
  name: string;
  hexColor: string;
  description: string;
}

export default function ColorHeader({ 
  name, 
  hexColor, 
  description 
}: ColorHeaderProps) {
  return (
    <div className="relative z-10 mb-16 animate-fade-in-up">
      <div className="glass-card p-8 sm:p-10">
        {/* Accent line no topo */}
        <div 
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${hexColor}, transparent)`
          }}
        />
        
        {/* Ícone da cor */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="p-4 rounded-2xl backdrop-blur-xl border-2 shadow-2xl"
            style={{
              borderColor: `${hexColor}60`,
              background: `linear-gradient(135deg, ${hexColor}20, ${hexColor}05)`,
              boxShadow: `0 0 40px ${hexColor}40`
            }}
          >
            <Droplet 
              className="w-10 h-10" 
              style={{ 
                color: hexColor,
                filter: `drop-shadow(0 0 12px ${hexColor})`
              }}
            />
          </div>
          
          <div>
            <h1 
              className="color-name mb-0"
              style={{ 
                color: hexColor,
                textShadow: `0 0 40px ${hexColor}80, 0 0 20px ${hexColor}60`
              }}
            >
              {name}
            </h1>
          </div>
        </div>

        {/* Descrição */}
        <p className="movie-description">
          <span 
            className="font-bold text-xl"
            style={{ 
              color: hexColor,
              textShadow: `0 0 20px ${hexColor}60`
            }}
          >
            O {name.toLowerCase()}
          </span>{' '}
          {description}
        </p>
      </div>
    </div>
  );
}
