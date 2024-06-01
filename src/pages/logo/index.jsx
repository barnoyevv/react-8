import React from 'react'
import './index.css'
import Tesla2 from '../../assets/tesla2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Index = () => {
  return (
    <section className="loginn">
    <div className="container">
    <Swiper   navigation={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Navigation, Autoplay]} className="mySwiper">
    
        <SwiperSlide>
         <div className='login'>
           <img src={Tesla2} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
     
      </div>
      </section>
  )
}

export default Index