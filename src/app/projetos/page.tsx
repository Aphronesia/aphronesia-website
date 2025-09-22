import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* Header */}
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
                <h1>Projetos</h1>
            </section>
        </main>
    )
}