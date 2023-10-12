import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import Maps from '../components/Maps'

function Contact() {
  return (
    <div>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>

      <div className='flex flex-col h-screen'>
        <div className='flex-grow '>

          <Maps />
        </div>
        <div className='flex-grow-0'>
          <Footer />
        </div>
      </div>



    </div>
  )
}

export default Contact
