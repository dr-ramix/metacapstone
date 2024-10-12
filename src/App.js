import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';
import OrderOnline from './pages/orderOnline/OrderOnline';
import Reservation from './pages/reservation/Reservation';
function App() {
  return (
   <div className="app">
      <Header>
        <Nav />
      </Header>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/OrderOnline' element={<OrderOnline />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
