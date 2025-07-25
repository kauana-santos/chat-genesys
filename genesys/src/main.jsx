import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from "./routes/Home.jsx"
import Contact from "./routes/Contact.jsx"
import Error from "./routes/Error.jsx"

// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "contact",
//     element: <Contact/>
//   }

// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //pagina de erro
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]

  }  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
