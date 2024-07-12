import React from 'react';
import './App.css';
// import Demo from './components/Demo';
// import Parctice from './components/Parctice';
// import Hello from './components/Hello';
// import Practice from './components/Practice';
// import Car from './components/Car';
// import Event from './components/Event';
// import Home from './Pages/Home';
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Services from './Pages/Services'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import UseState from './components/UseState';
// import Restaurent from './Project/Restaurent';
import Bootstrap from './components/Bootstrap';
import Bootstrap2 from './components/Bootstrap2';
function App() {
  // const mystyle = {
  //   color: 'red',
  //   backgroundColor: 'black'
  // }
  return (
    <div>
      <Bootstrap />
      <Bootstrap2 />
      {/* <Restaurent /> */}
      {/* <UseState /> */}
      {/* <Demo></Demo>
      <Demo />
      <Demo />
      <Demo />
      <Demo name="Jyoti " /> */}
      {/* <Parctice></Parctice>
      <Parctice /> */}
      {/* <Hello></Hello>
      <Practice brand="Audi" /> */}
      {/* <Car /> */}
      {/* <Event /> */}

      {/* {React.createElement('h1', {}, 'I do not use JSX!’)} */}
      {/* {React.createElement("h1", {}, "MY world")} */}

      {/* <BrowserRouter>
        <nav style={{ color: 'brown', backgroundColor: 'burlywood', fontFamily: 'arial' }}>
          <Link style={mystyle} to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter> */}
    </div >
  );
}

export default App;
