import Link from "next/link";
import Header from '@/components/header'
import Footer from '@/components/footer'

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