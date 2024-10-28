import React from 'react'
import './ButtonContact.css'
export const ButtonContact = ({children}) => {
  return (
        <div className='buttonDiv'>

      
        <button className='button'>
            {children}
        </button>
        </div>
 
  )
}
