import Image from 'next/image'

// Styles.
import '@/styles/components/contacts.css'
import Link from 'next/link'

/**
 * Contacts component that renders a information about contacts.
 * @returns {JXS.Element}
 */
export default function Contacts(): JSX.Element {
  return (
    <section className="contacts-comp">
      <div>
        <Image
          src="/icons/github-icon.png"
          alt="github"
          width={20}
          height={20}
          priority
        />
        <Link href="https://github.com/antonioclp" target="_blank">
          <h3>Github</h3>
        </Link>
      </div>
      <div>
        <Image
          src="/icons/linkedin-icon.png"
          alt="linkedin"
          width={20}
          height={20}
          priority
        />
        <Link href="https://www.linkedin.com/in/antoniosgn/" target="_blank">
          <h3>Linkedin</h3>
        </Link>
      </div>
      <div>
        <Image
          src="/icons/gmail-icon.png"
          alt="email"
          width={20}
          height={20}
          priority
        />
        <h3>antonionetosg6@gmail.com</h3>
      </div>
    </section>
  )
}
