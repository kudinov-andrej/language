import './PopupMenu.css';
import React from 'react';
import { Link } from 'react-scroll';

function PopupMenu({ openPopupMenu, toggleMenu, handleOverlayClick }) {
    return (
        <div className={!openPopupMenu ? 'popup' : 'popup popup-active'}
            onClick={handleOverlayClick}
        >
            <button className='popup__button-close'
                type='button'
                onClick={toggleMenu}
            ></button>
            <nav className='popup__navigation'>
                <ul className='popup__navigation-list'>
                    <li className='popup__navigation-punct'><Link to="section1" smooth={true} duration={1000}>What we do</Link></li>
                    <li className='popup__navigation-punct'><Link to="section2" smooth={true} duration={1500}>Our results</Link></li>
                    <li className='popup__navigation-punct'><Link to="section3" smooth={true} duration={2000}>Ontact us</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default PopupMenu;
