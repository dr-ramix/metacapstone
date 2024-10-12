import React from 'react'
import './onlineMenu.css'
import BigButton from '../bigButton/BigButton';

const OnlineMenu = () => {
  return (
    <section className='onlineMenu'>
        <h1>This Week Specials!!!</h1>
        <BigButton backgroundColor={"#F4CE14"}> Online Menu</BigButton>
    </section>
  )
}

export default OnlineMenu;
