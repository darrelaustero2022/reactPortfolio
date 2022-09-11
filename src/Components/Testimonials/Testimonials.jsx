import React from 'react'
import './testimonials.css'
import Client1 from '../../Assets/Anthony wong.JPG'
import Client2 from '../../Assets/danmelita.JPG'
import Client3 from '../../Assets/SandraWilliams.JPG'
import {Pagination, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Client Feedback</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className='client__avatar'>
            <img src={Client1} alt="first client"/>
          </div>
          <h5 className='client__name'>Anthony Wong</h5>
          <small className='client__review'>" He always keeps me updated ".</small>
        </SwiperSlide> 
        <SwiperSlide className="testimonial">
          <div className='client__avatar'>
            <img src={Client2} alt="first client"/>
          </div>
          <h5 className='client__name'>Dan Melita</h5>
          <small className='client__review'>" Very organized and time conscious ".</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial"> 
          <div className='client__avatar'>
            <img src={Client3} alt="first client"/>
          </div>
          <h5 className='client__name'>Sandra Williams</h5>
          <small className='client__review'>" Thank you! My website is back up ".</small>
          
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials