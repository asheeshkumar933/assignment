import React from 'react'
import Header from './component/Header/header'
import Footer from './component/footer/Footer'
import Upperfooter from './component/Upperfooter/Upperfooter'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Upperfooter />
      <Footer/>
      
    </>
  )
}

export default Layout
