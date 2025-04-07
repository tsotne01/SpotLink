import React from 'react'
import Header from '../Components/Header/Header'
import Map from '../Components/Map/Map'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Dashboard