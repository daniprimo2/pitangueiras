import React from 'react'
import fotoFarmaceutica from '../logo/embalagem-produto-removebg-preview.png'; 
import fotoCrianca from '../logo/embalagem-produto-removebg-preview(1).png'; 
import pirulas from '../logo/WhatsApp_Image_2024-10-21_at_17.34.55-removebg-preview.png'; 

import './main.sass'
import { BsWhatsapp } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import Comentarios from '../comentarios/Comentarios';
import Footer from '../Footer/Footer';
import SobreNos from '../SobreNos/SobreNos';
import { ImPencil } from "react-icons/im";

function Banners() {
  return (
    <>
        <div className='principal'>
            
            <div className="banner-maior">
                <div className='quadro-mensagem'>
                    <p className='titulo-mensagem'>Monte seu produto ?</p>
                    <p className='texto-mensagem'>Descubra o poder da personalização <br />
                        com a nova linha de cuidados labiais da Pitangueira.  <br />
                        Crie seu kit exclusivo, feito para você, <br /> 
                        com produtos sustentáveis e personalizados <br />
                        para refletir seu estilo único.</p>
                    <button className='botao-enviar'>
                       <ImPencil className='icone-whats'/> Solicite seu kit
                    </button>
                </div>
                <div className='imagem'>
                    <img src={fotoFarmaceutica} alt="Foto farmaceutica" />
                </div>
            </div>


            <div className="espaco-banner-segundarios">
                <div className="banner-segundario primeiro">
                    <div className="bloco-um">
                        <p className='titulo-kids'>Quer Falar com um consultor ? </p>

                        <p className='texto-crianca'>Profissionais para auxiliar.</p>
                        <button className='botao-enviar'>
                            <BsWhatsapp className='icone-whats'/> Enviar uma mensagem
                        </button>
                    </div>
                    <div className="bloco-dois">
                        <img src={fotoCrianca} alt="foto da crianca" />
                    </div>
                </div>
                <div className="banner-segundario dois-roles">
                    <div className="bloco-dois-um">
                      <img src={pirulas} alt="" />  
                    </div>
                    <div className="bloco-dois-dois">
                        <p className='titulo-dois'>Acompanhar meus pedidos</p>
                        <p className='mensagem-dois'>carrinho de compra</p>
                        <button className='botao'>
                            Acessar
                        </button>
                    </div>
                </div>
            </div>
        </div>




    </>
  )
}

export default Banners