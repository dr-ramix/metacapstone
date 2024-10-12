import React from 'react'
import './cards.css'
import Card from '../card/Card'
import imgCard from '../../assets/images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg'

const Cards = () => {
  return (
    <section className='cards'>
      <Card  img={imgCard} />
      <Card  img={imgCard} />
      <Card  img={imgCard} />
    </section>
  )
}

export default Cards;
