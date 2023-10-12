import { BriefcaseIcon, CircleStackIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, GlobeAltIcon, ServerIcon, ServerStackIcon, WalletIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Ourservice() {
  return (
    <section className='my-16'>
      <div className='max-w-[1320px] md:py-[80] py-5  mx-auto '>
        <h1 className='text-7xl sm:text-3xl md:text-6xl font-bold tracking-wide text-center'>Nos services</h1>
      </div>
      <div className='max-w-[1200px] mx:auto py-[30px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6 '>
        <div className="group shadow-lg p-4 text-center flex flex-col items-center rounded-xl hover:bg-orange-500 duration-1000 hover:text-white ">
          <ComputerDesktopIcon className='w-10  py-5 group-hover:text-white text-orange-500 duration-1000 animate-bounce' />
          <h3 className='text-xl font-medium'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, delectus!</p>
        </div>
        <div className="group shadow-lg p-4 text-center flex flex-col items-center rounded-xl hover:bg-orange-500 duration-1000 hover:text-white ">
          <GlobeAltIcon className='w-10  py-5 group-hover:text-white text-orange-500 duration-1000 animate-bounce' />
          <h3 className='text-xl font-medium'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, delectus!</p>
        </div>
        <div className="group shadow-lg p-4 text-center flex flex-col items-center rounded-xl hover:bg-orange-500 duration-1000 hover:text-white ">
          <DevicePhoneMobileIcon className='w-10  py-5 group-hover:text-white text-orange-500 duration-1000 animate-bounce' />
          <h3 className='text-xl font-medium'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, delectus!</p>
        </div>
        <div className="group shadow-lg p-4 text-center flex flex-col items-center rounded-xl hover:bg-orange-500 duration-1000 hover:text-white ">
          <ServerStackIcon className='w-10  py-5 group-hover:text-white text-orange-500 duration-1000 animate-bounce' />
          <h3 className='text-xl font-medium'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, delectus!</p>
        </div>
        <div className="group shadow-lg p-4 text-center flex flex-col items-center rounded-xl hover:bg-orange-500 duration-1000 hover:text-white ">
          <WrenchScrewdriverIcon className='w-10  py-5 group-hover:text-white text-orange-500 duration-1000 animate-bounce' />
          <h3 className='text-xl font-medium'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, delectus!</p>
        </div>
        <div className="group shadow-lg p-4 text-center flex flex-col items-center rounded-xl hover:bg-orange-500 duration-1000 hover:text-white ">
          <WalletIcon className='w-10  py-5 group-hover:text-white text-orange-500 duration-1000 animate-bounce' />
          <h3 className='text-xl font-medium'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, delectus!</p>
        </div>
        <div className="group shadow-lg p-4 text-center flex flex-col items-center rounded-xl hover:bg-orange-500 duration-1000 hover:text-white ">
          <CircleStackIcon className='w-10  py-5 group-hover:text-white text-orange-500 duration-1000 animate-bounce' />
          <h3 className='text-xl font-medium'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, delectus!</p>
        </div>
        <div className="group shadow-lg p-4 text-center flex flex-col items-center rounded-xl hover:bg-orange-500 duration-1000 hover:text-white ">
          <BriefcaseIcon className='w-10  py-5 group-hover:text-white text-orange-500 duration-1000 animate-bounce' />
          <h3 className='text-xl font-medium'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, delectus!</p>
        </div>
      </div>
    </section>

  )
}

export default Ourservice
