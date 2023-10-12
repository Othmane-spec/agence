import React from 'react'
import DigitalImg from '../../public/images/e-learn-center.webp'

function DescServices() {
  return (
    <section className='mx-5 sm:mx-10 md:mx-36 lg:mx-auto my-16'>
      <div className='max-w-[1320px] md:py-[80] py-5 flex mx-auto  sm:flex-row flex-col'>
        <div className='basis-[45%]'>
          <img src={DigitalImg} alt="DigitalImg" className='w-full' />
        </div>
        <div className='basis-[55%] px-5'>
          <h1 className='text-4xl font-bold pb-5 pt-3 tracking-wide'>Pourquoi Choisir Nous ?</h1>
          <p className='py-3 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            dolor culpa numquam cumque eum nam labore repellat consectetur corrupti non mollitia,
            eius expedita? At doloribus quae autem necessitatibus harum amet?</p>
          <p className='py-3 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            saepe doloribus aliquid fuga rerum temporibus aspernatur libero
            quam iusto excepturi nulla dolores velit, aliquam nam?</p>
          <p className='py-3 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur suscipit similique praesentium eius, eveniet explicabo.</p>
        </div>
      </div>
    </section>
  )
}

export default DescServices
