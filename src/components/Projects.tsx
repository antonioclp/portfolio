// Interfaces.
import {IRepository} from '@/lib/interfaces'

interface IComponentProps {
  repos: IRepository[]
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export default function Projects({
  repos,
  handleClick,
}: IComponentProps): JSX.Element {
  return (
    <section>
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
