import React from 'react'
import './portfolio.css'

import imgWelfare from '../../assets/child_welfare.png'
import imgPortfolio from '../../assets/portfolio.png'
import imgStudentGrp from '../../assets/Students Group.png'
import imgWish from '../../assets/wish.png'
import imgQuote from '../../assets/quote.png'
import imgAttandance from '../../assets/attandence.png'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className='helo' src={imgWelfare} alt="Nikhil Tiwari Projects Child welfare image" />
          </div>
          <h3>Girl Welfare</h3>
          <p className='portfolio-description'>
            We tried to introducing various government schemes for girl welfare.
            This Project was made using raw HTML CSS JS and bit use of bootstrap.
          </p>

          <div className="portfolio_item-cta">
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn-primary " target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className='helo' src={imgPortfolio} alt="Nikhil Tiwari Projects Portfolio image" />
          </div>
          <h3>Personal Portfolio Website</h3>
          <p className='portfolio-description'>
            This Website was made using React, Simple, Morden, Fully Responsive.
            The goal behind this project to Implement the theoritical knowledge.
          </p>

          <div className="portfolio_item-cta">
            <a href="#home" className="btn" target='_blank'>Github</a>
            <a href="#home" className="btn btn-primary " target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className='helo' src={imgStudentGrp} alt="Nikhil Tiwari Projects Child welfare image" />
          </div>
          <h3>Students Group</h3>
          <p className='portfolio-description'>
            This Project was made to help students to join a comunity and Achive learning Objectives togather. 
          </p>

          <div className="portfolio_item-cta">
            <a href="https://cityji.tk/StudentsGroup.html" className="btn" target='_blank'>Github</a>
            <a href="https://cityji.tk/StudentsGroup.html" className="btn btn-primary " target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className='helo' src={imgWish} alt="Nikhil Tiwari Projects Child welfare image" />
          </div>
          <h3>Wishing Page</h3>
          <p className='portfolio-description'>
            This Project was made for fun purposes, but passionately we created some very cool effects using js canvas.
          </p>

          <div className="portfolio_item-cta">
            <a href="https://cityji.tk/wish.html" className="btn" target='_blank'>Github</a>
            <a href="https://cityji.tk/wish.html" className="btn btn-primary " target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className='helo' src={imgQuote} alt="Nikhil Tiwari Projects Child welfare image" />
          </div>
          <h3>Quote of the Day!</h3>
          <p className='portfolio-description'>
            We tried fetching dynamic data from server using API's  we implemented a get quote site. and load pady dynamicaly
          </p>

          <div className="portfolio_item-cta">
            <a href="https://cityji.tk/quote/" className="btn" target='_blank'>Github</a>
            <a href="https://cityji.tk/quote/" className="btn btn-primary " target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className='helo' src={imgAttandance} alt="Nikhil Tiwari Projects Child welfare image" />
          </div>
          <h3>Digital Attandance Recorder</h3>
          <p className='portfolio-description'>
            This Project was made to quickly make formatted attandance reports share or send with teachers seamlessly.
          </p>

          <div className="portfolio_item-cta">
            <a href="https://cityji.tk/attandance/" className="btn" target='_blank'>Github</a>
            <a href="https://cityji.tk/attandance/" className="btn btn-primary " target='_blank'>Live Demo</a>
          </div>
        </article>


      </div>
    </section >
  )
}

export default portfolio