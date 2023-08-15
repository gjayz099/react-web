import React from 'react'
import Servicepic from '../img/service-pic.jpg'

// icon
import { BiHomeSmile, BiSolidCar, BiSolidBowlRice } from 'react-icons/bi'



export default function Service() {
  return (
    <section id='Service'>
        <div className='contanier-service'>
            <div className='service-title'>
                <h1>GJ Service</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniamt quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        </div>
        <div className='service-row'>
            <div className='service-item'>
                <div className='icon-service'>
                    <BiHomeSmile />
                </div>
                <div className='service-item-text'>
                    <h3>Room Booking</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                </div>
            </div>
            <div className='service-item'>
                <div className='icon-service'>
                    <BiSolidCar />
                </div>
                <div className='service-item-text'>
                    <h3>Tour Forest</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                </div>
            </div>
            <div className='service-item'>
                <div className='icon-service'>
                    <BiSolidBowlRice />
                </div>
                <div className='service-item-text'>
                    <h3>Special Food</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                </div>
            </div>
        </div>

        <div className='pic-service'>
            <img src={Servicepic} alt="" />
        </div>
    </section>
  )
}
