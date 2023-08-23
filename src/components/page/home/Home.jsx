import React from 'react'
import Header from '../header/Header'
import Coffee from './Coffee'
import WelcomeImg from './WelcomeImg'
import Blog from './Blog'
import Footer from '../footer/Footer'
export default function Home() {
  



  return (
    <>
      <Header/>
      <Coffee/>
      <div className='home-box-qt'>
        <div className='container-box-qt'>
          <h1>If you want coffee, coffee and cake will stay.</h1>
          <div className="Btn-box-qt">
            <a href="#">
              menu Coffee
            </a>
          </div>
        </div>
      </div>
      <WelcomeImg/>
      <Blog/>
      <Footer/>
      
    </>


  )
}
