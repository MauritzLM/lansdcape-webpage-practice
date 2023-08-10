// import { useState } from 'react'
import './App.css';
import Navbar from './components/navbar';
import HomePage from './pages/home';
import Footer from './components/footer';

function App() {
  // add conditional rendering* 

  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
