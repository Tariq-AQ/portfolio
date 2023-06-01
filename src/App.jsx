import React,{useState} from 'react'
import './app.css'
import {Header,Nav,About,Footer,Experience,Services,Portfolio,Testimonial, Contact} from './components/index'
const App = () => {
  const[activeNav, setActiveNav] = useState('#')
  const[captionVisible, setCaptionVisible] = useState(false)
  const[captionValue, setCaptionValue] = useState('')
  return (
    <>
   {captionVisible && captionValue!==''?  <div className="caption__container">
     <h1>{captionValue}</h1>
    </div>:null}
    <Header />
    <Nav captionValue={captionValue} setCaptionValue={setCaptionValue}
     captionVisible={captionVisible} setCaptionVisible={setCaptionVisible}
      activeNav={activeNav} setActiveNav={setActiveNav} />
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