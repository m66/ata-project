import React from 'react';
import './slider.scss';
import rightArrow from './icons/right-arrow.png';
import leftArrow from './icons/left-arrow.png';

function BtnSlider({direction, moveSlider}) {
    return ( 
        <div>
            <button
            onClick={moveSlider}
            className={direction === "next" ? 'btn-slider next' : 'btn-slider prev'}
            >
                <img 
                    src={direction === "next" ? rightArrow : leftArrow}
                />
            </button>
        </div>
     );
}

export default BtnSlider;