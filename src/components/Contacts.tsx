import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from 'emailjs-com'

// Style.
import '@/styles/components/contacts.css'

/**
 * Contacts component that renders a form to send emails.
 * @returns {JSX.Element}
 */
export default function Contacts(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        'service_zp8ncge',
        'template_7l2ptuh',
        formData,
        'gwHYyC59J18u_sdpT',
      )
      .then(
        (response) => {
          setStatus('Mensagem enviada com sucesso!')
        },
        (error) => {
          setStatus('Falha ao enviar a mensagem. Tente novamente.')
        },
      )
  }

  return (
    <section className="contacts-comp">
      <section>
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
      </section>
      <form onSubmit={handleSubmit}>
        <h2>ENTRE EM CONTATO</h2>
        <div>
          <label htmlFor="name">Subject</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            required
            
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  )
}
