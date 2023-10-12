import React, { useState } from 'react'
import Blob from '../../public/images/blob-scatter-haikei (1).svg'


function Search() {
  const tags = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'React Native',
    },
    {
      id: 4,
      name: 'Laravel',
    },
    {
      id: 5,
      name: 'UI/UX',
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex justify-center mt-7 flex-col px-24 md:px-48'>
      <img src={Blob} alt="Banner" className='rounded-3xl ' />
      <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[20px] text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <input type="text" placeholder='Search'
          className=' border-none focus:ring focus:border-blue-500' />
      </div>
      <div className='flex gap-10 justify-center items-center mt-5'>
        {tags.map((item, index) => (
          <ul key={item.id} onClick={() => setActiveIndex(index)} className={`${index == activeIndex ? 'bg-orange2 text-white' : null} p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4
          hover:scale-110 hover:border-[1px] border-orange2 transition-all duration-100 ease-in-out
          `}>
            <li>{item.name}</li>
          </ul>
        ))

        }
      </div>

    </div>
  )
}

export default Search
