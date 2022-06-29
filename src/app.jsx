import React from 'react'

import TopBar from './components/topbar/topbar'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experiance/experiance'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/certifications/certifications'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
const app = () => {
  return (
    <>
      <TopBar/>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
    // testimonials sections removed as i didn't had any testimonials
    // instead i tried going with the certifications i had
  )
}

export default app
