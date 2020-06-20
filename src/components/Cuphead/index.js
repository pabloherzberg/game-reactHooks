import React, { useState, useEffect } from 'react'
import CupheadDiv from './styled'
import cupheadImg from '../../sprites/cuphead.png'
import useEventListener from '@use-it/event-listener'
import { walkRight, walkDown, walkUp } from './cena'
import { width, height } from '../../constants'
import { useColision } from '../../context/Colision'

export default function Cuphead(){
 
  const { cupheadPos, setCupheadPos, trees } = useColision()
  const [ inverter, setInverter ] = useState(1)
  const [ count, setCount ] = useState(0)
  const [ left, setLeft ] = useState(cupheadPos.left)
  const [ top, setTop ] = useState(cupheadPos.top)
  const [ colide, setColide ] = useState([])

  async function turnRight(){
    setInverter(1)
    setCount(count === walkRight.length - 1 ? 0 : count + 1)
    setLeft(left >= width ? left : left + 6)
    await setCupheadPos({...walkRight[count], left: left, top: top})
  }
  
  async function turnLeft(){
    setInverter(-1)
    setCount(count === walkRight.length-1 ? 0: count +1)
    setLeft(left <= 10 ? left : left-6)
    await setCupheadPos({...walkRight[count], left: left, top: top})
  }
  
  async function turnDown(){
    setCount(count === walkDown.length-1 ? 0: count +1)
    setTop(top >= height -100? top: top+6)
    await setCupheadPos({...walkDown[count], left: left, top: top})
  }
  
  async function turnUp(){
    setCount(count === walkUp.length-1 ? 0: count +1)
    setTop(top <= 10? top: top-6)
    await setCupheadPos({...walkUp[count], left: left, top: top})
  }

  useEventListener('keydown', ({key})=>{
        
    setColide(trees.map(tree =>{
        if(
            (  
              (cupheadPos.left + cupheadPos.width >= tree.left) &&  //esquerda da árvore
              (cupheadPos.left <= tree.left + tree.width)           //direitra da árvore
            )   
            &&
            (
              (cupheadPos.top + cupheadPos.height >= tree.top) &&   //topo da árvore
              (cupheadPos.top <= tree.top + tree.height)            //base da árvore
            ) 
          )
        {
          return true
        }else
        {
          return false
        }
      })
    )
    switch (key) {

      case 'ArrowRight':
        colide.includes(true) ?
          console.log('colidiu', trees)
          :turnRight()        
      break; 

      case 'ArrowLeft':
        colide.includes(true) ?
          console.log('colidiu' , trees)
          :turnLeft()
      break;   
     
      case 'ArrowDown':
        colide.includes(true)?
          console.log('colidiu', trees)
          :turnDown()
      break;

      case 'ArrowUp':
        colide.includes(true)?
          console.log('colidiu', trees)
          :turnUp()
      break;

      default:
        console.log('nada')
      break;
    }
  })

  useEventListener('keyup', ()=>{
    setColide([false])
  })

  return(
          <CupheadDiv 
            cupheadPos={cupheadPos} 
            cupheadImg={cupheadImg}
            inverter={inverter}
         />
  )
}