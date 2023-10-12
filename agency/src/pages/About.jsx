import React from 'react'
import TitleOverlay from '../components/TitleOverlay'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SlidePerso from "../../public/images/slide_perso.png"
import Buildings from '../../public/images/buildings.jpg'
import Icon1 from '../../public/images/agency1.png'
import AnimatedText from '../components/AnimatedText'
import { Image } from '@nextui-org/react'
import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <Header />
      <TitleOverlay />
      <main className=''>

        <div className="py-8 lg:pt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">

          <div className='w-full lg:w-1/2 px-4 lg:px-0'>
            <Image src={SlidePerso} alt='ImgAgency' className='lg:w-9/12 h-auto w-full' />
          </div>

          <div className='w-full lg:w-1/2 px-4 lg:px-8 pt-5 lg:pt-0'>
            <motion.h1 className='text-orange2 font-bold capitalize text-4xl sm:text-5xl lg:text-6xl'
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: .8 }}
            >AGENCE DIGITAL</motion.h1>

            {/* <AnimatedText text="Animated text with framer-motion" className="text-4xl" /> */}


            <motion.p className="text-2xl sm:text-3xl lg:text-4xl font-semibold pt-3 lg:pt-5"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .9 }}
            >Nous concevons des solutions digitales innovants et rentables.</motion.p>

            <p className='text-base sm:text-lg lg:text-base font-medium text-dark pt-5'>Créée en 2006 en Bretagne à Vannes dans le Morbihan,ID Interactive est une agence digital qui a pour vocation
              d'imaginer et de mettre en oeuvre des solutions sur mesure et concues dans les delais pour atteindre les objectifs
              fixés avec ses clients</p>



          </div>

        </div>

        <div className="bg-gradient-to-tr from-zinc-700 to-zinc-800 h-full w-full  relative">
          <img src={Buildings} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />
          <div className="p-8 md:p-12 lg:p-24 xl:w-1/2">
            <h1 className='text-white text-4xl md:text-6xl font-bold'>Qui sommes-nous ?</h1>
            <h2 className="text-white text-2xl md:text-3xl font-light mt-5">La société ID Interactive est une agence digitale basée
              en Bretagne (Morbihan) qui intervient partout en France et dans le monde. </h2>
            <p className='pt-5 text-white '>Positionnée en guichet unique, l’agence offre aux entreprises, aux associations et aux collectivités tous les services liés à la conception et à la réalisation d’un site Internet professionnel : création graphique, développement
              et intégration, référencement, accompagnement webmarketing et hébergement de sites web.</p>
            <div className='pt-5 grid justify-start'>
              <button className="relative inline-flex   p-0.5 mb-2 overflow-hidden text-sm  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-7 py-3 transition-all ease-in duration-75 uppercase  text-white bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Voir la présentation de l'agence
                </span>
              </button>
            </div>

          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full bg-orange2 p-8 md:p-10 lg:p-12 xl:p-0">

          <div className='w-full sm:w-2/5 px-4 lg:px-0'>
            <Image src={SlidePerso} alt='ImgAgency' className='lg:w-9/12 w-full h-auto' />
          </div>

          <div className='w-full sm:w-3/5  '>
            <h1 className='text-white font-bold capitalize text-4xl sm:text-5xl'>D'où venons-nous ?</h1>

            {/* <AnimatedText text="Animated text with framer-motion" className="text-4xl" /> */}

            <h2 className="!text-lg sm:text-2xl text-white font-semibold pt-3 sm:pt-5">Créée en 2006, ID Interactive est une agence digitale implantée dans le Morbihan.</h2>

            <p className='text-light font-medium text-white pt-3 sm:pt-5'>Depuis plus de 10 ans, l'agence bénéficie d'une croissance de 5 à 20% par an. ID Interactive est passée de 3 à 10 salariés,  couvrant tous les métiers du digital, pour répondre à l'exigence de performance
              de ses clients. Début 2018, elle a emménagé dans un bâtiment conçu sur mesure à Arradon.</p>
            <div className='pt-3 sm:pt-5 grid justify-start'>
              <button className="relative inline-flex   p-0.5 mb-2 overflow-hidden text-sm  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-7 py-3 transition-all ease-in duration-75 uppercase  text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Voir l'histoire de l'agence
                </span>
              </button>
            </div>


          </div>

        </div>
        <div className='flex flex-col sm:flex-row items-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-14'>
          <div className='w-full sm:w-1/2 text-center sm:text-left'>
            <h1 className='text-black font-bold capitalize text-2xl sm:text-4xl lg:text-4xl xl:text-4xl'>Des langages, des frameworks et des CMS...</h1>

            <h2 className="text-xl sm:text-2xl font-semibold pt-3 sm:pt-5">Notre agence digitale dispose de trois grandes solutions technologiques
              pour réaliser des projets digitaux de qualité : Wordpress, Prestashop et SuperAdmin.</h2>

            <p className='text-base sm:text-lg font-medium text-black pt-3 sm:pt-5'>Cette dernière développée en PHP représente notre propre infrastructure logicielle et elle nous permet de réaliser tous types de projets complexes de manière sécurisée. Au delà du langage serveur PHP très courant dans le web depuis de nombreuses années, l'agence
              utilise en permanence des technologies basées sur le langage de programmation Javascript notamment : Node JS, React Native et AngularJS.</p><br />
            <p className='text-base sm:text-lg font-medium text-black pt-3 sm:pt-5'>Ces frameworks open source nous permettent de réaliser des pages plus rapides et plus interactives, ce qui représente un de nos principaux objectifs en tant qu'agence digitale.</p>

          </div>
          <motion.div className={`w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 sm:pt-0 ${window.innerWidth >= 1024 ? 'justify-between' : 'justify-center'}`}
            initial={{ opacity: '0', y: '6rem' }} animate={{ opacity: "1", y: "-7px" }} transition={{ duration: .5 }}

          >


            <div className='flex flex-col items-center justify-center cursor-pointer'>

              <motion.img src={Icon1} alt='icon' className='bg-white w-3/5 rounded-lg' whileHover={{ y: -4 }}
                whileTap={{ scale: 1 }} />
              <span className='text-black  font-bold text-base text-center hover:text-red-600'>Créer un site Internet ou une application </span>

            </div>


            <div className='flex flex-col items-center justify-center cursor-pointer'>
              <motion.img src={Icon1} alt='icon' className='bg-white w-3/5 rounded-lg' whileHover={{ y: -4 }}
                whileTap={{ scale: 1 }} />
              <span className='text-black font-bold text-base text-center hover:text-red-600'>Héberger et gérer des services en ligne </span>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
              <motion.img src={Icon1} alt='icon' className='bg-white w-3/5  rounded-lg' whileHover={{ y: -4 }}
                whileTap={{ scale: 1 }} />
              <span className='text-black font-bold text-base text-center hover:text-red-600'>Mettre en conformité votre site internet</span>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
              <motion.img src={Icon1} alt='icon' className='bg-white w-3/5 rounded-lg' whileHover={{ y: -4 }}
                whileTap={{ scale: 1 }} />
              <span className='text-black  font-bold text-base text-center hover:text-red-600'> Génerer du trafic ciblé </span>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
              <motion.img src={Icon1} alt='icon' className='bg-white w-3/5 rounded-lg' whileHover={{ y: -4 }}
                whileTap={{ scale: 1 }} />
              <span className='text-black  font-bold text-base text-center hover:text-red-600'> Génerer du trafic ciblé </span>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
              <motion.img src={Icon1} alt='icon' className='bg-white w-3/5 rounded-lg' whileHover={{ y: -4 }}
                whileTap={{ scale: 1 }} />
              <span className='text-black  font-bold text-base text-center hover:text-red-600'> Génerer du trafic ciblé </span>
            </div>








          </motion.div>
        </div>
      </main>




      <Footer />

    </ >
  )
}

export default About
