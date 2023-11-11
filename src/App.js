import React from 'react'
import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';

export const mobileNav = React.createContext();

function App() {
  let [isMobileNavOpen, setisMobileNavOpen] = useState(false)
  return (

    <div className='container'>
      <mobileNav.Provider value={[isMobileNavOpen, setisMobileNavOpen]}>
        <Header />
        <Body />
        <Footer />
      </mobileNav.Provider>
    </div>
  );
}

export default App;
