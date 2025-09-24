import Link from "next/link";
import Header from '@/components/header'
import Footer from '@/components/footer'

import Image from 'next/image';

import ricoposter from '@/assets/projetos/ricoposter.png'

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
                        <p className="text-2xl text-left font-serif"> Fading é um jogo de aventura 2D feito no motor gráfico Unity. Em um futuro quase pós-apocaliptico, o jogo coloca o jogador na pele de engenheiro responsável pela criação de uma maquina que fornecia energia para o mundo inteiro, mas que em dado momento essa deu pane e começou a destruir tudo, acabando com os recursos da terra. Você então é mandado ir até a máquina corrigir o problema, mas terá que enfrentar diversos seres criados pela máquina após a pane que irão atrapalhar o seu caminho</p>
                    </div>

                    <div className="basis-full"></div>

                    <div className="flex justify-end mt-8">
                        
                        <div>
                            <Image
                                src={ricoposter}
                                alt={""}
                                width={400}
                                height={224}
                            />
                        </div>
                        <div className=" box-content size-128 border-1 p-0">
                            <p className="text-2xl text-left font-serif"> Jogo de aventura 2D feito no motor gráfico Unity. Em um futuro em ruínas, junte-se ao Rico, uma capivara detetive que pode viajar no tempo, para descobrir o que aconteceu no mundo e como impedir a sua eventual destruição. Enfrentando os figurões egoístas que querem te impedir e passando por todo tipo de aventura para restaurar o mundo antes que ele colapse de novo. </p>
                        </div>
                    </div>

                </div>

            </section>

            <Footer />
        </main>
    )
}