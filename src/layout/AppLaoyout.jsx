import React from 'react'

import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Offer from '../components/Offer'

const AppLaoyout = () => {
  return (
    <>
        <Offer />
        <Header />
        <Outlet />
    </>
  )
}

export default AppLaoyout