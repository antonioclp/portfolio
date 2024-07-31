// Interfaces.
import {IRepository} from '@/lib/interfaces'

export default function Projects(repos: IRepository[]): JSX.Element {
  return (
    <section>
      {repos.map((r) => {
        return <span key={r.id}>{r.name}</span>
      })}
    </section>
  )
}
