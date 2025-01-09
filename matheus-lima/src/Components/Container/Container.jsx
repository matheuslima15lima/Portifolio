import React from 'react'
import "./Container.css"
export const Container = ({children}) => {
  
   
        return (<div className="ContainerBackground">{children}</div>)
        
    
  
}

export const SectionAbout = ({children})=>{
        return(<div className='sectionAbout'>
                {children}
        </div>)
}
