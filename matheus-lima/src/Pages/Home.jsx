import React from 'react'
import { Container } from '../Components/Container/Container'
import { Header } from '../Components/Header/Header'
import { ImageContainer } from '../Components/ImageContainer/ImageContainer'
import { Subtitle, Title } from '../Components/Title/Title'


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
        </article>
      </Container>

    </>


  )
}
