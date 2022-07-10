import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Consult from './components/Consult';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Foundation from './components/Foundation';
import Home from './components/Home';
import Investment from './components/Investment';
import Navbar from './components/Navbar';
import Services from './components/Services';



function App() {

  let app = useRef(null);

  useEffect(() =>{
    gsap.to(app,{visibility: "visible", duration: 2})
    console.log(app);
  })
  return (
    <div ref={el => app = el} className='App'>
        <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/consult' element={<Consult/>}></Route>
          <Route path='/investment' element={<Investment/>}></Route>
          <Route path='/foundation' element={<Foundation/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
