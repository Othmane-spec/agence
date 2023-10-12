import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroPost from '../components/IntroPost'
import GlobalApi from '../Services/GlobalApi'
import Posts from '../components/Posts'
import { useStateContext } from '../contexts/ContextProvider'
function Blog() {
  const [post, setPost] = useState([]);
  // const { posts, setPosts } = useStateContext();

  useEffect(() => {
    getPost();

  }, []);

  const getPost = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Ajoutez d'autres en-têtes si nécessaires, par exemple pour l'authentification
        },
      });

      // Vérifiez si la réponse HTTP est réussie (statut 200 OK)
      if (!response.ok) {
        throw new Error('La requête a échoué avec le statut ' + response.status);
      }

      // Convertissez la réponse en JSON
      const data = await response.json();

      // Transformez les données en un format souhaité
      const result = data.map((item) => ({
        id: item.id,
        title: item.title,
        source: item.tag,
        desc: item.description,
        coverImg: item.coverImg,
      }));

      // Mettez à jour l'état avec les données
      setPost(result);
    } catch (error) {
      // Gérez les erreurs ici
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  return (
    <div>
      <Header />
      <main className='py-5 px-[20px]'>
        <Search />
        {post.length > 0 && <IntroPost post={post[0]} />}
        {post.length > 0 && <Posts posts={post} />}






      </main>


      <Footer />
    </div>
  )
}

export default Blog
