import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../public/logo_Main.png'
import shoppingCart from '../../../../public/shopping-cart.png'

export function NavBar() {
  return (
    <nav className='flex flex-row justify-between items-center text-home-black-letters mt-10 mb-20'>
      <Image src={logo} alt='Addi Logo' className='w-1/12' />
      <div>
        <ul className='flex flex-row items-center justify-evenly gap-2'>
          <li className=''>
            <Link href='/prices'>Precios</Link>
          </li>
          <li>
            <Link href='/contact'>Contáctanos</Link>
          </li>
          <li>
            <Link href='#'>Precios</Link>
          </li>
          <li>
            <Link href='#'>Iniciar Sesión</Link>
          </li>
          <li className='rounded-lg border border-solid border-home-blue-addi px-5'>
            <Link href='/free-trial'>Prueba Gratis</Link>
          </li>
          <li className='w-1/12'>
            <Link href='#'>
              <Image
                src={shoppingCart}
                alt='Shopping Cart Icon'
                className='w-1/2'
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
