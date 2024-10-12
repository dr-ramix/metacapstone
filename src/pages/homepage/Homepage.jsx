import React from 'react'
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import Box from '../../components/box/Box';
import Cards from '../../components/cards/Cards';
import Testimonials from '../../components/testimonials/Testimonials';
import OnlineMenu from '../../components/onlineMenu/OnlineMenue';


const Homepage = () => {
  return (
    <div>
    <Main>
      <Box />
      <OnlineMenu />
      <Cards />
      <Testimonials />
    </Main>
    </div>

  )
}

export default Homepage
