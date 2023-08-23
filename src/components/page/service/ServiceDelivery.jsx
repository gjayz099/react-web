import React from 'react'
import RiderImg from '../img/Rider-service-pic.png'
import { BiCycling, BiCoffeeTogo, BiSolidBox } from 'react-icons/bi'
export default function ServiceDelivery() {
  return (
    <section>
        <div className='container-service-delivery'>
            <div class="service-delivery-row">
                <div className='item-service-delivery'>
                    <img src={RiderImg} alt="" />
                </div>
                <div className='item-service-delivery'>
                    <h3>Your <span>Favorite Coffee, On The Way!</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi saepe accusantium mollitia impedit necessitatibus suscipit laudantium quasi reiciendis.</p>
                    <div className='service-delivery-icon-items'>
                        <div className='delivery-icon-item'>
                            <BiCycling className='icon-service'/>
                            <h6><span>Delivery in 30 minutes</span></h6>
                        </div>
                        <div className='delivery-icon-item'>
                            <BiCoffeeTogo className='icon-service'/>
                            <h6><span>Free Shipping From ₱150</span></h6>
                        </div>
                        <div className='delivery-icon-item'>
                            <BiSolidBox className='icon-service'/>
                            <h6><span>Delivery on Your Doorstep</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
