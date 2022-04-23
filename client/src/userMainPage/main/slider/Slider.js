import React, { useState } from 'react';
import './slider.scss';
import BtnSlider from './BtnSlider'
import dataSlider from './DataSlider';

function Slider() {

    const   [slideIndex, setSlideIndex] = useState(1);

    const nextSlider = () => {
        if(slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if(slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    }

    const prevSlider = () => {
        if(slideIndex !== 1) {
            setSlideIndex( slideIndex -1 );
        } else if(slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    return (

        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div 
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"} 
                    key={obj.id}
                    >
                        <img src={process.env.PUBLIC_URL + `../imgs/img${index + 1}.jpg`} />
                    <p>{obj.title}</p>
                    </div>
                )
            })}
            <BtnSlider moveSlider={nextSlider} direction={'next'} />
            <BtnSlider moveSlider={prevSlider} direction={'prev'} />
            
            <div className='container-dots'>
                {Array.from({length: 5}).map((item, index) => (
                    <div className='dot'></div>
                ))}
            </div>
        </div>
    )
}

export default Slider;