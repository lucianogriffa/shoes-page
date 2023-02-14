import React from 'react'
// CSS - Styles
import './styles.css'
const CardBottom = ({card: {id, img}}) => {
  return (
    <div key={id} className="card">
      <img className="card__img" src={img} alt="Nike Shoes"/>
    </div>
  )
}
export default CardBottom