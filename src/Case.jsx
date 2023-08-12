import React from 'react';
import './Case.css';
import video from './images/video.png';
import music from './images/music.svg';
import soundFrequence from './images/sound-frequency.png';
import hearing from './images/hearing.svg';

function Case() {


    return (
        <section className='case'>
            <h2 className="case__title">What we do?</h2>
            <p className="case__text">Our English language school offers immersive learning experiences, helping students develop strong language skills through interactive lessons, engaging activities, and cultural exploration. Join us to unlock a world of communication opportunities!</p>
            <ul className="advantages-list">
                <li className="advantages-item">
                    <img className='advantages-item-img' src={video} alt="изображение"></img>
                    <h2 className='advantages-item-title'>Engage and Learn with Videos</h2>
                    <p className='advantages-item-text'>Incorporating videos into language lessons enhances comprehension, vocabulary, and cultural understanding. Dive into dynamic visual content to make learning both fun and informative.</p>
                </li>
                <li className="advantages-item">
                    <img className='advantages-item-img' src={music} alt="изображение"></img>
                    <h2 className='advantages-item-title'>Rhythmic Language Fluency</h2>
                    <p className='advantages-item-text'>Integrating music into lessons enhances language rhythm, intonation, and memorization. Enjoy the melody while honing your language skills</p>
                </li>
                <li className="advantages-item">
                    <img className='advantages-item-img' src={soundFrequence} alt="изображение"></img>
                    <h2 className='advantages-item-title'>Dialogue Mastery for Fluent Communication</h2>
                    <p className='advantages-item-text'> Learning through dialogues fosters natural language flow, builds confidence in real-life conversations, and hones interactive language use in diverse contexts</p>
                </li>
                <li className="advantages-item">
                    <img className='advantages-item-img' src={hearing} alt="изображение"></img>
                    <h2 className='advantages-item-title'>Tune In to Language Proficiency</h2>
                    <p className='advantages-item-text'>Regular listening exercises, podcasts, and audio materials refine auditory skills, aiding comprehension and pronunciation development, leading to effective communication.</p>
                </li>
            </ul>
        </section>
    )
}

export default Case;