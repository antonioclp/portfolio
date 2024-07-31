// Interfaces.
import {IRepository} from '@/lib/interfaces'

interface IComponentProps {
  repos: IRepository[]
}

export default function Projects({repos}: IComponentProps): JSX.Element {
  return (
    <section>
      {repos.map((r) => {
        return <span key={r.id}>{r.name}</span>
      })}
    </section>
  )
}
