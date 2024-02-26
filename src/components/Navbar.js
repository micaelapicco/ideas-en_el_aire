import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
const Navbar = () => {
  return (
    <div className='navbar bg-base-100 py-[20px] px-[30px] sticky top-0 z-10 justify-between'>
      <div className='navbar-start w-auto'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost xl:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-2xl'
          >
            <li>
              <Link href='/#programming'>Programación</Link>
            </li>
            <li>
              <Link href='/#records'>Canal</Link>
            </li>
            <li>
              <Link href='/#sponsors'>Sponsors</Link>
            </li>
            <li>
              <Link href='/san-marcos-sierras'>San Marcos Sierras</Link>
              <ul className='p-2'>
                <li>
                  <Link href='/san-marcos-sierras/#galery'>Galería</Link>
                </li>
                <li>
                  <Link href='/san-marcos-sierras/#institutes'>
                    Instituciones
                  </Link>
                </li>
                <li>
                  <Link href='/san-marcos-sierras/#location'>
                    ¿Cómo llegar?
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/quienes-somos'>Sobre nosotros</Link>
            </li>
          </ul>
        </div>
        <Link
          href='/'
          className='text-2xl flex items-center space-x-2'
        >
          <Image
            src='/logo-nav.svg'
            alt='Ideas en el aire logo'
            width={35}
            height={35}
          ></Image>
          <span className='font-semibold'>Ideas en el aire</span>
        </Link>
      </div>
      <div className='navbar-center hidden xl:flex'>
        <ul className='menu menu-horizontal px-1 text-xl flex-nowrap'>
          <li>
            <Link href='/#programming'>Programación</Link>
          </li>
          <li>
            <Link href='/#recorders'>Canal</Link>
          </li>
          <li>
            <Link href='/#sponsors'>Sponsors</Link>
          </li>
          <li>
            <details>
              <summary>
                <Link href='/san-marcos-sierras'>San Marcos Sierras</Link>
              </summary>
              <ul className='p-2'>
                <li>
                  <Link href='/san-marcos-sierras/#galery'>Galería</Link>
                </li>
                <li>
                  <Link href='/san-marcos-sierras/#institutes'>
                    Instituciones
                  </Link>
                </li>
                <li>
                  <Link href='/san-marcos-sierras/#location'>
                    ¿Cómo llegar?
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href='/quienes-somos'>Sobre nosotros</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end w-fit'>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
