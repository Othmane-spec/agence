import axios from "axios";
import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => { },
  setUserToken: () => { },
  // posts: [],
});

// const getPostsFromApi = async () => {
//   try {
//     const response = await fetch('http://localhost:8000/api/posts', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',

//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Erreur lors de la récupération des posts :', error);
//     throw error;
//   }
// };

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
  // const [posts, setPosts] = useState([]);


  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  }
  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        // posts,
        // setPosts


      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
