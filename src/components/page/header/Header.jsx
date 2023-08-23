import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules'


export default function Header() {
    const homeTitle = ['Popular', 'Strong', 'Famous']
    return (
        <header className='home-header'>
        <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 5500,
            disableOnInteraction: false,}}
            modules={[Autoplay]}>
            
            <SwiperSlide className='titles-header'>
            <div className='title-header'>
                <h1>Most {homeTitle[0]} <span>Coffee</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit recusandae.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide className='titles-header'>
            <div className='title-header'>
                <h1>Most {homeTitle[1]} <span>Coffee</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit recusandae.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide className='titles-header'>
            <div className='title-header'>
                <h1>Most {homeTitle[2]} <span>Coffee</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit recusandae.</p>
            </div>
            </SwiperSlide>
        </Swiper>
        </header>
    )
}
