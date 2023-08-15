import React from 'react'
import { BiUser, BiSolidEnvelope, BiSolidMessageAlt, BiCurrentLocation, BiPhone } from 'react-icons/bi'

export default function Contact() {
  return (
    <section id='Contact'>
        <div className='container-contact'>
            <form className="contact-form">
                <div className="heading">
                    <h2>CONTACT US</h2>
                    <p>feel free to reach out to us, we'd love to hear from you!</p>
                </div>

                <div class="input">
                    <BiUser className='icon-about' />
                    <input name="username" type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <BiSolidEnvelope className='icon-about' />
                    <input name="email" type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <BiSolidMessageAlt className='icon-about' />
                    <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <input className="button" type="button" value="Submit" />
            </form>



            <div className="contact-info">
                <h3 className="heading">OUR INFORMATIONS</h3>
                <ul className="contacts">
                    <li>
                        <BiCurrentLocation className='icon-contact' />
                        Philipines, Davao del sur, Davao city 8111
                    </li>
                    <li>
                        <BiSolidEnvelope className='icon-contact'/>
                        gjayz@dangz@gamil.com
                    </li>
                    <li>
                        <BiPhone className='icon-contact'/>
                        +639514616792
                    </li>

                </ul>
                <div class="social-links"></div>
            </div>
        </div>
    </section>
  )
}
