// src/App.js
import React from 'react';
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import Highlight from './components/Highlights.jsx';
import Model from './components/Model.jsx';
import * as Sentry from '@sentry/react'
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';

const App=()=>
   {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
      

    </main>
  );
}

export default Sentry.withProfiler(App);
