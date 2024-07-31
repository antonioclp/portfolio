'use client'
import React, {useState} from 'react'

// Components.
import {LeftBar, About, Projects} from '@/components'

/**
 * Development branch @version 0.1.0
 * Front-end development branch @version 0.1
 * Component that renders a window with general features.
 * @returns {Promise<JSX.Element>}
 */
export default function Home(): JSX.Element {
  const [options, setOptions] = useState<InformationOption>('about-me')

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const {id} = event.target as HTMLElement

    setOptions(id as InformationOption)
  }

  return (
    <main>
      <section>
        <LeftBar handleClick={handleClick} />
        {options === 'about-me' && <About />}
        {options === 'projects' && <Projects />}
        {options === 'contacts' && <span>Contacts</span>}
      </section>
    </main>
  )
}
