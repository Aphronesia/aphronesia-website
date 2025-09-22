import Link from "next/link";
import Header from '@/components/header'
import Footer from '@/components/footer'

import Image from 'next/image';

import fading01 from '@/assets/projetos/Fading-01.png'
export default function Home() {
    return (
        <main>
            <Header />

            <section className="bg-violet-950 items-center justify-center text-center place-items-center">
                <h2 className="text-4xl font-bold h-15">Projetos</h2>
                <h3 className="text-3xl font-bold h-15">Fading</h3>


                <div className="flex flex-wrap">
                    <div className="">
                        <Image
                            src={fading01}
                            alt={""}
                            width={400}
                            height={225}
                        />
                    </div>
                    <div className=" box-content size-128 border-1 p-0">
                        <p className="text-2xl font-serif"> Fading é um jogo de aventura 2D feito no motor gráfico Unity. Em um futuro quase pós-apocaliptico, o jogo coloca o jogador na pele de engenheiro responsável pela criação de uma maquina que fornecia energia para o mundo inteiro, mas que em dado momento essa deu pane e começou a destruir tudo, acabando com os recursos da terra. Você então é mandado ir até a máquina corrigir o problema, mas terá que enfrentar diversos seres criados pela máquina após a pane que irão atrapalhar o seu caminho</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}