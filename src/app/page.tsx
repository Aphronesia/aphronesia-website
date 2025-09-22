import Link from "next/link";

import Header from '@/app/header'
import Footer from '@/app/footer'

export default function Home() {

  return (
    <main>

      <Header />

      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo à Aphronesia</h2>
        <p className="text-lg max-w-2xl mb-6">
          Somos uma equipe apaixonada por criar experiências de jogos únicas e inovadoras. 🚀
        </p>
        <Link href="/projetos" className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
          Ver Projetos
        </Link>
      </section>

      <Footer />

    </main>
  );
}