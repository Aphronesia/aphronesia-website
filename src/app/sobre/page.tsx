import Link from "next/link";
import Header from '@/components/header'
import Footer from '@/components/footer'

import Image from 'next/image';

import logo01 from '@/assets/home/logo-01.png'
export default function Home() {
    return (
        <main>
            <Header/>

            <section className="place-items-center">
                <div className="">

                    <Image
                        src={logo01}
                        alt="Logo da equipe Aphronesia"
                        width={500}
                    />
                </div>
            </section>
            
            <Footer />
        </main>
    )
}