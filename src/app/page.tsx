import {fetchApi} from '@/lib/api'
import { useEffect } from 'react'

/**
 * Development branch @version 0.1.0
 * Front-end development branch @version 0.1
 * Component that renders a window with general features.
 * @returns {Promise<JSX.Element>}
 */
export default async function Home(): Promise<JSX.Element> {
  const data = await fetchApi({
    option: 'get-repo',
    repos: ['y-social-media', 'project-app-delivery'],
  })

  console.log(data)
  return (
    <main>
      <span>Home</span>
    </main>
  )
}
