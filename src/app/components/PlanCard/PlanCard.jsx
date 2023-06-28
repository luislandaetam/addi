import { PlanFeature } from '../PlanFeature/PlanFeature'

export function PlanCard({
  title,
  price,
  type,
  buttonText,
  features,
  freeTrial
}) {
  return (
    <article>
      <h3>{title}</h3>
      <p>
        Inicia tu <strong>prueba gratuita de 7 días</strong> sin necesidad de
        ingresar datos de tarjeta de crédito. Luego de eso, tenemos un plan en
        donde podrás gozar de todas las funciones de ADDI.
      </p>
      <section>
        <p>{price}</p>
        <p>
          USD
          <br />/{type}.
        </p>
      </section>
      <button>{buttonText}</button>
      <p> (No requiere tarjeta) </p>
      {features?.length &&
        features.map((feature, index) => {
          return <PlanFeature text={feature} key={index} />
        })}
      {freeTrial ? <p className='font-bold'>Duración de 7 días.</p> : ''}
    </article>
  )
}
