import './list.scss';
import defaultLogo from '../../images/default-store-logo.jpg';
import { Link } from 'react-router-dom';

//slide-bar
function List() {
    return (
        <div className='list'>  
            <div className='user-info'>
                <img src={defaultLogo} alt='default-store-logo'/>
                <div className='user-info-wrapper'>
                    <p>Company Name</p>
                    <p>Owner</p>
                    <p>Phone</p>
                    <p>Mail</p>
                    <p>#Id</p>
                </div>
            </div>
            <ul>
                <Link to='/goods'><li>Goods</li></Link>
                <Link to='/co-workers'><li>Co-workers</li></Link>
                <Link to='/order'><li>My orders</li></Link>
                <Link to='/market'><li>Market</li></Link>
                <Link to='/progress'><li>Progress</li></Link>
                <Link to='/tax-field'><li>Tax Field</li></Link>
                <Link to='/feedback'><li>Feedback</li></Link>
                <Link to='/settings'><li>Settings</li></Link>
            </ul>
        </div>
    )
}

export default List;