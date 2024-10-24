import React from 'react'
import pitangueira from './WhatsApp_Image_2024-10-14_at_13.46.40-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

function BarraInicial() {
  const navigate  = useNavigate()
  const acao = () => {
    navigate("/")
  }
    
  return (

    <header>
        <img src={pitangueira} alt="" className='pintangueira' onClick={() => acao()}/>        
        
        <div class="icon icon1"></div>
        <div class="icon icon2"></div>
        <div class="icon icon3"></div>
        <div class="icon icon4"></div>
    </header>
)
}

export default BarraInicial