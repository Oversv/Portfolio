import { useState } from 'react';
import './App.scss';
import Navbar from './components/Nav/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {

  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <>
      <Navbar 
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
        <Home />  
      <main>
        <About />
        <Portfolio />        
      </main>
      <Footer />
    </>
  );
}

export default App;
