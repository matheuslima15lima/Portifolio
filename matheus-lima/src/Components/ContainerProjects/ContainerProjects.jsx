import React from 'react'
import { SectionAbout } from '../Container/Container'
import { ImageProject } from '../ImageContainer/ImageContainer'
import './ContainerProjects.css'
import { Title } from '../Title/Title'
export const ContainerProjects=({image, project, description , usedTec})=>{
  return (
    <SectionAbout>
    <ImageProject>
      <img className='img' src={image} alt="Projeto"/>
    </ImageProject>

    <div className='divText'>
      <Title>{project}</Title>
    <p>{description}</p>

    <div>
    <p>Tecnologias:</p>
      <p>{usedTec}</p>
    </div>

    </div>
  </SectionAbout>
  )
}
