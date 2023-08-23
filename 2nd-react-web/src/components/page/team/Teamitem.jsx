import React from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagramAlt} from 'react-icons/bi'

const TeamItemData = [
    {   id: 1, name: 'Gerald Glen Dangcalan', position: 'Founder', fblink: 'dsadsadsadsadsadsadsa', twlink: 'dsadsadsadsadsadsadsadsa', lnlink: 'dsadsadsadsadsadsadsad', Imglink: 'https://wallpaperaccess.com/full/6584825.jpg',  },
    {   id: 2, name: 'Marry Chell Castro', position: 'Co Founder', fblink: 'dsadsadsadsadsadsadsa', twlink: 'dsadsadsadsadsadsadsadsa', lnlink: 'dsadsadsadsadsadsadsad', Imglink: 'https://wallpaperaccess.com/full/1743405.jpg',  },
    {   id: 3, name: 'Ken Ruen Rivera', position: 'Main Maker', fblink: 'dsadsadsadsadsadsadsa', twlink: 'dsadsadsadsadsadsadsadsa', lnlink: 'dsadsadsadsadsadsadsad', Imglink: 'https://wallpaperaccess.com/full/1848658.jpg',  },
    {   id: 4, name: 'Primerose Obedencio', position: 'Main Casher', fblink: 'dsadsadsadsadsadsadsa', twlink: 'dsadsadsadsadsadsadsadsa', lnlink: 'dsadsadsadsadsadsadsad', Imglink: 'https://wallpaperaccess.com/full/2040534.jpg',  },
]

export default function Teamitem() {
  return (
    <section>
        <div className='container-team'>
            <div className='tattle-team'>
                <h1>Our Team</h1>
            </div>
            <div className='team-row'>
                {TeamItemData.map((item) =>
                    <div className='item-team-card'>
                        <img src={item.Imglink} alt="" />
                        <div className='content-team'>
                            <div className='team-name-position'>
                                <h2>{item.name}</h2>
                                <h5>{item.position}</h5>
                            </div>
                        </div>
                        <div className='team-link-socail'>
                            <a href={item.fblink}> <BiLogoFacebook className='icon-socail-team fb' /> </a>
                            <a href={item.twlink}> <BiLogoTwitter className='icon-socail-team tw' /> </a>
                            <a href={item.lnlink}> <BiLogoInstagramAlt className='icon-socail-team ln' /> </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}
