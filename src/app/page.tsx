'use client'
import React, {useEffect, useState} from 'react'

// Components.
import {LeftBar, About, Projects} from '@/components'

// Api.
import {fetchApi} from '@/lib/api'

// Interfaces.
import {IRepository} from '@/lib/interfaces'

// Types
import {InformationOptions, ProjectOptions} from '@/lib/types'

interface IOptionState {
  showComponent: InformationOptions
  showProjectComponent: ProjectOptions
}

/**
 * Development branch @version 0.1.0
 * Front-end development branch @version 0.1
 * Component that renders a window with general features.
 * @returns {Promise<JSX.Element>}
 */
export default function Home(): JSX.Element {
  const [options, setOptions] = useState<IOptionState>({
    showComponent: 'about-me',
    showProjectComponent: 'y-social-media',
  })

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

  const handleComponentClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const {id} = event.target as HTMLElement
    console.log(id)
    setOptions((prev) => ({...prev, showComponent: id as InformationOptions}))
  }

  const handleProjectClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const {id} = event.target as HTMLElement
    console.log(id)
    setOptions((prev) => ({
      ...prev,
      showProjectComponent: id as ProjectOptions,
    }))
  }

  return (
    <main>
      <section>
        <LeftBar handleClick={handleComponentClick} />
        {options.showComponent === 'about-me' && <About />}
        {options.showComponent === 'projects' && (
          <Projects repos={repositories} handleClick={handleProjectClick} />
        )}
        {options.showComponent === 'contacts' && <span>Contacts</span>}
      </section>
    </main>
  )
}
