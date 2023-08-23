import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='top-footer'>
          {/* item */}
          <div className='top-footer-item'>
            <div className='logo-footer'>
              <a href="#">
                <h3>G<span>J</span></h3>
                <h2>Coffee Shop</h2>
              </a>
            </div>
            <div className='footer-parag'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem maxime incidunt, autem quos distinctio!</p>
            </div>
          </div>
          <div className='top-footer-item'>
            <li className='top-link-footer'>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </div>
          <div className='top-footer-item'>
            <li className='top-link-footer'>Page</li>
            <li>Coffee</li>
            <li>Service</li>
            <li>Team</li>
          </div>
          <div className='top-footer-item'>
            <li className='top-link-footer'>Socials</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </div>
          <div className='top-footer-item'>
            <li className='top-link-footer'>Product Link</li>
            <li>Instraction</li>
            <li>Syyle Guide</li>
            <li>Category</li>
          </div>
        </div>
        <div className='botton-footer'>
            <div className='myname-footer'>Design and Development By <a href="#">Geraldglen Dangcalan</a></div>
        </div>
      </div>
    </footer>
  )
}
