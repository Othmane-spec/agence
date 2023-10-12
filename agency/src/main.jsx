import React from 'react'
import ReactDOM from 'react-dom/client'

import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from "./contexts/ContextProvider";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>


    </NextUIProvider>
  </React.StrictMode>
)
