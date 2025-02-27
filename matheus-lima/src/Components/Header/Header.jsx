import React, { useState } from 'react'
import './Header.css'
import { Subtitle} from '../Title/Title'
import { IoMenu } from "react-icons/io5";
export const Header = () => {
  const handleClick = () => {
alert('Você clicou no X!');
};

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu= ()=> {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className='header'>
    

    <IoMenu className='menu-icon' style={{color: 'white', width:'40px', height:'40px' , cursor: 'pointer'}}
      onClick={toggleMenu}
    />

    <div className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>

    {isMenuOpen?(
  <span className='xspan' onClick={toggleMenu}>x</span>
) : null}
    
   <div className='div-content'>
    
  <ul>
    <li><a href="#about" className='textHeader'>Sobre</a></li>
    <li><a href="#services"className='textHeader'>Habilidades</a></li>
    <li><a href="#contact"className='textHeader'>Projetos</a></li>
  </ul>
    </div> 

    </div>

    </header>
  )
}
