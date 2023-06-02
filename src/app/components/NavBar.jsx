import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo_Main.png'

const links = [
  { name: 'Precios', url: '/prices' },
  { name: 'Contáctanos', url: '/contact' },
  { name: 'Blog', url: '/blog', resources: true },
  { name: 'FAQs', url: '/faqs', resources: true }
]

export function NavBar() {
  return (
    <nav>
      <Image src={logo} alt='Addi Logo' />
      <ul>
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
