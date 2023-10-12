import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import moment from 'moment';

function BlogDetails() {

  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log("Id", id);
    getBlogId();
  }, [])

  const getBlogId = () => {
    GlobalApi.getPostById(id).then(resp => {

      const item = resp.data.post;
      const result = {
        id: item.id,
        title: item.title,
        source: item.tag,
        desc: item.description,
        date: item.created_at,
        coverImg: item.coverImg
      };
      setPost(result);
      console.log('result', result);
    })
  }
  const formattedDate = moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a');
  return (
    <>
      <Header />
      <main className='px-[40px]'>
        <div className='px-6 md:px-20 lg:px-56 mt-10 py-6'>
          <h3 className='text-orange2 text-[18px]'>{post.source}</h3>
          <h3 className='text-dark'>{formattedDate}</h3>
          <h3 className='text-[23px] font-bold text-dark'>{post.title}</h3>
          <img src={post.coverImg} className='rounded-2xl mt-5 mb-5 w-full' />
          <h3>{post.desc}</h3>
        </div>
      </main>

      <Footer />
    </>

  )
}

export default BlogDetails
