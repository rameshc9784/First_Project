import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import AppLaoyout from './layout/AppLaoyout'


const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLaoyout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About/>
        }
      ]
    },
  ]
)

const App = () => {
  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App