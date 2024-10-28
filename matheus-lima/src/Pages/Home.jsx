import React from 'react'
import { Container } from '../Components/Container/Container'
import { Header } from '../Components/Header/Header'
import { ImageContainer } from '../Components/ImageContainer/ImageContainer'
import { Subtitle, Title } from '../Components/Title/Title'
import { ButtonContact } from '../Components/ButtonContact/ButtonContact'
import './Home.css'

export const Home = () => {
  return (
    <>
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

    </>


  )
}
