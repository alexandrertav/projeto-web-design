'use client';

import Image from 'next/image';
import { Movie } from '@/app/data/colors';

interface MovieCardProps {
  movie: Movie;
  accentColor: string;
}

export default function MovieCard({ movie, accentColor }: MovieCardProps) {
  return (
    <div className="mb-16">
      {/* Título do filme */}
      <h2 className="movie-title">
        {movie.title}
      </h2>

      {/* Imagem do filme */}
      <div className="relative aspect-video overflow-hidden bg-gray-800 mb-6 rounded-lg">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1024px"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-movie.svg';
          }}
        />
      </div>

      {/* Explicação detalhada */}
      <p className="movie-description">
        <span className="font-bold" style={{ color: accentColor }}>
          O {accentColor === '#FF0000' ? 'vermelho' : 'cor'}
        </span> {movie.colorExplanation}
      </p>
    </div>
  );
}

