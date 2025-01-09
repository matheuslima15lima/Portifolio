import React from 'react'
import './Header.css'
import { Subtitle} from '../Title/Title'
export const Header = () => {
  return (
    <div className='nav-bar'>

    
      
  <ul>
    <li><a href="#about" className='textHeader'>Sobre</a></li>
    <li><a href="#services"className='textHeader'>Habilidades</a></li>
    <li><a href="#contact"className='textHeader'>Projetos</a></li>
  </ul>

    </div>
  )
}
