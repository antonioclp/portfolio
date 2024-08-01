// Styles.
import '@/styles/components/about.css'

/**
 * About component that renders a information and description.
 * @returns {JXS.Element}
 */
export default function About(): JSX.Element {
  return (
    <article className="about-comp">
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
        <div>
          <div>
            <h4>Trybe</h4>
            <h4>2023</h4>
            <h5>Desenvolvimento Web Fullstack</h5>
            <div className="timeline">
              <span className="circle"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>DIO - Bootcamp Santander</h4>
            <h4>2023</h4>
            <h5>Java + Angular</h5>
            <div className="timeline">
              <span className="circle"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>Trybe</h4>
            <h4>2024</h4>
            <h5>Aceleração Java</h5>
            <div className="timeline">
              <span className="circle"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>Faculdade UniFacid Wyden</h4>
            <h4>2024</h4>
            <h5>Análise e Desenvolvimento de Sistemas</h5>
            <div className="timeline">
              <span className="circle"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
