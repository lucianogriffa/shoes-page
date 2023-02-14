import React, { useState, useEffect } from 'react'
// CSS - Styles
import './styles.css'
// Image
import logo from '../assets/img/nike.png'
// Component
import BottomPage from '../containers/BottomPage'
const TopText = ({img: {handleClick}}) => {
  console.log(handleClick, "Esto es el log inic")
  return (
    <div className='topText'>
      <img className='topText__img' src={logo} alt="NikeLogo" onClick={() => handleClick(logo)}/>
      <h2 className='topText__text topText__text-h2' >Nike Air Jordan</h2>
      <h1 className='topText__text topText__text-h1' >1 Mid</h1>
      <p className='topText__text topText__text-p' >Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p>
      <BottomPage/>
    </div>
  )
}

export default TopText