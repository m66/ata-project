import './slideBar.scss';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import Slider from '../slider/Slider';

function SlideBar() {
    
    const breakPoints = [
            {with: 1, itemsToShow: 1},
            {with: 500, itemsToShow: 2},
            {with: 768, itemsToShow: 3}
    ]
    
    return (
        <div className='slide-bar'>
            <div className='news'>
                {/* <Carousel breakPoints={breakPoints}>
                    <Card number='1'></Card>
                    <Card number='2'></Card>
                    <Card number='3'></Card>
                </Carousel> */}


                <Slider />

                
            </div>

            <div className=''> 

            </div>
        </div>
    )
}

export default SlideBar;