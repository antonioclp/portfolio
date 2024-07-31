'use client'
import Image from 'next/image'

/**
 * Aside component that renders some links and informations.
 * @returns {Promise<JSX.Element>}
 */
export default function LeftBar({
  handleClick,
}: {
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}): JSX.Element {
  return (
    <aside>
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
