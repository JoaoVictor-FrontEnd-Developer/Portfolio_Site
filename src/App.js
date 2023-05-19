import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Projetos from './components/pages/Projetos'
import Sobre from './components/pages/Sobre'
import MenuPhone from './components/layout/MenuPhone'


function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  const click = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <Router>
      <NavBar onHandleClick={click}/>
      <MenuPhone onHandleClick={click} menuVisible={menuVisible ? "" : "visivel"} />
      
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
      
      <Footer/>
      </Router>
  );
}

export default App;
