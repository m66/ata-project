import './ads.scss';
import adsImg  from '../../images/ads-example.jpg';

function Ads() {
    return (
        <div className='ads'>
            <img src={adsImg} />
        </div>
    )
}

export default Ads;