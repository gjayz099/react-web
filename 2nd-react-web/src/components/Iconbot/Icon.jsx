import React from 'react'
import { useState, useEffect } from 'react'
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi'


export default function Icon() {

    //use state
    const [ StickyIcon, setStickyIcon ] = useState(false)

    // scroll
    const StickyscrollIcon = () => {
        if(window.scrollY >= 70)
            setStickyIcon(true);
        else{
            setStickyIcon(false);
        }
    }
    // use effect function
    useEffect(() => {
        window.addEventListener('scroll', StickyscrollIcon);
    })
    return (
        <div className={StickyIcon?'items-icon stikyicon' : 'items-icon'}>
            <a className='icon'>
                <BiLogoFacebookSquare/>
            </a>
            <a className='icon'>
                <BiLogoInstagramAlt/>
            </a>
            <a className='icon'>
                <BiLogoTwitter/>
            </a>
        </div>              
    )
}
