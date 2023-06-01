import React, {useRef, useState} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

  




function Contact() {
  const form = useRef();
  const [hasClass, setHasClass]=useState(false)

  const handleClick = () => {
    setHasClass(true);
    setTimeout(() => {
      setHasClass(false)
    }, 3000);
  };




  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ewt2ha7','template_pyxy20h', form.current,'lQSXsqvd0wELibDX1' )
    .then((result)=>{

    
handleClick()
      console.log(result.text);
    }, (error)=>{console.log(error.text);
    });
    e.target.reset();

  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contacts List</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option"  >
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tariq.esa90@gmail.com</h5>
            <a href="mailto:tariq.esa90@gmail.com" target='_blank'>Send a message</a>
          </article>
        
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Tariq</h5>
            <a href="https://api.whatsapp.com/send?phone+447397829976" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
       
        <form ref={form} onSubmit={sendEmail} action="">
      {/* <button onClick={handleClick}>Toggle Class</button> */}
      <p className={!hasClass ? 'flash__message' : 'flash__message-hidden'}>Email sent!</p>
          <input type="text" name='name' placeholder='Your name here' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message...' required></textarea>
          <button type='submit'  className='btn btn-primary'>Send</button> 
    
       
        </form>
     
      </div>
    </section>
  )
}

export default Contact