'use client'
import React, {useState} from 'react'

// Components.
import LeftBar from '@/components/LeftBar'

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

    setOptions(id as InformationOption);
  }

  return (
    <main>
      <span>Home</span>
      <section>
        <LeftBar handleClick={handleClick} />
        {
          options
        }
      </section>
    </main>
  )
}
