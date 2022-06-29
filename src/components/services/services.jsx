import React from 'react'
import './services.css'

import { TiInputChecked } from 'react-icons/ti'
const services = () => {
  return (
    <section id='services'>
      <h5>What Do I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>Making Minimal Morden yet Robust Eyecatching Design.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>We are focussed to develop cost-effective and efficient solutions.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>We aim reaching to your target customers and make them use your product or service.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>we use innovative marketing strategies to reach to your intended customers with a proper channel.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>We help you create an appropriate Brand Identity for your business.</p>
            </li>
          </ul>
        </article>
        {/* end of ui/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Web Devenlopment</h3>
          </div>

          <ul className="service_list">
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>Creative Website Dewsign and Devenlopment.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>Search Engine Optimization and Web Optimization.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>Content Optimization and fast rendering.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>Secure Hosting and Spam Protection</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>We create brilliant responsive, Dynamic or Static Websites whichever is best suitable as per the needs of our client</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>We develop comprehensive mobile solutions which are tailored as per the needs of our clients and which can cater to the unique requirements of each brand and business.</p>
            </li>
          </ul>
        </article>
        {/* end of web Devenlopment */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>Social Media and Marketing services.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>We use actionable insights to understandyour customer's minds.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>Social Media Marketing and Email Marketing.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>Digital Marketing and Interactive Campaigns.</p>
            </li>
            <li>
              <TiInputChecked className='service_list-icon' />
              <p>We design marketing strategies for your brand which improves your reach to your target customers and make them use your product or service.</p>
            </li>
          </ul>
        </article>
        {/* end of Content-Creation */}

      </div>
    </section>
  )
}

export default services