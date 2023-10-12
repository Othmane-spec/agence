import axios from "axios";

// axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, // Remplacez par l'URL de votre API Laravel

});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("TOKEN");
      window.location.reload();
      // router.navigate("/login");
      return error;
    }
    throw error;
  }
);

const getPost = () => api.get('/posts');

const getPostById = (id) => api.get(`/posts/${id}`);



export default {
  getPost,
  getPostById,
  api

};


