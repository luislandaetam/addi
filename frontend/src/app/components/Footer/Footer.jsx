import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../public/logo_Main.png'

export function Footer() {
  return (
    <footer className='flex flex-row justify-between text-home-gray-subtexts mt-20 mb-10'>
      <div id='companySection' className='flex flex-col w-2/6'>
        <Image src={logo} alt='Addi Logo' className='w-2/5 my-5' />
        <p className='my-4'>Addi 2023. Todos los derechos reservados.</p>
        <p>soporte@addi.com</p>
      </div>

      <div id='addiSection' className='flex flex-col w-1/6'>
        <h3 className='text-home-black-letters font-bold my-5'>ADDI</h3>
        <ul>
          <li>
            <Link href='#'>Contáctanos</Link>
          </li>
          <li>
            <Link href='#'>Política de Privacidad</Link>
          </li>
          <li>
            <Link href='#'>Términos y Condiciones</Link>
          </li>
          <li>
            <Link href='#'>Política de Seguridad</Link>
          </li>
          <li>
            <Link href='#'>Contrataciones</Link>
          </li>
        </ul>
      </div>
      <div id='productsSection' className='flex flex-col w-1/6'>
        <h3 className='text-home-black-letters font-bold my-5'>PRODUCTOS</h3>
        <ul>
          <li>
            <Link href='#'>Precios</Link>
          </li>
          <li>
            <Link href='#'>Otros Servicios</Link>
          </li>
        </ul>
      </div>
      <div id='integrationsSection' className='flex flex-col w-1/6'>
        <h3 className='text-home-black-letters font-bold my-5'>
          INTEGRACIONES
        </h3>
        <ul>
          <li>
            <Link href='#'>Instagram</Link>
          </li>
          <li>
            <Link href='#'>Facebook</Link>
          </li>
          <li>
            <Link href='#'>WhatsApp</Link>
          </li>
          <li>
            <Link href='#'>Telegram</Link>
          </li>
          <li>
            <Link href='#'>Webpage</Link>
          </li>
          <li>
            <Link href='#'>Mensajes de Texto</Link>
          </li>
        </ul>
      </div>
      <div id='resourcesSection' className='flex flex-col w-1/6'>
        <h3 className='text-home-black-letters font-bold my-5'>RECURSOS</h3>
        <ul>
          <li>
            <Link href='#'>Blog</Link>
          </li>
          <li>
            <Link href='#'>FAQ's</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
