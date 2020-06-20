import React from 'react'
import ColisionProvider from '../context/Colision'
import './styles.css'
import { width } from '../constants'
import Cuphead from '../components/Cuphead'
import Stage from '../Stage'

export default function World(){

  return(  
    <ColisionProvider>
      <div 
        style={{
          width: width
        }}
        className='world'>

          <Stage />
          <Cuphead />

      </div>
    </ColisionProvider>
  )
}