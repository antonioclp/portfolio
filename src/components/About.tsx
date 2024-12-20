import Link from 'next/link'
import Image from 'next/image'
import {IoMdDownload} from 'react-icons/io'

// Styles.
import '@/styles/components/about.css'

/**
 * About component that renders a information and description.
 * @returns {JXS.Element}
 */
export default function About({isMobile}: {isMobile: boolean}): JSX.Element {
  return (
    <article className="about-comp">
      <section>
        {isMobile && (
          <Image
            src="/photos/photo.jpg"
            alt="antonio santana"
            width={120}
            height={120}
            priority
          />
        )}
      </section>
      <section>
        <p>
          Desde os 16 anos apaixonado por tecnologia. Ao longo dos anos me
          dediquei a expandir meus conhecimentos em busca de novas oportunidades
          que me permitissem crescer profissionalmente. Tenho experiência em
          desenvolvimento front-end com React, bem como em back-end com Node.js
          e Java. Meu foco é o aprendizado contínuo que me fará contribuir em
          inúmeros projetos inovadores.
        </p>
      </section>
      <section>
        <Image
          src="/icons/nextjs-icon.png"
          alt="react"
          width={30}
          height={30}
          priority
        />
        <Image
          src="/icons/nodejs-icon.png"
          alt="react"
          width={30}
          height={30}
          priority
        />
        <Image
          src="/icons/reactjs-icon.png"
          alt="react"
          width={30}
          height={30}
          priority
        />
        <Image
          src="/icons/spring-icon.png"
          alt="react"
          width={30}
          height={30}
          priority
        />
      </section>
      <section>
        <Link href="/antonio-santana-cv.pdf" target="_blank" download>
          <IoMdDownload />
          BAIXAR CV
        </Link>
      </section>
      <section>
        <div>
          <div>
            <Link
              href="https://www.wyden.com.br/unidades/unifacid"
              target="_blank"
            >
              <h4>Faculdade UniFacid Wyden</h4>
            </Link>
            <h4>2024 {'(Cursando)'}</h4>
            <Link href="">
              <h5>Análise e Desenvolvimento de Sistemas</h5>
            </Link>
          </div>
          <div className="timeline">
            <span className="circle"></span>
            <span className="line"></span>
          </div>
        </div>
        <div>
          <div>
            <Link href="https://www.cre8language.com/" target="_blank">
              <h4>Cre8 Language</h4>
            </Link>
            <h4>2024 {'(Em andamento)'}</h4>
            <Link href="">
              <h5>Inglês A2 - B1</h5>
            </Link>
          </div>
          <div className="timeline">
            <span className="circle"></span>
            <span className="line"></span>
          </div>
        </div>
        <div>
          <div>
            <Link href="https://www.betrybe.com/" target="_blank">
              <h4>Trybe - Aceleração Java</h4>
            </Link>
            <h4>2024</h4>
            <Link
              href="https://www.credential.net/dfef7fa4-706f-4be1-a218-e92997eed83b"
              target="_blank"
            >
              <h5>Desenvolvimento back-end Java</h5>
            </Link>
          </div>
          <div className="timeline">
            <span className="circle"></span>
            <span className="line"></span>
          </div>
        </div>
        <div>
          <div>
            <Link href="https://www.dio.me/en" target="_blank">
              <h4>DIO - Bootcamp Santander</h4>
            </Link>
            <h4>2023 {'(115 horas)'}</h4>
            <Link
              href="https://www.dio.me/certificate/0C110A01/share"
              target="_blank"
            >
              <h5>Fullstack Java + Angular</h5>
            </Link>
          </div>
          <div className="timeline">
            <span className="circle"></span>
            <span className="line"></span>
          </div>
        </div>
        <div>
          <div>
            <Link href="https://www.betrybe.com/" target="_blank">
              <h4>Trybe</h4>
            </Link>
            <h4>2023 {'(1500 horas)'}</h4>
            <Link
              href="https://www.credential.net/0ae6637f-e78e-4494-b43d-8390ceccedfd"
              target="_blank"
            >
              <h5>Desenvolvimento Fullstack</h5>
            </Link>
          </div>
          <div className="timeline">
            <span className="circle"></span>
            <span className="line"></span>
          </div>
        </div>
      </section>
    </article>
  )
}
