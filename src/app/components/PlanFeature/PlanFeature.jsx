import Image from 'next/image'
import greenCheck from '../../../../public/prices/green_check.svg'

export function PlanFeature({ text }) {
  return (
    <section className='flex flex-row'>
      <Image
        src={greenCheck}
        alt='check'
        className='invert-[.64] sepia-[.31] saturate-[994] hue-rotate[90deg] brightness-[.97] contrast-[95]'
      />
      <p>{text}</p>
    </section>
  )
}

// invert(64%) sepia(31%) saturate(994%) hue-rotate(90deg) brightness(97%) contrast(95%);
