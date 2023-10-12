import React from 'react'
import Header from '../components/Header'
import { Image } from '@nextui-org/react'
import Imgactualite from '../../public/images/actualité.jpg';
import profileAgency from "../../public/images/Groupe-55.webp"
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AnchorIcon } from '../components/AnchorIcon';
import AnimatedText from '../components/AnimatedText'
// import Icon1 from '../../public/images/agency1.png';
import { ClockIcon } from '@heroicons/react/24/solid';

import GridGallery from "../components/grid-galery";
import Footer from '../components/Footer';





function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const images = [
    "../../public/images/web_developper4.jpg",
    "../../public/images/web_developper.jpg",
    "../../public/images/web-developper1.jpg",
    "../../public/images/web_developpper2.jpg",
    "../../public/images/web_developper3.jpg",
    "../../public/images/web_developper5.jpg"
  ]




  return (
    <>

      <Header />
      <main className='flex w-full flex-col items-center justify-center'>
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col-reverse sm:flex-row items-center justify-between w-full">

          <div className='w-full sm:w-1/2 text-center sm:text-left'>
            <h1 className='text-dark font-bold capitalize text-4xl sm:text-6xl md:text-7xl lg:text-8xl'>AGENCE DIGITAL</h1>

            <AnimatedText text="Lorem ipsum dolor sit amet." className="text-2xl sm:text-3xl !text-center" />


          </div>
          <div className='w-full sm:w-1/2'>
            <Image src={profileAgency} alt='ImgAgency' className='w-9/12' />
          </div>

        </div>

        <div className='w-full bg-black p-4 sm:p-8 md:p-12 lg:p-16 lg:flex lg:justify-around'>
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-5'>
            <h2 className='text-white text-2xl sm:text-4xl font-semibold'>Notre agence Web</h2><br />
            <p className='text-white text-sm sm:text-base text-start'>Créée en 2006 en Bretagne (à Vannes, Morbihan),
              ID Interactive est une agence Web de création de sites Internet professionnels sur-mesure
              qui a pour vocation d’imaginer et de mettre en œuvre avec ses clients des solutions digitales
              innovantes et rentables. Notre agence Web place la qualité et l’innovation au cœur de sa
              stratégie d’entreprise et ambitionne d’offrir un cadre professionnel épanouissant à ses
              15 collaborateurs. Année après année, le succès de notre agence Web bretonne se construit
              grâce à une étroite collaboration entre ses équipes et ses clients, dans un esprit de confiance,
              d'implication et d'exigence de qualité.</p>
            <br />

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Pink to orange
              </span>
            </button>

          </div>
          <div className='w-full lg:w-1/2'>
            <h2 className='text-white text-xl sm:text-3xl font-semibold'>Que pouvons-nous faire pour vous aider ?</h2>

            <div className='pt-5'>
              <Accordion className='text-white '>
                <AccordionItem key="anchor" aria-label="Anchor" indicator={<AnchorIcon />} title={<h3 className="text-white hover:text-orange2">Anchor</h3>}>
                  {defaultContent}
                </AccordionItem>
                <AccordionItem key="moon" aria-label="Moon" indicator={<AnchorIcon />} title={<h3 className="text-white hover:text-orange2">Moon</h3>}>
                  {defaultContent}
                </AccordionItem>
                <AccordionItem trigger="text-white" key="sun" aria-label="Sun" indicator={<AnchorIcon />} title={<h3 className="text-white hover:text-orange2">
                  Sun
                  <span className="underline-bar"></span>
                </h3>}>
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>

          </div>

        </div>

        <div className='md:flex md:justify-between bg-gradient-to-r from-zinc-50 to-zinc-400 p-4 sm:p-8 md:p-12 lg:p-16 w-full'>
          <div className='w-full  sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0'>
            <h2 className='text-dark font-bold text-4xl'>#Actualité</h2>

            <span className='pt-10 inline-flex font-light'><ClockIcon className='w-5 mx-2' />28 juillet 2023</span><br />

            <a href="#" className='pt-3 font-semibold text-2xl text-dark inline-block'>Objectif 100% sur Google PageSpeed Insights : maximisez les performances de votre site web</a>

            <div className='pt-5'>
              <button className="relative inline-flex  p-0.5 mb-2 overflow-hidden text-sm  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-7 py-3 transition-all ease-in duration-75 uppercase  text-dark bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Toute les news
                </span>
              </button>
            </div>

          </div>
          <div className='w-full sm:w-1/2'>
            <Image src={Imgactualite} alt='ImgActualite' className='w-full h-auto bg-black bg-opacity-50' />
          </div>

        </div>

        <div className='sm:flex sm:justify-between w-full p-4 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-r from-black to-zinc-500'>
          <div className='w-full sm:w-1/2 pb-2 '>
            <Image src={Imgactualite} alt='ImgActualite' className=' bg-black bg-opacity-50' />
          </div>

          <div className='w-full  sm:w-1/2 text-left pl-5  mb-8 sm:mb-0'>
            <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Réalisations de notre agence Web</h2>

            <p className='pt-3 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-white inline-block'>Vous avez de bonnes idées ! Notre agence Web vous accompagne pour réaliser
              votre site Internet professionnel de manière qualitative et performante.</p>
            <p className='py-3 text-white font-normal text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'>Découvrez ci-dessous nos dernières références de sites Internet professionnels développés sous Wordpress, Prestashop ou sur mesure par notre propre CMS. Les équipes de notre agence Web privilégie la qualité du design,
              l'expérience utilisateur et l'optimisation des sites web pour l'indexation sur les moteurs de recherche.</p>

            <div className='pt-5 grid justify-center'>
              <button className="relative inline-flex   p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-7 py-3 transition-all ease-in duration-75 uppercase  text-white bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Voir Plus de réalisations
                </span>
              </button>
            </div>

          </div>


        </div>



        <GridGallery images={images} />
      </main>

      <Footer />


    </>
  )
}


export default Home
