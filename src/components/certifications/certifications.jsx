import React from 'react'
import './certifications.css'

// importing user avatars
// ----------- |||___####----------------------->>>>update the details when internet Connection arises
// ----------- |||___####----------------------->>>>Includes The Certifiations from drive and other Sourses
import { FiLinkedin } from 'react-icons/fi'
import AVTR2 from '../../assets/child_welfare.png'
import AVTR3 from '../../assets/texture.jpg'
import AVTR4 from '../../assets/portfolio.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const data = [
  {
    avatar: <FiLinkedin />,
    name: 'Nikhil Tiwari',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel iusto quis minus dolores dolor numquam commodi non laborum magnam voluptates cumque aut deleniti quae neque aspernatur! Perferendis, dolor alixas?'
  },
  {
    avatar: AVTR2,
    name: 'Harshit Singh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel iusto quis minus dolores dolor numquam commodi non laborum magnam voluptates cumque aut deleniti quae neque aspernatur! Perferendis, dolor alixas?'
  },
  {
    avatar: AVTR3,
    name: 'Abhishek Gupta',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel iusto quis minus dolores dolor numquam commodi non laborum magnam voluptates cumque aut deleniti quae neque aspernatur! Perferendis, dolor alixas?'
  },
  {
    avatar: AVTR4,
    name: 'Abhishek Gupta',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel iusto quis minus dolores dolor numquam commodi non laborum magnam voluptates cumque aut deleniti quae neque aspernatur! Perferendis, dolor alixas?'
  }
]




const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Here are some certifications</h5>
      <h2>Certificates</h2>


      <Swiper className="container testimonials_container"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                  <div className="avatar">{avatar}</div>
                </div>
                <h5 className="client-name">{name}</h5>
                <small className="client-review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials
