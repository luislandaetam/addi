'use client'

import { Box } from '@mui/material'
import { AskedQuestion } from '../AskedQuestion/AskedQuestion'

export function FAQs() {
  return (
    <article className='mt-10'>
      <h2 className='text-home-black-letters text-center font-bold text-4xl'>
        ¿Tienes dudas?
      </h2>
      <h3 className='text-home-black-letters text-center font-bold text-4xl'>
        Estas son las preguntas más frecuentes.
      </h3>
      <Box m='20px'>
        <div>
          <AskedQuestion
            question='¿Cómo puedo obtener leads desde ADDI?'
            answer='ADDI tiene los "formularios conversacionales" incorporados en el panel
          de control, los cuales son los suficientemente inteligentes como para
          almacenar la información de tus usuarios en una hoja de cálculo o en
          un CRM.'
          />
        </div>

        <div>
          <AskedQuestion
            question='¿Recibo soporte de por vida?'
            answer='El soporte al cliente de por vida está disponible de forma
          gratuita para este producto. Sin embargo, el soporte para la
          construcción del chatbot también está disponible de por vida, pero
          es de pago o viene incluido en un plan hecho para ti.'
          />
        </div>

        <div>
          <AskedQuestion
            question='¿Cómo puedo utilizar a ADDI para automatizar el servicio al
              cliente?'
            answer='ADDI es un chatbot el cual funciona como el punto de contacto
              inicial del departamento de servicio al cliente y resolver
              consultas comunes. Los clientes pueden recibir asistencia las 24
              horas del día, los 7 días de la semana y a través de diversos
              medios de comunicación.'
          />
        </div>

        <div>
          <AskedQuestion
            question='¿ADDI tiene un chatbot en Messenger?'
            answer='Dado que ADDI es una plataforma de chatbots omnicanal, esta puede
          integrarse un chatbot en Facebook Messenger, así como en WhatsApp,
          Instagram, WordPress, el sitio web, y mensajes de texto (SMS).'
          />
        </div>

        <div>
          <AskedQuestion
            question='¿Cuál es el precio?'
            answer='Ofrecemos 4 planes:'
            bullets={[
              'Basic: USD 50 Mensual - USD 500 Anual (2 Meses Gratis)',
              ' Intermediate: USD 80 Mensual - USD 800 Anual (2 Meses Gratis)',
              'Advanced: USD 100 Mensual - USD 1000 Anual (2 Meses Gratis)',
              'Plan Premium for Agencies, donde posees bots ilimitados: USD 150 Mensual - USD 1500 Anual (2 Meses Gratis)'
            ]}
            answer2='Ya sea que seas dueño de un pequeño negocio o una gran empresa,
          ADDI puede ayudarte a llevar tu interacción con los clientes al
          siguiente nivel. Para obtener más información, consulta nuestra
          lista de precios.'
          />
        </div>

        <div>
          <AskedQuestion
            question='¿Tienen un plan gratuito?'
            answer='No, no ofrecemos un plan gratuito, pero ofrecemos una prueba
          gratuita de 7 días donde tienes acceso a todo el panel y soporte
          completo al cliente.'
          />
        </div>
      </Box>
    </article>
  )
}
