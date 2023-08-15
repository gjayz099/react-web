import React, { useState, useEffect } from 'react'
import { BiMenuAltLeft, BiMenuAltRight} from "react-icons/bi";

export default function Navbar() {

  // use stast 
  const [ToggleNav, setToggleNav] = useState(false)

  const [StickyNav, setStickyNav] = useState(false)

  //use stast funnction
  // menu click
  const menuToggle = () =>{
    setToggleNav(!ToggleNav);
  }
  // scroll
  const StickyScroll = () => {
    const scrollnavV = window.scrollY;
    if(scrollnavV >= 50)
      setStickyNav(true);
    else{
      setStickyNav(false);
    }
  }
  // use effect function
  useEffect(() => {
    window.addEventListener('scroll', StickyScroll);
  })

  // Array link
  const linksdata = [
    'Home', 'Service', 'Package', 'Gallery', 'Contact'
  ]

  return (
    <nav className={StickyNav? 'stikyscrool' : ""}>
      <a href='#' className='logo'>
        <h3>G<span>J</span></h3>
        <h2>Tour &<span> Travel</span></h2>
      </a>
      <ul className={ToggleNav?'nav-links navbarul':'nav-links'}>
        <li>
          <a href='#Navbar'>{linksdata[0]}</a>
        </li>
        <li>
          <a href='#Service'>{linksdata[1]}</a>
        </li>
        <li>
          <a href='#Package'>{linksdata[2]}</a>
        </li>
        <li>
          <a href='#Gallery'>{linksdata[3]}</a>
        </li>
        <li>
          <a href='#'>{linksdata[4]}</a>
        </li>
      </ul>
      <div className={ToggleNav?'menu whitemenu' : 'menu'} onClick={menuToggle}>
        {ToggleNav?<BiMenuAltRight/> : <BiMenuAltLeft/>}
      </div>
    </nav>
  )
}

