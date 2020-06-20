import React, { memo } from 'react'
import tree from '../../sprites/tree.png'

 function Tree({ treeProps }) {

  return (
    <div
      style={{
        position: 'absolute',
        display: 'block',
        background: `url(${tree}) no-repeat ${treeProps.urlX}px ${treeProps.urlY}px`,
        width: `${treeProps.width}px`,
        height: `${treeProps.height}px`,
        left: `${treeProps.left}px`,
        top: `${treeProps.top}px`,
      }}
    >
    </div>
  )
}

export default memo(Tree)