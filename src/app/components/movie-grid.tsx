import { Movie, ColorData } from '@/app/data/colors';
import MovieCard from './movie-card';
import { Film } from 'lucide-react';

interface MovieGridProps {
  movies: Movie[];
  colorHex: string;
  colorData: ColorData;
}

export default function MovieGrid({ movies, colorHex, colorData }: MovieGridProps) {
  return (
    <section className="relative z-10 mt-12">
      {/* Header da seção */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <Film className="w-6 h-6" style={{ color: colorHex }} />
          <h2 className="text-3xl font-bold text-white">
            No Cinema
          </h2>
          <Film className="w-6 h-6" style={{ color: colorHex }} />
        </div>
        <p className="text-gray-300">
          Cenas icônicas onde esta cor conta histórias
        </p>
      </div>

      {/* Grid de filmes */}
      <div className="space-y-12">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id}
            movie={movie}
            accentColor={colorHex}
            colorData={colorData}
          />
        ))}
      </div>
    </section>
  );
}
