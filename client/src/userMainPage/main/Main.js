import './main.scss';
import SlideBar from './slideBar/SlideBar';
import Goods from './goods/Goods';
import PartnersSlider from './partnersSlider/PartnersSlider';

function Main() {
    return (
        <div className='main'>
            <SlideBar />
            <PartnersSlider />
            <Goods />
        </div>
    )
}

export default Main;