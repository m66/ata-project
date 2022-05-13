import './list.scss';
import defaultLogo from '../../images/default-store-logo.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

//slide-bar
function List() {

    const [active, setActive] = useState('');
    const [toggleBar, setToggleBar] = useState(false);

    return (
        <div className={`list ${toggleBar === true ? 'close': 'open'}`}>
            <button className='close-btn' onClick={
                (e) => {
                    setToggleBar(!toggleBar);
                }
            }>
                <FontAwesomeIcon icon={faAngleDoubleLeft} className={toggleBar === true ? 'close-icon' : 'animate__animated animate__fadeInLeft open-icon'} />
                <FontAwesomeIcon icon={faAngleDoubleRight} className={toggleBar === true ? 'open-icon animate__animated animate__fadeInRight' : ' close-icon'}/>
            </button>
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
                <Link to='/goods'><li className={active === 'Goods'? 'active':''} onClick={
                    (e) => setActive(e.currentTarget.textContent)
                }>Goods</li></Link>
                <Link to='/co-workers'><li className={active === 'Co-workers'? 'active':''} onClick={
                    (e) => setActive(e.currentTarget.textContent)
                }>Co-workers</li></Link>
                <Link to='/order'><li className={active === 'My orders'? 'active':''} onClick={
                    (e) => setActive(e.currentTarget.textContent)
                }>My orders</li></Link>
                <Link to='/market'><li className={active === 'Market'? 'active':''} onClick={
                    (e) => setActive(e.currentTarget.textContent)
                }>Market</li></Link>
                <Link to='/progress'><li className={active === 'Progress'? 'active':''} onClick={
                    (e) => setActive(e.currentTarget.textContent)
                }>Progress</li></Link>
                <Link to='/tax-field'><li className={active === 'Tax Field'? 'active':''} onClick={
                    (e) => setActive(e.currentTarget.textContent)
                }>Tax Field</li></Link>
                <Link to='/feedback'><li className={active === 'Feedback'? 'active':''} onClick={
                    (e) => setActive(e.currentTarget.textContent)
                }>Feedback</li></Link>
                <Link to='/settings'><li className={active === 'Settings'? 'active':''} onClick={
                    (e) => setActive(e.currentTarget.textContent)
                }>Settings</li></Link>
            </ul>
        </div>
    )
}

export default List;