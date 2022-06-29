import React from 'react'
import './about.css'
import nikimg from '../../assets/student.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={nikimg}  alt="About Nikhil Tiwari" />
          </div>
        </div>


        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>4+ clients across world</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>Made With Passion</small>
            </article>
          </div>

          <p>
          I am Nikhil Tiwari, Passionate Web Developer and undergraduate student of Bachelor of Computer Applications (BCA) department at Awadhesh Pratap Singh University (APSU)
          </p>

          <a href="#contact" className='btn btn-promary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about