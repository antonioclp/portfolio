'use client'
import Image from 'next/image'

// Style.
import '@/styles/components/asidebar.css'
import '@/styles/responsive/components/asidebar.responsive.css'

/**
 * Aside component that renders some links and informations.
 * @returns {Promise<JSX.Element>}
 */
export default function AsideBar({
  handleClick,
}: {
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}): JSX.Element {
  return (
    <aside className="aside-leftbar">
      <section>
        <Image
          src="/photos/photo.jpg"
          alt="antonio santana"
          width={120}
          height={120}
          priority
        />
      </section>
      <section>
        <h4>ANTONIO SANTANA</h4>
        <h5>SOFTWARE ENGINEER</h5>
      </section>
      <section>
        <div>
          <span id="about-me" onClick={(e) => handleClick(e)}>
            Sobre mim
          </span>
        </div>
        <div>
          <span id="projects" onClick={(e) => handleClick(e)}>
            Projetos
          </span>
        </div>
        <div>
          <span id="contacts" onClick={(e) => handleClick(e)}>
            Contatos
          </span>
        </div>
      </section>
    </aside>
  )
}
