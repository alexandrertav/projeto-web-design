import Link from 'next/link';

export default function ColorPageLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen bg-black">
      {/* Navegação */}
      <nav className="p-6 border-b border-gray-800">
        <Link 
          href="/" 
          className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
        >
          ← Voltar
        </Link>
      </nav>

      {children}
    </div>
  );
}
