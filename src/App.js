import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
