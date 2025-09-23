import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white dark:bg-neutral-900 shadow-md sticky top-0 z-50">
            <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-blue-600">Aphronesia</h1>
                <div className="flex gap-6">
                    <Link href="/" className="hover:text-blue-500 transition-colors;">Home</Link>
                    <Link href="/projetos" className="hover:text-blue-500 transition-colors;">Projetos</Link>
                    <Link href="/sobre" className="hover:text-blue-500 transition-colors;">Sobre</Link>
                    <Link href="/redes" className="hover:text-blue-500 transition-colors;">Redes Sociais</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;