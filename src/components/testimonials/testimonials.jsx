import React from 'react'
import './testimonials.css'

// importing user avatars
import AVTR1 from '../../assets/student.jpg'
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
    avatar: AVTR1,
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
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>


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
          data.map(({ avatar, name, review },index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className="client_avatar">
                  <img src={avatar} alt="avtar user" />
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