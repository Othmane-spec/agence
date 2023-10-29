import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Ourservice from '../components/Ourservice'
import Footer from '../components/Footer'
import DescServices from '../components/DescServices'
import Timeline from '../components/Timeline'
import { KeyIcon, ListBulletIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

function Services() {
  useEffect(() => {
    document.title = "Services"
  }, [])
  const descservices = useRef(null);
  const services = useRef(null);
  const timeline = useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });

  };
  return (
    <>
      <main className='flex w-full flex-col items-center justify-center'>
        <Header />
        <div class="fixed top-60 -right-8 w-14 h-auto z-50 hidden md:block">

          <a onClick={() => scrollToSection(descservices)} class="button cursor-pointer block transition-transform duration-300 transform hover:-translate-x-4">
            <div class=" bg-dark text-white p-4 rounded-l-3xl ">
              <KeyIcon />
            </div>
          </a>
          <a onClick={() => scrollToSection(services)} class="button cursor-pointer block pt-1 transition-transform duration-300 transform hover:-translate-x-4">
            <div class=" bg-dark text-white p-4 rounded-l-3xl">
              <ListBulletIcon />
            </div>
          </a>
          <a onClick={() => scrollToSection(timeline)} class="button cursor-pointer block pt-1 transition-transform duration-300 transform hover:-translate-x-4">
            <div class=" bg-dark text-white p-4 rounded-l-3xl">
              <QuestionMarkCircleIcon />
            </div>
          </a>


        </div>

        <div ref={descservices}>
          <DescServices />
        </div>

        <div ref={services}>
          <Ourservice />
        </div>

        <div ref={timeline}>
          <Timeline />
        </div>


      </main>
      <Footer />
    </>

  )
}

export default Services
