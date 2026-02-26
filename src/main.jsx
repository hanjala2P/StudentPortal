import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Componants/Home.jsx'
import RootLayout from './Layouts/RootLayout.jsx'
import PlantsDetails from './Pages/PlantsDetails.jsx'
import axios from 'axios'
import LodingSpiner from './Componants/LodingSpiner.jsx'
import AddtoCart from './Pages/AddtoCart.jsx'
import Cart from './Pages/Cart.jsx'
import StudentList from './Componants/StudentList.jsx'
import HeroDashBoard from './Componants/HeroDashBoard.jsx'
import Performance from './Componants/Performance.jsx'
import Session from './Componants/Session.jsx' // Notun Component ta Import koro
import Analytics from './Componants/Analytics.jsx'
import Developer from './Componants/Developer.jsx'
import CGPACalculator from './Componants/CGPACalculator.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    hydrateFallbackElement: <LodingSpiner />,
    children: [
      {
        path: '/',
        element: <HeroDashBoard />,
        children: [
          {
            index: true, // Eita dilei dashboard-e dhukle blank dekhabe na, auto StudentList ashbe
            element: <StudentList />
          },
          {
            path: 'student-list',
            element: <StudentList />
          },
          {
            path: 'performance',
            element: <Performance />
          },
          {
            path: 'session', // 3rd Card-er jonno eita add kora holo
            element: <Session />
          }
        ]
      },
      {
        path: '/home',
        element: <Home />
      },
      {
       path: '/dashboard',
      element: <HeroDashBoard />
      },
      
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
  path: 'analytics',
  element:<Analytics/>
},
      {
  path: 'developer',
  element:<Developer/>
},
      {

      },
      {
        path: '/plants-details/:id',
        element: <PlantsDetails />,
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`)
      },
      {
        path: '/add-to-cart',
        element: <AddtoCart />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '*',
        element:<CGPACalculator/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)