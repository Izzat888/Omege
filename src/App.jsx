import React from 'react'

import "./App.css"

import Hero from './assets/components/Hero/Hero'
import Header from './assets/components/Header/Header'
import Nav from './assets/components/Nav/Nav'
import Main from './assets/components/Main/main'
import Section from './assets/components/Section/Section'
import Article from './assets/components/Article/Article'
import Footer from './assets/components/Footer.css/Footer'
const App = () => {
  return (
    <>
      <Hero/>
      <Header/>
      <Nav/>
      <Main/>
      <Section/>
      <Article/>
      <Footer/>
    </>
  )
}

export default App