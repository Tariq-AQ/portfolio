import React,{useState} from 'react'
import {Header,Nav,About,Footer,Experience,Services,Portfolio,Testimonial, Contact} from './components/index'
const App = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <>
    
    <Header />
    <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
    <About/>
    <Experience/>
    <Services />
    <Portfolio />
    <Contact />
    <Footer activeNav={activeNav} setActiveNav={setActiveNav} />

    </>
  )
}

export default App