import React, { useState } from 'react'
import './Header.css'
import { Subtitle } from '../Title/Title'
import { IoMenu } from "react-icons/io5";
export const Header = () => {
  const handleClick = () => {
    alert('Você clicou no X!');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className='header'>
      <div className="nav-bar" >
        <div className={`div-content`}>
          <IoMenu className='menu-icon' style={{ color: 'white', width: '30px', height: '30px', cursor: 'pointer', marginLeft: '10px' }}
            onClick={toggleMenu}
          />
        </div>

        <ul className={`ul${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" className='textHeader'>Sobre</a></li>
          <li><a href="#services" className='textHeader'>Habilidades</a></li>
          <li><a href="#contact" className='textHeader'>Projetos</a></li>
        </ul>
      </div>

    </header >
  )
}
