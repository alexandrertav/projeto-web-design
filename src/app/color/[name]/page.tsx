import { colorsData } from '@/app/data/colors';
import ColorHeader from '@/app/components/ColorHeader';
import MovieGrid from '@/app/components/MovieGrid';

export default async function ColorPage({ 
  params 
}: { 
  params: Promise<{ name: string }> 
}) {
  const { name } = await params;
  
  // Busca dados da cor
  const colorData = colorsData.find(color => color.id === name);
  
  // Se não encontrar, retorna null
  if (!colorData) {
    return null;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
      {/* Cabeçalho com título e descrição */}
      <ColorHeader 
        name={colorData.name}
        hexColor={colorData.hexColor}
        description={colorData.description}
      />

      {/* Filmes */}
      <MovieGrid 
        movies={colorData.movies}
        colorHex={colorData.hexColor}
      />
    </main>
  );
}
