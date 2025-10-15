'use client';

import { useRouter } from 'next/navigation';

interface ColorData {
  name: string;
  color: string;
}

const colors: ColorData[] = [
  {
    name: 'Vermelho',
    color: '#FF0000'
  }
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background*/}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-transparent pointer-events-none"></div>
      
      <main className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Psicologia das Cores
          </h1>
        </div>

        {/* Cores */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-12 px-4">
          {colors.map((colorData) => (
            <button
              key={colorData.name}
              onClick={() => {
                router.push(`/color/${colorData.name.toLowerCase()}`);
              }}
              className="group relative aspect-square w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
              style={{
                backgroundColor: colorData.color,
                border: colorData.color === '#FFFFFF' ? '2px solid #333' : 'none',
                boxShadow: `0 10px 40px ${colorData.color}40`
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                  {colorData.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Projeto de Web Design - Psicologia das Cores</p>
        </div>
      </main>
    </div>
  );
}
