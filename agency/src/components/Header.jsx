import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import Logo from './Logo'

const CustomLink = ({ to, title, className = "" }) => {
  const location = useLocation();
  return (
    <NavLink to={to} className={`${className} relative group `}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${location.pathname === to ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </NavLink>
  )
}

const CustomMobileLink = ({ to, title, className = "", toggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    toggle();
    navigate.push(to);
  };

  return (
    <NavLink
      to={to}
      className={`${className} relative group text-white dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-white absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${location.pathname === to ? "w-full" : "w-0"}
         dark:bg-dark`}
        aria-hidden="true"
      >
        &nbsp;
      </span>
    </NavLink>
  );
};


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };




  return (
    <header
      className='shadow-md w-full  px-10 py-8 font-medium flex items-center justify-between   lg:px-16 md:px-12 sm:px-5'>



      <button
        className="w-full flex-col justify-start items-start lg:hidden flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
        ></span>
      </button>




      <div className="w-full lg:flex justify-between items-center ">

        <nav className='flex justify-between items-center'>
          {/* logo */}
          <h2><NavLink to="/" className=''>INDEX</NavLink></h2>
        </nav>

        {/* nav links */}
        <nav className='lg:flex hidden'>
          <CustomLink to="/" title="Home" className='mr-4 font-bold' />
          <CustomLink to="/Services" title="Services" className='mx-4 font-bold' />
          <CustomLink to="/About" title="About" className='mx-4 font-bold' />
          <CustomLink to="/Contact" title="Contact" className='mx-4 font-bold' />
          <CustomLink to="/Blog" title="Blog" className='ml-4 font-bold' />
        </nav>
        <nav className='lg:flex hidden items-center justify-between flex-wrap'>

          <motion.a to="/" target='{_blank}' className="w-6 mr-3 cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: .9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a to="/" target='{_blank}' className="w-6 mx-3 cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: .9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a to="/" target='{_blank}' className="w-6 mx-3 cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: .9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a to="/" target='{_blank}' className="w-6 mx-3 cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: .9 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a to="/" target='{_blank}' className="w-6 ml-3 cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: .9 }}
          >
            <DribbbleIcon />
          </motion.a>

        </nav>
      </div>


      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-md py-32
            "
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              to="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              to="/Services"
              title="Services"
              className=""
              toggle={handleClick}
            />
            {/* <CustomMobileLink
              href="/services"
              title="Services"
              className=""
              toggle={handleClick}
            /> */}
            <CustomMobileLink
              to="/About"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              to="/Contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              to="/Blog"
              title="Blog"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              to="#"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              to="#"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3  bg-white rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              to="#"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

          </nav>
        </motion.div>
      ) : null}

      {/* logo */}

      {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div> */}


    </header>
  );
};

export default Header;







