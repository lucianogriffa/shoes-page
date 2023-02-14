import React from 'react'
// Component
import CardBottom from '../componentes/CardBottom'
// CSS - Styles
import './styles.css'
// Array
const card = [
  {id: 1,img: '/shoesProd1.png'},    
  {id: 2,img: '/ShoesProd2.png'},
  {id: 3,img: '/ShoesProd3.png'},
  {id: 4,img: '/ShoesProd4.png'},
]
const BottomPage = () => {
  return (
    <div className='bottomPage'>
      {card.map(card => <CardBottom card={card} key={card.id}/>)}
    </div>
  )
}
export default BottomPage