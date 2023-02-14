import React, { useState } from 'react'
// Components
import TopText from '../componentes/TopText'
// CSS - Styles
import './styles.css'
// Image
import creativeLogo from '../assets/img/topImage.png'
const TopPage = () => {
  const [topImg, setTopImg] = useState(creativeLogo)
  function handleClick(img) {
    console.log(img)
    setTopImg(img)
  }
  return (
    <div className='topPage'>
      <TopText onClick={() => handleClick()}/>
      <img className='topImage' src={topImg} alt="nikeShoes" />
    </div>
  )
}

export default TopPage