import React, { useEffect } from 'react'
import Tree from '../components/Tree'
import { treesType } from '../components/Tree/cena'
import { useColision } from '../context/Colision'

export default function Stage(){
  const { trees, setTrees } = useColision()
  
  useEffect(() => {
    setTrees([
      {
        ...treesType[0],
        left: 150,
        top: 50
      },
      {
        ...treesType[1],
        left: 350,
        top: 200
      },
      {
        ...treesType[2],
        left: 550,
        top: 450        
      },
      {
        ...treesType[9],
        left: 150,
        top: 350        
      },
    ])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  if(!trees){
    return <div></div>
  }


  return(
    <div>
      {
        trees.map((tree, key) => <Tree key={key} treeProps={tree}/>)
      }
    </div>
  )
}
