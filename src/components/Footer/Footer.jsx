import React from 'react'

import './main.sass'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-conteudo">
            <p>&copy; {new Date().getFullYear()} Pitangueira cosmedicos.</p>
            <ul className='footer-links'>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Solicitar Kit</a></li>
                <li><a href="/">Resenhas</a></li>
                <li><a href="/sobrenos">Sobre nós</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer