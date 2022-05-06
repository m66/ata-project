import './main.scss';
import SlideBar from './slideBar/SlideBar';
import Goods from './goods/Goods';
import PartnersSlider from './partnersSlider/PartnersSlider';
import CarouselSlider from './carousel/CarouselSlider';

function Main() {
    return (
        <div className='main'>
            {/* <CarouselSlider /> */}
            <SlideBar />
            <PartnersSlider />
            <Goods />
        </div>
    )
}

export default Main;