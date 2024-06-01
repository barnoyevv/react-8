import React from 'react'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Tesla3 from '../../assets/tesla3.png'

const Index = () => {
  return (
   <>
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
           <img src={Tesla3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='login'>
           <img src={Tesla3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
     
      </div>
      </section></>
  )
}

export default Index