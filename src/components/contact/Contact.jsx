import React from 'react'
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { SiInstagram } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'

import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8i0k9br', 'template_o2qbomb', form.current, '3WC1QE-JYFuulTe4R')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>edu.nikhiltiwari@gmail.com</h5>
            <a href='mailto:edu.nikhiltiwari@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <SiInstagram className='contact_option-icon' />
            <h4>InstaGram</h4>
            <h5>@au_wild</h5>
            <a href='https://instagram.com/au_wild' target='_blank'>Send a Message</a>

          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+919340611402</h5>
            <a href='https://wa.me/919340611402?text=Hi' target='_blank'>Send a Message</a>
          </article>
        </div>

        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="messsage" rows="7" placeholder='Write Your Message' required></textarea>
          <button type='submit' className="btn btn-primary contact_btn">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact