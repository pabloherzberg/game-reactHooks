import React, { useState, createContext, useContext } from 'react' 

const ColisionContext = createContext()

export default function ColisionProvider({ children }){
  const [ trees, setTrees] = useState()
  const [ cupheadPos, setCupheadPos] = useState({
    height: 89,
    left: 0,
    top: 268.4,
    urlX: -22,
    urlY: -352,
    width: 61
  })
  
  return(
    <ColisionContext.Provider value={{ cupheadPos, setCupheadPos, trees, setTrees }}>
      {children}
    </ColisionContext.Provider>
  )
}

export function useColision(){
  const context = useContext(ColisionContext)
  const { cupheadPos, setCupheadPos, trees, setTrees } = context
  return { cupheadPos, setCupheadPos, trees, setTrees }
}