import './Footer.css';
import React from 'react';
import telegram from "./images/telegram.svg"
import githubImg from "./images/github.svg"
import vkImg from "./images/vk.svg"

function Footer() {

    function getCurrentDate() {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
        const year = currentDate.getFullYear();

        return `${day}.${month}.${year}`;
    }

    const formattedDate = getCurrentDate();



    return (
        <footer className="footer">
            <div className='footer__link-conteiner'>
                <div className='footer__logo'></div>
                <nav className="footer-nav">
                    <ul className='footer__navigation'>
                        <li className='footer__link'><a className='footer__link-punct' href="https://t.me/+79284702312"><img className='footer__link-img' src={telegram} target='blank' alt="Иконка телеграмм" /></a></li>
                        <li className='footer__link'><a className='footer__link-punct' href="https://vk.com/andreika01"><img className='footer__link-img' src={vkImg} target='blank' alt="иконка Вконтакте" /></a></li>
                        <li className='footer__link'><a className='footer__link-punct' href="https://github.com/kudinov-andrej" target='blank'><img className='footer__link-img' src={githubImg} alt="иконка Гитхаб" /></a></li>
                    </ul>
                </nav >
            </div>
            <p className='footer__date'>Web-developer: A.Kudinov</p>
            <p className='footer__date'>{formattedDate}</p>
        </footer>
    );
}

export default Footer;
