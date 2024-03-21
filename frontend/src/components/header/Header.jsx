import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/Me.jpg'
import HeaderSocial from './HeaderSocial'
import Advert from "./Advert";

export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                {/* advert */}
                <h3><Advert /></h3>
                <br />
                <h4>Hello I'm</h4>
                <h1>Nyochembeng Nkengafack</h1>
                <h5 className='text-light'>A Software Engineering Student</h5>
                <CTA />
                <HeaderSocial />
                <div className='my_image'>
                    <img src={me} alt='Me' className='me'/>
                    <span className='img_hover'></span>
                </div>
                <a href='#contact' className='scroll__down'>Scroll down</a>

            </div>
        </header>
    )
}
export default Header;
