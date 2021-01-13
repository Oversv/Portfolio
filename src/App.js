import { useState } from 'react';
import './App.scss';
import Navbar from './components/Nav/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <>
      <Navbar 
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <main>
        <Home />  
        <About />
        <Portfolio />
      </main>

    </>
  );
}

export default App;
