import React from 'react'

import "./App.css"

import Hero from './assets/components/Hero/Hero';
import Header from './assets/components/Header/Header';
import Nav from './assets/components/Nav/Nav';
import Mainn from './assets/components/Mainn/Mainn';
import Section from './assets/components/Section/Section';
import Article from './assets/components/Article/Article';
import Aside from './assets/components/Aside/Aside';
import Footer from './assets/components/Footer.css/Footer';
const App = () => {
  return (
    <>
      <Hero/>
      <Header/>
      <Nav/>
      <Mainn/>
      <Section/>
      <Article/>
      <Aside/>
      <Footer/>
    </>
  )
}

export default App