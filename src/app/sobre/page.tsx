import Link from "next/link";
import Header from '@/app/header'
import Footer from '@/app/footer'

export default function Home() {
    return (
        <main>
            <Header/>

            <section>
                <h1>Sobre</h1>
            </section>
            
            <Footer />
        </main>
    )
}