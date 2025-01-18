import React from 'react'
import { SectionAbout } from '../Container/Container'
import { ImageProject } from '../ImageContainer/ImageContainer'
import './ContainerProjects.css'
import { Title } from '../Title/Title'
export const ContainerProjects=({image})=>{
  return (
    <SectionAbout>
    <ImageProject>
      <img className='img' src={image} alt="Projeto"/>
    </ImageProject>

    <div className='divText'>
      <Title>Event+</Title>
    <p>O Event+ é um sistema feito para o gerenciamento de eventos, onde o usuário pode cadastrar editar e deletar eventos e o usuário pode se conectar a um evento e comentar sobre eles. Os comentários possuem IA que reconhece palvras obscenas, assim não exibindo os comentários que as contém.</p>
    </div>
  </SectionAbout>
  )
}
