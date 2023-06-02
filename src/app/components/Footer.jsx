import Link from 'next/link'
import logo from '../../../public/logo_Main.png'

export function Footer() {
  return (
    <footer>
      <div id='companySection'>
        <Image src={logo} alt='Addi Logo' />
        <p>Addi 2023. Todos los derechos reservados.</p>
        <p>soporte@addi.com</p>
      </div>
      <div id='addiSection'>
        <h3>ADDI</h3>
        <ul>
          <li>
            <Link>Contáctanos</Link>
          </li>
          <li>
            <Link>Política de Privacidad</Link>
          </li>
          <li>
            <Link>Términos y Condiciones</Link>
          </li>
          <li>
            <Link>Política de Seguridad</Link>
          </li>
          <li>
            <Link>Contrataciones</Link>
          </li>
        </ul>
      </div>
      <div id='productsSection'>
        <h3>PRODUCTOS</h3>
        <ul>
          <li>
            <Link>Precios</Link>
          </li>
          <li>
            <Link>Otros Servicios</Link>
          </li>
        </ul>
      </div>
      <div id='integrationsSection'>
        <h3>INTEGRACIONES</h3>
        <ul>
          <li>
            <Link>Instagram</Link>
          </li>
          <li>
            <Link>Facebook</Link>
          </li>
          <li>
            <Link>WhatsApp</Link>
          </li>
          <li>
            <Link>Telegram</Link>
          </li>
          <li>
            <Link>Webpage</Link>
          </li>
          <li>
            <Link>Mensajes de Texto</Link>
          </li>
        </ul>
      </div>
      <div id='resourcesSection'>
        <h3>RECURSOS</h3>
        <ul>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>FAQ's</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
