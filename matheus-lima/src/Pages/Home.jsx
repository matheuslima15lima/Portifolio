import React from 'react'
import { Container, SectionAbout } from '../Components/Container/Container'
import { Header } from '../Components/Header/Header'
import { ImageContainer, ImageProject } from '../Components/ImageContainer/ImageContainer'
import { Subtitle, Title } from '../Components/Title/Title'
import { ButtonContact } from '../Components/ButtonContact/ButtonContact'
import './Home.css'
import { ContainerProjects } from '../Components/ContainerProjects/ContainerProjects'
import image from '../assets/images/work.png';
import { Slides } from '../Components/Slides/Slides';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Container>
        
        <article style={{
          marginTop:20
        }}>
        <ImageContainer />
        </article>

        <article style={{
            display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column'
        }
        }

        >
        

          
          <Title>Matheus Lima</Title>
          <Subtitle>Desenvolvedor Full Stack</Subtitle>
          <div style={{
            display: 'flex',
            flexDirection:'row',
            gap: 10,
            marginTop: 10
          }}>
          <ButtonContact>
            <h1>
              Contate-me
            </h1>
            </ButtonContact>
            <ButtonContact>
            <h1>
              CV
            </h1>
            </ButtonContact>
            </div>
        </article>
        
      </Container>

      <SectionAbout>
        <Title>Sobre Mim</Title>

        <section className='sectionText'>
        <p className='text-about'>Olá! Meu nome é Matheus, e sou desenvolvedor de sistemas apaixonado por transformar ideias em soluções digitais. Desde o início da minha jornada em 2023, quando comecei o curso de Desenvolvimento de Sistemas no Senai Info, venho aprimorando minhas habilidades em React, React Native, HTML, CSS, JavaScript, C#, e SQL Server.

Tenho experiência prática com projetos nessas tecnologias, o que me permite criar interfaces modernas, aplicações responsivas e sistemas robustos. Além de resolver problemas com eficiência, adoro aprender coisas novas e me desafiar a construir soluções cada vez melhores.

Minha principal motivação é ajudar empresas e pessoas a alcançar seus objetivos por meio da tecnologia, sempre buscando inovar e agregar valor. Quando não estou codando, gosto de explorar novos conhecimentos e acompanhar as tendências do mundo da tecnologia.</p>
        </section>
      
      </SectionAbout>
          <ContainerProjects
            project={"Event+"}
            description={"O Event+ é um sistema feito para o gerenciamento de eventos, onde o usuário pode cadastrar editar e deletar eventos e o usuário pode se conectar a um evento e comentar sobre eles. Os comentários possuem IA que reconhece palvras obscenas, assim não exibindo os comentários que as contém."}
            image={image}
            link={"https://eventplusmatheuslimacav.vercel.app/"}
          />
          <ContainerProjects
            project={"Event+"}
            description={"O Event+ é um sistema feito para o gerenciamento de eventos, onde o usuário pode cadastrar editar e deletar eventos e o usuário pode se conectar a um evento e comentar sobre eles. Os comentários possuem IA que reconhece palvras obscenas, assim não exibindo os comentários que as contém."}
            image={image}
            usedTec={"HTML, CSS, React.js JavaScript, C#, SQL Server"}
          />
  
       

          <Slides/>
           
           <footer className='footer-home'>
            <div className='div-footer'>

              <a  className='link-footer' href='https://www.linkedin.com/in/-matheus-lima/'>
              <FaLinkedinIn style={{
            width:24,
            height:24
           }}/>
              </a>
          
              <a className='link-footer' href='https://github.com/matheuslima15lima'>
              <FaGithub
            style={{
              width:24,
              height:24
            }}
           />
              </a>
           
            </div>
            <p className='text-footer'>© 2025 Matheus Lima Cavalcanti. Todos os direitos reservados.</p>
           </footer>
    </div>


  )
}
