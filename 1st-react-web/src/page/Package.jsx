import React from 'react'

// ----- img
import packagepicItem1 from '../img/packagepicItem1.jpg'
import packagepicItem2 from '../img/packagepicItem2.jpg'
import packagepicItem3 from '../img/packagepicItem3.jpg'

// --- boxicon
import {BiSolidStar, BiSolidStarHalf} from 'react-icons/bi'

export default function Package() {

  // array
  const packageItems = [
    {
      id: 1,
      pic: packagepicItem1,
      name: 'Package One',
      price: "35,688",
      parg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      link: 'dsadasdsadsadsadsa',
    },
    {
      id: 2,
      pic: packagepicItem2,
      name: 'Package Two',
      price: "35,688",
      parg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      link: 'dsadasdsadsadsadsa',
    },
    {
      id: 3,
      pic: packagepicItem3,
      name: 'Package Three',
      price: "35,688",
      parg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      link: 'dsadasdsadsadsadsa',
    },
  ]


  // map package
  const contentservice = packageItems.map((serviceitem) =>
    <div className='service-Items' key={serviceitem.id}>
      <div className='img-service'>
        <img src={serviceitem.pic} alt="" />
        <a href='#' className='btn-ratings-service'>
          <a href="#">Package</a>
          <div className='start-service'>
            <BiSolidStar/>
            <BiSolidStar/>
            <BiSolidStar/>
            <BiSolidStar/>
            <BiSolidStarHalf/>
          </div>
        </a>
      </div>
      <div className='service-text'>
        <div className='name-price-service'>
          <h2>{serviceitem.name}</h2>
          <h4>₱{serviceitem.price}</h4>
        </div>
        <p>{serviceitem.parg}</p>
      </div>
    </div>
  )


  return (
    <section id='Package'>
      <div className='contanier-package'>
        <div className='package-title'>
            <h1>GJ Package</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='row-package'>
          {contentservice}
        </div>
      </div>
    </section>

  )
}
