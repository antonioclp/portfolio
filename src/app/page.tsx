'use client'
import React, {useEffect, useState} from 'react'

// Components.
import {LeftBar, About, Projects} from '@/components'

// Api.
import {fetchApi} from '@/lib/api'

// Interfaces.
import {IRepository} from '@/lib/interfaces'

/**
 * Development branch @version 0.1.0
 * Front-end development branch @version 0.1
 * Component that renders a window with general features.
 * @returns {Promise<JSX.Element>}
 */
export default function Home(): JSX.Element {
  const [options, setOptions] = useState<InformationOption>('about-me')
  const [repositories, setRepositories] = useState<IRepository[]>([])

  useEffect(() => {
    const fetchRepositories = async () => {
      const repositories = await fetchApi({
        option: 'get-repo',
        repos: ['y-social-media', 'project-app-delivery', 'old-school'],
      })

      setRepositories(repositories.data)
    }

    fetchRepositories()
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const {id} = event.target as HTMLElement

    setOptions(id as InformationOption)
  }

  return (
    <main>
      <section>
        <LeftBar handleClick={handleClick} />
        {options === 'about-me' && <About />}
        {options === 'projects' && <Projects repos={repositories} />}
        {options === 'contacts' && <span>Contacts</span>}
      </section>
    </main>
  )
}
