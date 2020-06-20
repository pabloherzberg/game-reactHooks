import styled from 'styled-components'

const CupheadDiv = styled.div`
position: absolute;
display: block;
background: 
      url(${props => props.cupheadImg}) 
      no-repeat 
      ${props => props.cupheadPos.urlX}px 
      ${props => props.cupheadPos.urlY}px;
width: ${props => props.cupheadPos.width}px;
height:${props => props.cupheadPos.height}px;
left: ${props => props.cupheadPos.left}px;
top: ${props => props.cupheadPos.top}px;
transform: scaleX(${props => props.inverter})
`

export default CupheadDiv