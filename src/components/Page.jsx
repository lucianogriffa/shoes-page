import React, { useEffect, useState } from 'react'
// CSS - Styles
import './styles.css'
// Image
import logo from '../assets/img/nike.png'
import creativeLogo from '../assets/img/creativeImage.png'
const Page = () => {  
  // Array
  const card = [
    {id: 1, img: '/ShoesProd1.png'},    
    {id: 2, img: '/ShoesProd2.png'},
    {id: 3, img: '/ShoesProd3.png'},
    {id: 4, img: '/ShoesProd4.png'},
  ]
  const [topImg, setTopImg] = useState()
  console.log(topImg, ' state ')
  useEffect(() => {
    setTopImg(creativeLogo)
  }, [])
  const handleClick = (img) => {
    setTopImg(img)
  }
  return (
    <div className='topPage'>
      <div className='topText'>
        <img className='topText__img' src={logo} alt="NikeLogo" />
        <h2 className='topText__text topText__text-h2' >Nike Air Jordan</h2>
        <h1 className='topText__text topText__text-h1' >1 Mid</h1>
        <p className='topText__text topText__text-p' >Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p>
        <div className='bottomPage'>
          {card.map(card => {
            return (
              <div key={card.id} className="card" onClick={() => handleClick(card.img)}>
                <img className="card__img" src={card.img} alt="Nike Shoes"/>
              </div>
            )
          })}
        </div>
      </div>
      <img className='topImage' src={topImg} alt="nikeShoes" />
    </div>
  )
}
export default Page