import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineMenuFold} from 'react-icons/ai'



export default function Navbar() {

    // use state
    const [ menuNav, setmenuNav ] = React.useState(false)
    const [ StickyNav, setStickyNav ] = React.useState(false)

    const menuClickNav = () =>{
        setmenuNav(!menuNav) //Declering Not
    }

      // scroll
    const StickyScroll = () => {
        if(window.scrollY >= 70)
        setStickyNav(true); // Declering True
        else{
        setStickyNav(false); // Declering Flase
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', StickyScroll); // use effect function
    })

    const linksdata = [
        'Home', 'Coffee', 'Service', 'Gallery', 'Team'  // Array link
    ]

    return (
        <nav className={StickyNav? 'stikyscrool' : ""}>
            <a href='#' className='logo'>
                <h3>G<span>J</span></h3>
                <h2>Choffe<span> Shop</span></h2>
            </a>
            <ul className={ menuNav? 'openNavlink' : ''}>
                <li>
                    <a>
                        <Link to='/'>{linksdata[0]}</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to='/Coffee'>{linksdata[1]}</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to='/Service'>{linksdata[2]}</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to='/Gallery'>{linksdata[3]}</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to='/Team'>{linksdata[4]}</Link>
                    </a>
                </li>
            </ul>
            <div className={ menuNav?'nemu-bar openmenu' : 'nemu-bar' } onClick={menuClickNav}>
                { menuNav? <AiOutlineMenuFold/> :<AiOutlineMenu/>}
            </div>
        </nav>
    )
}
