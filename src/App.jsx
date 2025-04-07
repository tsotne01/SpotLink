import React from 'react'
import Login from './Pages/Login'
import Header from './Components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Map from './Components/Map/Map'
import Events from './Components/Events/Events'
import Clubs from './Components/Clubs/Clubs'
const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
    errorElement: <>Error</>
  },
  {
    path: "/Dashboard",
    Component: Dashboard,
    children: [
      { path: "/Dashboard/Map", Component: Map },
      { path: "/Dashboard/Events", Component: Events },
      { path: "/Dashboard/Clubs", Component: Clubs }
    ],
    errorElement: <>Error</>
  }
])


const App = () => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App