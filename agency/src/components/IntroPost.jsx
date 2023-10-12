import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useNavigate } from 'react-router-dom'


function IntroPost({ post }) {
  const navigate = useNavigate();
  // const formattedDate = (post.created_at).format('MMMM Do YYYY, h:mm:ss a');
  return (
    <div key={post.id} className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15
    lg:px-32 gap-8 cursor-pointer

    ' onClick={() => navigate('blog-detail/' + post.id)}>
      <img src={post.coverImg} alt="" className='rounded-2xl object-cover w-full h-full' />
      <div className='pt-3'>
        <h4>{post.date}</h4>
        <h4 className='text-orange2 uppercase'>{post.source}</h4>
        <h4 className='text-[23px] font-bold mt-5'>{post.title}</h4>
        <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.desc}</h4>
      </div>
    </div>
  )
}

export default IntroPost
