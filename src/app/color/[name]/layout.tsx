import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function ColorPageLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen relative">
      {/* Navegação fixa no topo */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Botão voltar */}
            <Link 
              href="/" 
              className="glass-card px-4 py-2 flex items-center gap-2 text-white hover:text-purple-300 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Voltar</span>
            </Link>

            {/* Botão home */}
            <Link 
              href="/" 
              className="glass-card p-2 flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300"
              title="Página Inicial"
            >
              <Home className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Conteúdo com padding-top para compensar a nav fixa */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}
