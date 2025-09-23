import Link from "next/link";
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <main>
            <Header/>

            <section className="bg-violet-950 items-center justify-center text-center place-items-center">
                <h2 className="text-4xl font-bold h-15">Redes Sociais</h2>
                <div className="">
                    
                    <div>
                        <a href="https://github.com/Aphronesia">GitHub</a>
                    </div>
                    <div>
                        <a href="https://x.com/Aphronesia">X (antigo Twitter)</a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/Aphronesia.studio">Instagram</a>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    )
}