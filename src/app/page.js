import Section from '../components/Section'
import Button from '../components/Button'
import SponsorsList from '../components/SponsorsList'
import Programming from '../components/Programming'
import { AssetOne, AssetTwo, AssetThree } from '../assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '../components/Hero'
import ProgrammingAccordion from '@/components/ProgrammingAccordion'
import { Play } from '../components/Icons'
const sponsorsList = [
  {
    title: 'Tay',
    image: '/images/Tay.png',
    link: 'https://articulo.mercadolibre.com.ar/MLA-1619241544-miel-de-monte-tay-12kg-x3-_JM'
  },
  {
    title: 'Gabriel Martoglio',
    image: '/images/Gabriel-Martoglio.png',
    link: 'https://www.abog-martoglio.com/'
  },
  {
    title: 'Guairúru',
    image: '/images/Guairuru.png',
    link: 'https://twitter.com/guairuru?lang=es'
  },
  {
    title: 'Cuántica',
    image: '/images/Cuantica.png',
    link: 'https://www.instagram.com/cuantica___/'
  },
  {
    title: 'Selva C. Rovetta',
    image: '/images/Selva-Rovetta.png',
    link: 'mailto:selvaclarovetta@gmail.com'
  },
  {
    title: 'Sabores de la Montaña',
    image: '/images/Sabores-de-la-montaña.png',
    link: 'https://www.facebook.com/people/Sabores-de-la-Monta%C3%B1a/100057717631227/'
  },
  {
    title: 'Kenai',
    image: '/images/Kenai.png',
    link: 'tel:3549551888'
  },
  {
    title: 'Estudio Genera',
    image: '/images/Estudio-genera.png',
    link: 'https://www.estudiogenera.com/'
  },
  {
    title: 'Bon Appetit',
    image: '/images/Bon-Appetit.png',
    link: 'tel:3549550614'
  },
  {
    title: 'La Comarca a granel',
    image: '/images/La-comarca.png',
    link: 'https://www.instagram.com/lacomarcaagranel/?hl=es'
  },
  {
    title: 'MeryHuén Holística',
    image: '/images/MeryHuen-Holistica.png',
    link: 'tel:1164543856'
  },
  {
    title: 'PapaloteCrea',
    image: '/images/Papalote.png',
    link: 'https://www.instagram.com/papalotecrea/?img_index=1'
  },
  {
    title: 'Indot',
    image: '/images/Indot.png',
    link: 'mailto:servicios@indot.com.ar'
  },
  {
    title: 'Casa Malvón',
    image: '/images/Casa-Malvon.png',
    link: 'mailto:servicios@indot.com.ar'
  }
]

const Home = () => {
  return (
    <>
      <Hero />
      <main className='min-h-screen'>
        <AssetTwo />
        <Section id='programming'>
          <h2 className='flex justify-center items-center text-4xl md:text-5xl'>Nuestra programación&nbsp;<Play /></h2>
          <Programming />
          <ProgrammingAccordion />
        </Section>
        <AssetOne />
        <Section id='sponsors'>
          <article className='pb-8'>
            <h2 className='text-4xl md:text-5xl mb-32 text-center'>Quienes <u className='text-primary'>confían</u> en nosotros</h2>
            <SponsorsList sponsors={sponsorsList} />
          </article>
          <figure className='absolute -z-10 left-0'>
            <AssetThree />
          </figure>
          <article className='flex flex-col items-center h-[29rem] md:flex-row md:justify-between md:h-[30rem]'>
            <h2 className='text-center text-4xl pt-11 md:text-5xl md:text-left md:pt-0'>¿Querés formar parte?</h2>
            <div className='flex flex-col items-center gap-11'>
              <p className='text-center text-balance w-full md:w-1/2'>
                Te invitamos a que visites nuestro espacio publicitario donde
                encontraras promociones por radio, avisos, y la oportunidad de
                aparecer junto a nuestros sponsors
              </p>
              <Link href='/quienes-somos'>
                <Button>Más información</Button>
              </Link>
            </div>
          </article>
          <figure className='absolute -z-10 right-0'>
            <AssetThree />
          </figure>
        </Section>
        <Section id='location' className='flex flex-row flex-no-wrap justify-around w-full items-center h-[40rem]'>
          <div className='hidden absolute max-w-full xl:flex justify-between skew-y-[4deg] -skew-x-[4deg] w-full -z-10'>
            <picture className='w-[500px] h-[600px] transform -left-28'>
              <Image
                className='bordered h-full w-auto border-[8px] border-primary rounded-3xl'
                src='/images/imagen-11.png'
                alt='Puente peatonal con vista al río'
                width={500}
                height={500}
              />
            </picture>
            <picture className='w-[500px] h-[600px] -right-28'>
              <Image
                className='bordered h-full w-auto border-[8px] border-primary rounded-3xl'
                src='/images/imagen-1.png'
                alt='Casa rodante en una calle de tierra rodeada de árboles'
                width={450}
                height={450}
              />
            </picture>
          </div>
          <header className='flex flex-col items-center text-center space-y-12 max-w-[500px] px-14 xl:px-0'>
            <h2 id='location' className='mb-0 text-4xl md:text-5xl'>
              ¡Conocé donde nos encontramos!
            </h2>
            <p className='text-balance'>
              Ideas en el aire se encuentra en San Marcos Sierras, provincia de
              Córdoba. Te invitamos a que conozcas algunos de nuestros paisajes
              naturales, nuestras instituciones y actividades que se realizan,
              ¡entre otras cosas de interés!
            </p>
            <Link href='/san-marcos-sierras'>
              <Button>Descubrí más</Button>
            </Link>
          </header>
        </Section>
      </main>
    </>
  )
}

export default Home
