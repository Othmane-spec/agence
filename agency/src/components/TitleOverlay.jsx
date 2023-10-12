import React from 'react'
import Seo from '../../public/images/seo.jpg'

function TitleOverlay() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-zinc-700 to-zinc-800 h-96 w-full relative">
        <img src={Seo} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />
        <div className="p-24">
          <h1 className='text-white text-6xl font-bold'>About</h1>
          <h2 className="text-white text-3xl font-light mt-5">Some realy great stuff </h2>
        </div>
      </div>
    </div>
  )
}

export default TitleOverlay
