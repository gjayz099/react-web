import React from 'react'
import Img1 from '../img/cake_coffee-img1.jpg'
import Img2 from '../img/cake_coffee-img2.jpg'


export default function WelcomeImg() {
  return (
    <section>
        <div className='wel-img-home'>
            <div className='wel-img-home-row'>
                <div className='wel-img-home-items'>
                    <div className='wel-img-home-item'>
                        <img src={Img1} alt="" className='wel-shadow'/>
                    </div>
                    <div className='wel-black'></div>
                </div>
                <div className='wel-img-home-items'>
                    <div className='wel-black'></div>
                    <div className='wel-img-home-item'>
                        <img src={Img2} alt=""  className='wel-shadow'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
