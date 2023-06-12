import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import LazyLoad from 'react-lazyload'

const App = () => {
  return (
    <>
        <Header />
        
        <Nav />
        <LazyLoad offset={25} once>
            <About />
        </LazyLoad>
        <Experience />
        <Services />
        <LazyLoad offset={100} once>
            <Portfolio />
            </LazyLoad>
        {/* <Testimonials /> */}
            <Contact />
            <Footer />
    </>
  )
}

export default App