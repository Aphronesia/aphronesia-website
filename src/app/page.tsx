// app/page.tsx - Apenas estrutura HTML básica
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <h1>Aphronesia</h1>
          <div>
            <Link href="/">Home</Link>
            <Link href="/projetos">Projetos</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </nav>
      </header>


      <section>
        <h2>Bem-vindo à Aphronesia</h2>
        <p>Somos uma equipe apaixonada por criar experiências de jogos únicas e inovadoras. 🚀</p>
        <Link href="/projetos">Ver Projetos</Link>
      </section>


      <footer>
        <p>© {new Date().getFullYear()} Aphronesia. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}