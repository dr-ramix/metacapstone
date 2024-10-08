import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
    <Header>
      <Nav />
    </Header>
    <Main>
      <h1>Section</h1>
    </Main>
    <Footer>
      <h3>Footer</h3>
    </Footer>
   </>
  );
}

export default App;
