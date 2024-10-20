import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div className='nav-bar'>
       <nav className='glowing-line'>
  <ul>
    <li><a href="#about">Sobre</a></li>
    <li><a href="#services">Habilidades</a></li>
    <li><a href="#contact">Projetos</a></li>
  </ul>
</nav>
    </div>
  )
}
