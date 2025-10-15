import MovieCard from './MovieCard';
import { Movie } from '@/app/data/colors';

interface MovieGridProps {
  movies: Movie[];
  colorHex: string;
}

export default function MovieGrid({ movies, colorHex }: MovieGridProps) {
  return (
    <section className="mt-12">
      {/* Filmes em sequência, estilo editorial */}
      <div className="max-w-4xl">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            accentColor={colorHex}
          />
        ))}
      </div>
    </section>
  );
}

