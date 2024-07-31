import Image from 'next/image'

// Interfaces.
import {IRepository} from '@/lib/interfaces'

// Types.
import {ProjectOptions} from '@/lib/types'

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

  return (
    <section>
      {selected && (
        <section>
          <h3>{selected.name}</h3>
          <span>{selected.description}</span>
          <Image
            src="/photos/photo.jpg"
            alt={selected.name}
            width={50}
            height={50}
          />
          <span>{selected.language}</span>
        </section>
      )}
      {repos.map((r) => {
        return (
          <span key={r.id} id={r.name} onClick={(e) => handleClick(e)}>
            {r.name}
          </span>
        )
      })}
    </section>
  )
}
