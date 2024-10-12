import React from 'react'
import './card.css'


const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="This is a picture" />
        <div className='detailsContainer'>
          <div className='titleContainer'>
              <h2>Greek Salad</h2>
              <p>$12.99</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam voluptua. 
          At vero eos et accusam et justo duo dolores et ea rebum. 
          Stet clita kasd gubergren, no sea takimata sanctus 
          est Lorem ipsum dolor sit amet. Lorem ipsu
          </p>
          <span>Order a delivery</span>
        </div>

    </div>
  )
}

export default Card;
