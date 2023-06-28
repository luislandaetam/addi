import Image from 'next/image'
import { BlueButton } from './components/BlueButton/BlueButton'
import { WhiteButton } from './components/WhiteButton/WhiteButton'
import { OrangeButton } from './components/OrangeButton/OrangeButton'
import { FAQs } from './components/FAQs/FAQs'
import phoneBanner from '../../public/home/phone_banner.png'
import whatsAppIcon from '../../public/home/whatsapp_logo.svg'
import instagramIcon from '../../public/home/instagram_logo.svg'
import facebookIcon from '../../public/home/facebook_logo.svg'
import telegramIcon from '../../public/home/telegram_logo.svg'
import webIntegrationIcon from '../../public/home/web_integration.svg'
import smsIcon from '../../public/home/sms.svg'
import easyToUseIcon from '../../public/home/easy_to_use.svg'
import freeIcon from '../../public/home/free.svg'
import supportIcon from '../../public/home/support.svg'
import carousel1 from '../../public/home/carousel_1.png'
import carousel2 from '../../public/home/carousel_2.png'
import carousel3 from '../../public/home/carousel_3.png'
import carousel4 from '../../public/home/carousel_4.png'
import carousel5 from '../../public/home/carousel_5.png'

export default function Home() {
  return (
    <main className='text-home-gray-subtexts'>
      {/* PHONE BANNER */}
      <article className='flex flex-row items-center justify-center mx-14'>
        <section className='w-2/5'>
          <h2 className='text-home-black-letters'>
            Conoce a ADDI, nuestro Chatbot
          </h2>
          <h1 className='text-home-black-letters text-6xl font-bold my-4'>
            ¡Dile adiós a las{' '}
            <span className='text-home-blue-addi'>respuestas manuales!</span>
          </h1>
          <p className='text-2xl my-8'>
            Descubre a ADDI, tu asistente inteligente capaz de automatizar
            mensajes en Messenger, WhatsApp, Website, Telegram y más.
          </p>
          <div className='flex flex-row justify-between items-center my-8'>
            <BlueButton text='Obtén tu prueba gratis' />
            <WhiteButton text='Agenda una demo' />
          </div>
        </section>
        <section className='w-3/5 flex flex-row justify-center'>
          <Image src={phoneBanner} alt='Phone image' className='w-3/5' />
        </section>
      </article>

      {/* CAROUSEL */}
      <article>
        <section>
          <h2 className='text-home-black-letters text-center text-5xl font-bold mx-28 my-14'>
            ¡Diferénciate a través de una experiencia excepcional para tus
            clientes!
          </h2>
        </section>
        <section>
          <div className='flex flex-row justify-center items-center gap-10 mx-28'>
            <Image
              src={carousel1}
              alt='Crea conexiones y fideliza'
              className='w-1/2'
            />
            <div>
              <h3 className='text-home-black-letters text-3xl font-bold my-4'>
                Crea conexiones auténticas y fideliza a tus clientes.
              </h3>
              <p>
                Haz que cada interacción cuente: Chatea con tus clientes,
                resuelve problemas al instante, ofrece descuentos personalizados
                y guíalos con recomendaciones de productos basadas en su
                comportamiento.
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-10 mx-28'>
            <Image
              src={carousel2}
              alt='Traductor integrado'
              className='w-1/2'
            />
            <div>
              <h3 className='text-home-black-letters text-3xl font-bold my-4'>
                ¡Supera las barreras del idioma!
              </h3>
              <p>
                ADDI tiene la capacidad de atender y traducir en múltiples
                idiomas. Romple las barreras lingüísticas y brinda un servicio
                excepcional a clientes de todo el mundo.
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-10 mx-28'>
            <Image
              src={carousel3}
              alt='Automatización de respuestas'
              className='w-1/2'
            />
            <div>
              <h3 className='text-home-black-letters text-3xl font-bold my-4'>
                Optimiza tus procesos de trabajo: automatiza respuestas y flujos
                de trabajo en solo minutos
              </h3>
              <p className='my-4'>
                Impulsa la productividad de tu equipo: automatiza respuestas
                estándar, así tus agentes podrán concentrarse en atender
                consultas más desafiantes y agregar valor a tus clientes.
              </p>
              <p>
                Aprovecha el tiempo y recursos para hacer crecer tu negocio.
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-10 mx-28'>
            <Image
              src={carousel4}
              alt='Atención al Cliente personalizada'
              className='w-1/2'
            />
            <div>
              <h3 className='text-home-black-letters text-3xl font-bold my-4'>
                Potencia tu equipo de atención al cliente
              </h3>
              <p>
                Optimiza la gestión de clientes con ADDI. Resuelve problemas de
                manera rápida y eficiente, gracias a la automatización de tareas
                repetitivas. Distribuye la carga de trabajo de tu equipo y obtén
                análisis detallados para monitorear su rendimiento.
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-10 mx-28'>
            <Image src={carousel5} alt='Servicio 24 horas' className='w-1/2' />
            <div>
              <h3 className='text-home-black-letters text-3xl font-bold my-4'>
                Ahorra tiempo, mejora la eficiencia y brinda un servicio
                excepcional 24/7.
              </h3>
              <p className='my-8'>
                ¡Es hora de llevar tu agencia de marketing al siguiente nivel!
                Descubre cómo ADDI puede transformar los procesos de
                comunicación y potenciar los resultados de tus clientes.
              </p>
              <BlueButton text='Conoce nuestro Plan Premium' />
            </div>
          </div>
        </section>
      </article>

      {/* DEMO AND INTEGRATIONS */}
      <article>
        <section className='bg-home-blue-addi rounded-2xl flex flex-col items-center mt-10'>
          <h2 className='text-white font-bold text-center p-4 text-4xl'>
            Observa como ADDI puede mejorar tu negocio.
          </h2>
          <OrangeButton text='Agenda una demo' />
        </section>
        <section className='text-home-black-letters text-center my-10 mx-4'>
          <h2 className='font-bold text-4xl mb-2'>
            ¡Maximiza tu productividad con ADDI!
          </h2>
          <p className='text-3xl'>
            Disfruta de una integración completa con todas tus herramientas de
            comunicación esenciales
          </p>
          <div className='flex flex-row gap-4 justify-center my-10'>
            <Image
              src={whatsAppIcon}
              alt='WhatsApp Icon'
              className='w-1/12 hover:scale-125 duration-500'
            />
            <Image
              src={instagramIcon}
              alt='Instagram Icon'
              className='w-1/12 hover:scale-125 duration-500'
            />
            <Image
              src={facebookIcon}
              alt='Facebook Icon'
              className='w-1/12 hover:scale-125 duration-500'
            />
            <Image
              src={telegramIcon}
              alt='Telegram Icon'
              className='w-1/12 hover:scale-125 duration-500'
            />
            <Image
              src={webIntegrationIcon}
              alt='SVG Icon'
              className='w-1/12 hover:scale-125 duration-500'
            />
            <Image
              src={smsIcon}
              alt='SMS Icon'
              className='w-1/12 hover:scale-125 duration-500'
            />
          </div>
          <button className='text-home-blue-addi'>
            ¡Conoce nuestros precios!
          </button>
        </section>
      </article>

      {/* FEATURES AND FREE TRIAL */}
      <article>
        <section>
          <h2 className='text-home-black-letters font-bold text-center text-4xl mt-20 mb-10'>
            Lleva tu negocio en línea al siguiente nivel con ADDI
          </h2>
          <div className='flex flex-row justify-center mx-28 gap-8'>
            <div className='flex flex-col items-center w-1/3'>
              <Image src={easyToUseIcon} alt='Easy to Use' className='w-1/3' />
              <h3 className='text-home-black-letters font-bold text-xl mb-2'>
                Sencillo de utilizar
              </h3>
              <p className='text-center'>
                Diseña escenarios de chatbot a medida sin ninguna codificación.
                Obtén acceso rápido y sencillo a todos los datos importantes en
                un solo lugar.
              </p>
            </div>
            <div className='flex flex-col items-center w-1/3'>
              <Image
                src={supportIcon}
                alt='Customer Support'
                className='w-1/3'
              />
              <h3 className='text-home-black-letters font-bold text-xl mb-2'>
                Atención inmediata
              </h3>
              <p className='text-center'>
                Estamos aquí para brindarte soporte personalizado en cada paso.
                Desde la configuración de su cuenta hasta la creación de
                chatbots y mejoras continuas, nuestro equipo de expertos está
                listo para ayudarte.
              </p>
            </div>
            <div className='flex flex-col items-center w-1/3'>
              <Image src={freeIcon} alt='Free Trial' className='w-1/3' />
              <h3 className='text-home-black-letters font-bold text-xl mb-2'>
                Prueba gratuita
              </h3>
              <p className='text-center'>
                Experimente sin compromiso con nuestra prueba gratuita de 7
                días. Después, podrás actualizar a una suscripción paga para
                desbloquear aún más beneficios.
              </p>
            </div>
          </div>
        </section>
        <section className='text-center mx-28'>
          <h2 className='text-home-black-letters mt-20 font-bold text-4xl mb-8'>
            Desbloquea el potencial de tus ventas al ofrecer un servicio al
            cliente de primera clase.
          </h2>
          <p className='mb-8'>
            Inicia tu prueba gratuita de 7 días sin necesidad de ingresas datos
            de tarjetas de crédito, luego de eso tenemos un plan en donde podrás
            gozar de todas las funciones de ADDI.
          </p>
          <button className='bg-home-orange-addi text-white text-center rounded px-8 py-2 my-2 text-xl'>
            ¡Comienza ahora mismo!
          </button>
        </section>
      </article>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQs />
    </main>
  )
}
