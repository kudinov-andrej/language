import React from 'react';
import './Result.css';
import video from './images/video.png';
import music from './images/music.svg';
import soundFrequence from './images/sound-frequency.png';
import hearing from './images/hearing.svg';

function Result() {


    return (
        <section className='result'>
            <h2 className="result__title">Achievements of Our Language School</h2>
            <p className="result__text"> In the past year, our language school achieved remarkable results. A 92% course completion rate, 80% of students improved their speaking proficiency, 65% actively engaged in cultural events, and 75% demonstrated higher placement test scores. Join our success story!</p>
            <ul className="result-list">
                <li className="result-item">
                    <div className='result-item-img'>
                        <h2 className='result-item-title'>98%</h2>
                        <p className='result-item-text'>Course Completion Rate</p>
                    </div>
                </li>
                <li className="result-item">
                    <div className='result-item-img'>
                        <h2 className='result-item-title'>99%</h2>
                        <p className='result-item-text'>Speaking Proficiency Improvement</p>
                    </div>
                </li>
                <li className="result-item">
                    <div className='result-item-img'>
                        <h2 className='result-item-title'>100%</h2>
                        <p className='result-item-text'>Cultural Engagement Rate</p>
                    </div>
                </li>
                <li className="result-item">
                    <div className='result-item-img'>
                        <h2 className='result-item-title'>Placement Test Success</h2>
                        <p className='result-item-text'>95%</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Result;