import Image from 'next/image'
import Link from 'next/link'

// Interfaces.
import {IRepository} from '@/lib/interfaces'

// Types.
import {ProjectOptions} from '@/lib/types'

// Styles.
import '@/styles/components/projects.css'

interface IComponentProps {
  repos: IRepository[]
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  showProject: ProjectOptions
}

export default function Projects({
  repos,
  handleClick,
  showProject,
}: IComponentProps): JSX.Element {
  const selected = repos.find((r) => r.name === showProject)

  const formatProjectName = (name: string): string => {
    if (name === 'y-social-media') return 'Y Social Media'

    if (name === 'star-wars-planets') return 'Star Wars Planets'

    if (name === 'language-school') return 'Language School'

    return ''
  }

  return (
    <section className="projects-comp">
      {selected && (
        <section>
          <div>
            <Link href={selected.html_url} target="_blank">
              <h3>{formatProjectName(selected.name)}</h3>
            </Link>
            <span>{selected.description}</span>
          </div>
          <div>
            <Link href={selected.html_url} target="_blank">
              <Image
                src={`/photos/${selected.name}.jpg`}
                alt={selected.name}
                width={400}
                height={200}
                priority
              />
            </Link>
          </div>
        </section>
      )}
      <section>
        {repos.map((r) => {
          return (
            <span key={r.id} id={r.name} onClick={(e) => handleClick(e)}>
              {formatProjectName(r.name)}
            </span>
          )
        })}
      </section>
    </section>
  )
}
