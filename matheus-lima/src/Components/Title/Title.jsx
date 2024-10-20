import React from 'react'
import './Title.css'
export const Title = ({children}) => {
  return (
    <h1 className='title'>{children}</h1>
  )
}

export const Subtitle = ({children}) =>{
    return(
        <h2 className='subtitle'>{children}</h2>
    )
}
