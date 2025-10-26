'use client';

import Image from 'next/image';
import { Movie } from '@/app/data/colors';
import { Film } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  accentColor: string;
}

export default function MovieCard({ movie, accentColor }: MovieCardProps) {
  return (
    <article className="glass-card p-6 sm:p-8 group">
      {/* Linha de acento */}
      <div 
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`
        }}
      />

      {/* Título */}
      <div className="flex items-start gap-3 mb-6">
        <div 
          className="p-3 rounded-xl backdrop-blur-xl border-2 shadow-lg flex-shrink-0"
          style={{
            borderColor: `${accentColor}60`,
            background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}05)`,
            boxShadow: `0 0 20px ${accentColor}30`
          }}
        >
          <Film 
            className="w-6 h-6" 
            style={{ 
              color: accentColor,
              filter: `drop-shadow(0 0 6px ${accentColor})`
            }}
          />
        </div>
        
        <div className="flex-1">
          <h2 className="movie-title mb-0">
            {movie.title}
          </h2>
        </div>
      </div>

      {/* Imagem */}
      <div className="relative aspect-video overflow-hidden rounded-xl border-2 mb-6 shadow-2xl group-hover:border-opacity-60 transition-all duration-300" 
        style={{ borderColor: `${accentColor}40` }}>
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 1024px"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-movie.svg';
          }}
        />
        
        {/* Overlay gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top, ${accentColor}40 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Descrição */}
      <p className="movie-description">
        <span 
          className="font-bold text-lg"
          style={{ 
            color: accentColor,
            textShadow: `0 0 20px ${accentColor}40`
          }}
        >
          A cor
        </span>{' '}
        {movie.colorExplanation}
      </p>
    </article>
  );
}
