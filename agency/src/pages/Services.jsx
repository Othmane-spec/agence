import React from 'react'
import Header from '../components/Header'
import Ourservice from '../components/Ourservice'
import Footer from '../components/Footer'
import DescServices from '../components/DescServices'
import Timeline from '../components/Timeline'

function Services() {
  return (
    <>
      <main className='flex w-full flex-col items-center justify-center'>
        <Header />

        <DescServices />
        <Ourservice />

        <Timeline />

      </main>
      <Footer />
    </>

  )
}

export default Services
