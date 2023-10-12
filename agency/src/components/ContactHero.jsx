import React from 'react'
import Imgcontact from '../../public/images/contact.jpg';

function ContactHero() {
  return (

    <div className='w-full h-screen relative'>
      <img className=' w-full h-screen object-cover' src={Imgcontact} alt="ContactHero" />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl text-center md:text-left">ET si on échangeait sur votre projet ?</h1><br></br>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-lg md:text-xl lg:text-2xl font-semibold text-center md:text-left'>Télephone, courriel, formulaire de contact... Vous pouvez aussi passer à l'agence pour échanger le temps d'un café !</p>
        </div>
      </div>
    </div>


  )
}

export default ContactHero
