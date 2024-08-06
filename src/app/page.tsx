'use client'
import React, {useEffect, useState} from 'react'

// Components.
import {About, Projects, Contacts, AsideBar} from '@/components'

// Api.
import {fetchApi} from '@/lib/api'

// Interfaces.
import {IRepository} from '@/lib/interfaces'

// Types
import {InformationOptions, ProjectOptions} from '@/lib/types'

interface IOptionState {
  showComponent: InformationOptions
  showProject: ProjectOptions
}

/**
 * Development branch @version 0.1.2
 * Responsive design branch @version 0.0.1
 * Component that renders a window with general features.
 * @returns {Promise<JSX.Element>}
 */
export default function Home(): JSX.Element {
  const [options, setOptions] = useState<IOptionState>({
    showComponent: 'about-me',
    showProject: 'y-social-media',
  })

  const [repositories, setRepositories] = useState<IRepository[]>([])

  useEffect(() => {
    const fetchRepositories = async () => {
      const repositories = await fetchApi({
        option: 'get-repo',
        repos: ['y-social-media', 'star-wars-planets', 'language-school'],
      })

      setRepositories(repositories.data)
    }

    fetchRepositories()
  }, [])

  const handleComponentClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const {id} = event.target as HTMLElement
    setOptions((prev) => ({...prev, showComponent: id as InformationOptions}))
  }

  const handleProjectClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const {id} = event.target as HTMLElement
    setOptions((prev) => ({
      ...prev,
      showProject: id as ProjectOptions,
    }))
  }

  return (
    <main className="app-pg">
      <AsideBar handleClick={handleComponentClick} />
      {options.showComponent === 'about-me' && <About />}
      {options.showComponent === 'projects' && (
        <Projects
          repos={repositories}
          handleClick={handleProjectClick}
          showProject={options.showProject}
        />
      )}
      {options.showComponent === 'contacts' && <Contacts />}
    </main>
  )
}
