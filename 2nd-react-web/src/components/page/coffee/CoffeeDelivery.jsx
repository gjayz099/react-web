import React from 'react'
import DeliveryImg from '../img/delivery.jpg'

export default function CoffeeDelivery() {
  return (
    <section>
        <div className='container-coffee-delivery'>
            <div className='row-coffee-delivery'>
                <div className='coffee-delivery-item'>
                    <img src={DeliveryImg} alt="" />
                </div>
                <div className='coffee-delivery-item'>
                    <h1>We Guarantee, <span>30 Minutes Delivery</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt aut vel nesciunt nostrum, dignissimos eius ratione, distinctio, aliquam ullam voluptates odit itaque illo temporibus.</p>
                    <div className='btn-delivery'>
                        <a href="#">Order Now</a>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
