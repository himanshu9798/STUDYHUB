import React from 'react'
import './card.css'

function Card({ image, Topic, link, text }) {
  return (
    <div className='card_container'>
      <img className='image' src={image} alt="logo"/>
      <h1 className='topic'>{Topic}</h1>
      <p style={{textAlign:"center"}}>{text}</p>
      <button className='card_button'>
        <a href={link} target="_blank">Details About</a>
      </button>
    </div>
  )
}

export default Card
