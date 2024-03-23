import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/Me.jpg'
import HeaderSocial from './HeaderSocial'

export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h4>Hello I'm</h4>
                <h1>Nyochembeng Enzo Nkengafack</h1>
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
