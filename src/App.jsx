
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Homeus from './Page/Home'
import About from './Page/About'
import Services from './Page/Services'
import Page404 from './Page/page404'
import Galerry from './Page/Galerry'
import Contact from './Page/Contact'
import News from './Page/News'
import Story from './Page/story'
import Careers from './Page/careers'

const App = () => {
  const router =  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Homeus />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '*',
          element: <Page404 />
        },
        {
          path: '/gallery',
          element: <Galerry />
        },
        {
          path:'/contact',
          element: <Contact />
        },
        {
          path:"/news",
          element: <News />
        },
        {
          path:"/story",
          element: <Story />
        },
        {
          path:"/careers",
          element: <Careers />
        }
        
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
