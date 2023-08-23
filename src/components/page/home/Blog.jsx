import React from 'react'
import img1 from '../img/blog-pic1.jpg'
import img2 from '../img/blog-pic2.jpg'
import img3 from '../img/blog-pic3.jpg'
import img4 from '../img/blog-pic4.jpg'

const blogData = [ //Array Dta Blog
    {
        id : 1, 
        Name : 'Work Place',
        parag : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, perferendis', 
        Date : 'June 10', 
        Img : img1
    },
    {
        id : 2, 
        Name : 'Meetings Place', 
        parag : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, perferendis', 
        Date : 'April 16 ', 
        Img : img2
    },
    {
        id : 3, 
        Name : 'Grinding Coffee', 
        parag : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, perferendis', 
        Date : 'March 20', 
        Img : img3
    },
    {
        id : 4, 
        Name : 'Party Place', 
        parag : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, perferendis', 
        Date : 'August 5', 
        Img : img4
    }
]



export default function Blog() {

    return (
    <section>
        <div className='blog-contianer'>
            <div className='blog-title'>
                <h1>Blog Coffee</h1>
            </div>
            <div className='blog-items-row'>
                {blogData.map((item) => 
                <div className='blog-item'>
                    <div className='img-blog'>
                        <img src={item.Img} alt="" className='blogImg-border'/>
                        <div className='btn-blog'>
                            <a href="#">Details</a>
                        </div>
                    </div>
                    
                    <div className='text-blog'>
                        <div className='date-admin'>
                            <h3>{item.Date}</h3>
                            <h3>Event <span>Admin</span></h3>
                        </div>
                        <h1>{item.Name}</h1>
                        <p>{item.parag}</p>
                    </div>
              
                </div>
                )}
            </div>
        </div>
    </section>
    )
}
