// Estrutura inicial de um site de equipe de desenvolvimento usando Next.js + Tailwind + TS

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">Aphronesia</h1>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/projetos" className="hover:text-blue-500">Projetos</Link>
            <Link href="/sobre" className="hover:text-blue-500">Sobre</Link>
            <Link href="/contato" className="hover:text-blue-500">Contato</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo à Aphronesia Studio</h2>
        <p className="text-lg max-w-2xl mb-6">
          Somos uma equipe apaixonada por criar experiências de jogos únicas e inovadoras. 🚀
        </p>
        <Link href="/projetos" className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
          Ver Projetos
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center mt-10">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Aphronesia. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
