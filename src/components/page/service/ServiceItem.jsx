import React from 'react'



const AllServiceData = [ //Array data Service
    {   id: 1, name: 'Convenient Coffee', parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id excepturi quidem blanditiis consectetur adipisicing elit psum dolor sit amet.', IconLink: 'https://img.icons8.com/ios/300/coffee-to-go.png',},
    {   id: 2, name: 'Convenient Cake', parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id excepturi quidem blanditiis consectetur adipisicing elit psum dolor sit amet.', IconLink: 'https://img.icons8.com/ios/300/cake.png',},
    {   id: 3, name: 'TakeOut Or Dine-In', parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id excepturi quidem blanditiis consectetur adipisicing elit psum dolor sit amet.', IconLink: 'https://img.icons8.com/ios/300/take-away-food.png',},
    {   id: 4, name: 'Special Offers', parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id excepturi quidem blanditiis consectetur adipisicing elit psum dolor sit amet.', IconLink: 'https://img.icons8.com/ios/300/sell.png',},
    {   id: 5, name: 'Online Ordering', parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id excepturi quidem blanditiis consectetur adipisicing elit psum dolor sit amet.', IconLink: 'https://img.icons8.com/ios/300/calling.png',},
    {   id: 6, name: 'Delivery Service', parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id excepturi quidem blanditiis consectetur adipisicing elit psum dolor sit amet.', IconLink: 'https://img.icons8.com/windows/300/delivery.png',}
]




export default function ServiceItem() {
  return (
    <section>
        <div className='container-serviceItem'>
            <div className='title-serviceItem'>
                <h1>All Service</h1>
            </div>
            <div className='row-service-items'>
                {AllServiceData.map((item) =>
                <div className='service-item'>
                    <div className='icon-img'>
                        <img src={item.IconLink}/>
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.parag}</p>
                    <div className='icon-img-opacity'>
                        <img src={item.IconLink} alt="" />
                    </div>
                </div>
                )}  
            </div>
        </div>
    </section>
  )
}
