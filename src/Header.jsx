import './Header.css';
import React from 'react';

function Header() {
    return (
        <header className='header'>
            <div className='header-conteiner'>
                <div className='header__logo'></div>
                <nav className='header__navigation'>
                    <ul className='header__navigation-list'>
                        <li className='header__navigation-punct'>What we do</li>
                        <li className='header__navigation-punct'>Our results</li>
                        <li className='header__navigation-punct'>Ontact us</li>
                    </ul>
                </nav>
            </div>
            <section className='project'>
                <h2 className='project__title'>Global Linguistic Academy: Mastering Languages for a Connected World</h2>
                <p className='project__subtitle'>Unlocking Worlds Through Language Mastery</p>
                <a className='project__link' href="tel:+79284702312">
                    <button className='progect__button' type='button' >Позвонить</button>
                </a>
                <p className='project__text'>Discover the Global Linguistic Academy: Your path to language mastery in an interconnected world. Our vibrant hub offers immersive courses in various languages, personalized for beginners and those seeking fluency. Gain a competitive edge in the global job market through enriched cultural experiences. Join us and explore linguistic and cultural horizons!</p>
            </section>
        </header>
    );
}

export default Header;
