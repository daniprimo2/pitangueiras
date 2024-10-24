import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

import foto from './Jacob _ The New Guy .card.png'

import './main.sass'
import Slider from 'react-slick'
import Banners from '../BannersPrincipal/Banners'
import Footer from '../Footer/Footer'
import Comentarios from '../comentarios/Comentarios'
import BarraInicial from '../BarraInicial/BarraInicial'

function Layout() {

  return (
    <>
        <BarraInicial />

        <Banners />

        
        <div>
            <Comentarios />
        </div>

        
        <div>
            <Footer />
        </div>

    </>
  )
}

export default Layout