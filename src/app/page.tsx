'use client'
import React, {useEffect, useState} from 'react'

// Components.
import {LeftBar, About, Projects, Contacts, Loading} from '@/components'

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
 * Front-end development branch @version 1.0
 * Responsive development branch @version 0.1.3-r
 * Component that renders a window with general features.
 * @returns {Promise<JSX.Element>}
 */
export default function Home(): JSX.Element {
  const [options, setOptions] = useState<IOptionState>({
    showComponent: 'about-me',
    showProject: 'y-social-media',
  })
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [repositories, setRepositories] = useState<IRepository[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  useEffect(() => {
    const fetchRepositories = async () => {
      const repositories = await fetchApi({
        option: 'get-repo',
        repos: ['y-social-media', 'star-wars-planets', 'language-school'],
      })

      setRepositories(repositories.data)
      setIsLoading(false)
    }

    const handleResize = () => {
      const width = document.documentElement.clientWidth

      setIsMobile(width <= 1080)
    }

    handleResize()
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

  const renderContent = () => {
    if (options.showComponent === 'about-me') {
      return <About isMobile={isMobile} />
    }

    if (options.showComponent === 'projects') {
      if (isLoading) {
        return <Loading />
      }
      return (
        <Projects
          repos={repositories}
          handleClick={handleProjectClick}
          showProject={options.showProject}
          isMobile={isMobile}
        />
      )
    }

    if (options.showComponent === 'contacts') {
      return <Contacts />
    }

    return null
  }

  return (
    <main className="app-pg">
      <LeftBar handleClick={handleComponentClick} isMobile={isMobile} />
      {renderContent()}
    </main>
  )
}
