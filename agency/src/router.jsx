import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Login from './pages/Login';
import DefaultLayout from "./components/DefaultLayout";
import Dashbord from "./pages/Dashbord";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/Services',
    element: <Services />
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Blog',
    element: <Blog />
  },
  {
    path: 'Blog/blog-detail/:id',
    element: <BlogDetails />
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "dashbord",
        element: <Dashbord />,
      },
    ],
  }

])

export default router;
