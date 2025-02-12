import React from 'react'
import './Header.css'
import { Subtitle} from '../Title/Title'
export const Header = () => {
  return (
    <div className='nav-bar'>

    
      {/* <button className='close-button'>x</button> */}
      <span style={{ color: 'red', fontSize: '24px' }}>x</span>
  <ul>
    <li><a href="#about" className='textHeader'>Sobre</a></li>
    <li><a href="#services"className='textHeader'>Habilidades</a></li>
    <li><a href="#contact"className='textHeader'>Projetos</a></li>
  </ul>

    </div>
  )
}
